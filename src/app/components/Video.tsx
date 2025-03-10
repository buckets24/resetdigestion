'use client'
import { useEffect, useCallback } from 'react'
import { useVSL } from '../context/VSLContext'

// Types
interface WistiaOptions {
  autoPlay?: boolean
  playbar?: boolean
  volumeControl?: boolean
  smallPlayButton?: boolean
  fullscreenButton?: boolean
}

interface VideoProps {
  videoId: string
  timerSeconds: number
  options: WistiaOptions
}

// Components
const VideoPlayer = ({ videoId }: { videoId: string }) => (
  <div className="video-container">
    <div className="wistia_responsive_padding relative pt-[56.25%] pr-0 pb-0 pl-0">
      <div className="wistia_responsive_wrapper absolute top-0 left-0 h-full w-full">
        <div
          className={`wistia_embed m-auto h-full w-full wistia_async_${videoId}`}
        />
      </div>
    </div>
  </div>
)

const LoadingMessage = () => (
  <div className="beforedrop hideonplay hidden w-full px-[16px] md:block md:px-0 md:pt-[25px]">
    <div className="text-[20px]">
      <p className="inline-flex max-w-[776px] items-center text-center font-semibold md:m-auto">
        <img
          className="mr-[5px] h-[16px] w-[16px] md:h-[24px] md:w-[24px]"
          src="https://resetdigestion.com/pages/er-vslfb-v3/charm_sound.png?v=56?v=1"
          alt="Sound icon"
        />
        <span className="mr-[5px] text-[22px] font-bold text-[#d0190d]">
          IMPORTANT:
        </span>
        <span className="align-middle text-black">
          Your video may take 10 seconds to load. Make sure your sound is on.
        </span>
      </p>
    </div>
  </div>
)

const DoctorInfo = () => (
  <div className="hideonplay beforedrop hidden w-full px-[16px] pb-[10px] md:block md:w-[204.8px] md:px-0">
    <div className="flex flex-col gap-[10px]">
      <div>
        <img
          src="https://resetdigestion.com/pages/er-vslfb-v3/drginasam.png?v=56?v=1"
          className="ginaimage w-[81.96px] md:w-[147.2px]"
          alt="Dr. Gina Sam"
        />
      </div>
      <div className="flex flex-col">
        <span className="max-w-fit rounded-[2px] bg-[#e34134] px-1 text-[12.8px] font-[600] text-nowrap text-white">
          Top Gastroenterologist 2024
        </span>
        <span className="text-[25.6px] leading-[32px] font-[700] text-[#1c624d] underline">
          Dr. Gina Sam M.D
        </span>
      </div>
    </div>
    <p className="text-[18px] text-black md:text-[13px]">
      <b>
        Dr. Gina Sam, MD, is a leading NYC gastroenterologist and former
        director of the Mount Sinai Gastrointestinal Motility Center
      </b>
      . Over her 20-year career, Dr. Sam has specialized in treating digestive
      and metabolic disorders, founding the Institute of Gastrointestinal
      Motility Disorders and Integrative Health in New York City.
      <em>
        Dr. Sam&apos;s research has positioned her at the forefront of
        understanding
        <b>obesity, fatigue and other metabolic dysfunctions.</b>
      </em>
    </p>
  </div>
)

// Utilities
const createDebounce = (wait: number) => {
  let timeout: NodeJS.Timeout
  return (func: (...args: any[]) => void) => {
    return (...args: any[]) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func(...args), wait)
    }
  }
}

// Main Component
const Video = ({ videoId, timerSeconds, options }: VideoProps) => {
  const { isMobile, isVideoPlaying, setButtonDrop, setIsVideoPlaying } =
    useVSL()

  const toggleFullscreenMode = useCallback((show: boolean) => {
    const videoContainer = document.querySelector('.video-container')
    const doctorInfo = document.querySelector(
      '[data-id="hero-section-doctor-info"]'
    )
    const wistiaWrapper = document.querySelector(
      '[data-id="wistia-wrapper-v3"]'
    )

    if (!videoContainer || !wistiaWrapper || !doctorInfo) return

    const fullscreenClasses = [
      '!px-0',
      '!py-0',
      'lg:!h-screen',
      'lg:!w-full',
      'lg:!max-w-full',
      'lg:!max-h-full'
    ]

    if (show) {
      videoContainer.classList.add('fullwidth')
      doctorInfo.classList.replace('block', 'hidden')
      wistiaWrapper.classList.add(...fullscreenClasses)
      wistiaWrapper.children[0]?.classList.add('w-full', 'max-w-full')
    } else {
      videoContainer.classList.remove('fullwidth')
      doctorInfo.classList.replace('hidden', 'block')
      wistiaWrapper.classList.remove(...fullscreenClasses)
      wistiaWrapper.children[0]?.classList.remove('w-full', 'max-w-full')
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'b') setButtonDrop(true)
    }

    const initializeWistia = (video: any) => {
      const debouncedResize = createDebounce(300)
      const videoContainer = document.querySelector(
        '.video-container'
      ) as HTMLElement

      const handleVideoResize = debouncedResize(() => {
        if (!videoContainer) return

        const aspectRatio = video.aspect()
        const windowHeight = window.innerHeight
        let toHeight = Math.floor(window.innerWidth / aspectRatio)
        let toWidth = videoContainer.offsetWidth

        if (isMobile) {
          video.width(toWidth, { constrain: true })
          videoContainer.style.height = `${Math.min(toHeight - 4, windowHeight)}px`
        } else if (video.state() === 'playing') {
          toHeight = Math.min(toHeight, windowHeight)
          toWidth = Math.floor(toHeight * aspectRatio)
          video.width(toWidth, { constrain: true })
        }
      })

      if (isMobile) {
        handleVideoResize()
        window.addEventListener('resize', handleVideoResize)
        video.bind('widthchange', handleVideoResize)
      }

      video
        .bind('secondchange', (seconds: number) => {
          if (seconds === timerSeconds) setButtonDrop(true)
        })
        .bind('play', () => {
          setIsVideoPlaying(true)
          toggleFullscreenMode(true)
        })
        .bind('pause', () => {
          setIsVideoPlaying(false)
          toggleFullscreenMode(false)
        })

      return () => {
        if (isMobile) {
          window.removeEventListener('resize', handleVideoResize)
          video.unbind('widthchange', handleVideoResize)
        }
      }
    }

    // Load Wistia Script
    const scriptTag = document.createElement('script')
    scriptTag.src = 'https://fast.wistia.com/assets/external/E-v1.js'
    scriptTag.async = true

    scriptTag.onload = () => {
      if (window.location.hash === '#videobar') options.playbar = true
      ;(window as any)._wq = (window as any)._wq || []
      ;(window as any)._wq.push({
        id: videoId,
        options,
        onReady: initializeWistia
      })
    }

    document.head.appendChild(scriptTag)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.head.removeChild(scriptTag)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [
    videoId,
    timerSeconds,
    options,
    isMobile,
    setIsVideoPlaying,
    toggleFullscreenMode
  ])

  return (
    <div
      id="vidcont"
      className="vidcont2 m-auto flex w-full max-w-[1085.8px] flex-col gap-[16px] bg-[#ffffff] px-[0] py-[0] shadow-2xl md:flex-row md:gap-[35px] md:px-[35px] md:pt-[45px] md:pb-[20px]"
    >
      <div className="block flex-grow-1">
        <VideoPlayer videoId={videoId} />
        <LoadingMessage />
      </div>
      {!isVideoPlaying && <DoctorInfo />}
    </div>
  )
}

export default Video
