import type { ReactNode } from "react";

export interface TheReadTimeProps {
  minuteIcon?: ReactNode
  fiveMinutesIcon?: ReactNode
  quarterIcon?: ReactNode
  time?: number
  children?: ReactNode
}
