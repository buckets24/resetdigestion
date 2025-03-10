'use client'

import { useVSL } from '../../context/VSLContext'

const BeforeDrop = ({ children }: { children: React.ReactNode }) => {
  const { buttonDrop } = useVSL()

  if (buttonDrop) return null

  return children
}

export default BeforeDrop
