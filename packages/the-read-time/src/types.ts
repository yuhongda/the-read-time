import type { ReactNode } from 'react'

export type Step = {
  icon: ReactNode
  minutes: number
}

export interface TheReadTimeProps {
  /**
   * @default [{icon:"🍱",minutes:15},{icon:"🍔",minutes:5},{icon:"🍣",minutes:1}]
   */
  steps?: Step[]
  /**
   * How many words read per minute
   * @default 200
   */
  speed?: number
  /**
   * total time in minute
   */
  time?: number
  displayRender?: (emoji: ReactNode[], totalTime: number) => ReactNode
  children?: ReactNode
}
