'use client'

import { createContext, useContext, useState, useEffect } from 'react'

interface VSLContextType {
  buttonDrop: boolean
  setButtonDrop: (value: boolean) => void
  isMobile: boolean
  setIsMobile: (value: boolean) => void
  isVideoPlaying: boolean
  setIsVideoPlaying: (value: boolean) => void
}

const VSLContext = createContext<VSLContextType | undefined>(undefined)

export function useVSL() {
  const context = useContext(VSLContext)
  if (!context) {
    throw new Error('useVSL must be used within a VSLProvider')
  }
  return context
}

interface VSLProviderProps {
  children: React.ReactNode
}

export function VSLProvider({ children }: VSLProviderProps) {
  const [buttonDrop, setButtonDrop] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      )
    }

    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  return (
    <VSLContext.Provider
      value={{
        buttonDrop,
        setButtonDrop,
        isMobile,
        setIsMobile,
        isVideoPlaying,
        setIsVideoPlaying
      }}
    >
      {children}
    </VSLContext.Provider>
  )
}
