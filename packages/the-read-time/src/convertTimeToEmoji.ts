import type { ReactNode } from 'react'
import type { Step } from './types'

const convertTimeToEmoji = (steps: Step[], totalTime: number): ReactNode[] => {
  if (steps.length === 0) {
    return []
  }

  const [step, ...rest] = steps
  const num = Math.floor(totalTime / step.minutes)

  return [new Array(num).fill(step.icon), ...convertTimeToEmoji(rest, totalTime % step.minutes)]
}

export default convertTimeToEmoji
