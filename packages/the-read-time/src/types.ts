import type { ReactNode } from "react";

export type Step = {
  icon: ReactNode
  minutes: number
}

export interface TheReadTimeProps {
  steps?: Step[]
  /**
   * How many words read per minute
   */
  speed?: number
  /**
   * in minute
   */
  time?: number
  displayRender?: (emoji: ReactNode[], totalTime: number) => ReactNode
  children?: ReactNode
}
