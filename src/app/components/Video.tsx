interface VideoStyles {
  [key: string]: React.CSSProperties
}

const videoStyles: VideoStyles = {
  responsivePadding: {
    padding: '56.25% 0 0 0',
    position: 'relative'
  },
  responsiveWrapper: {
    height: '100%',
    left: '0',
    position: 'absolute',
    top: '0',
    width: '100%'
  },
  wistiaEmbed: {
    height: '100%',
    width: '100%'
  }
}

const VideoPlayer = () => (
  <div className="wistia-container">
    <div
      className="wistia_responsive_padding"
      style={videoStyles.responsivePadding}
    >
      <div
        className="wistia_responsive_wrapper"
        style={videoStyles.responsiveWrapper}
      >
        <div
          className="wistia_embed seo=false videoFoam=true m-auto"
          style={videoStyles.wistiaEmbed}
        >
          &nbsp;
        </div>
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
        Dr. Sam&apos;s research has positioned her at the forefront of understanding
        <b>obesity, fatigue and other metabolic dysfunctions.</b>
      </em>
    </p>
  </div>
)

const Video = () => {
  return (
    <div
      id="vidcont"
      className="vidcont2 m-auto flex w-full max-w-[1085.8px] flex-col gap-[16px] bg-[#ffffff] px-[0] py-[0] shadow-2xl md:flex-row md:gap-[35px] md:px-[35px] md:pt-[45px] md:pb-[20px]"
    >
      <div className="block flex-grow-1">
        <VideoPlayer />
        <LoadingMessage />
      </div>
      <DoctorInfo />
    </div>
  )
}

export default Video
