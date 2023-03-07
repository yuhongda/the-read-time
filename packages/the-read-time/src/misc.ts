import type { Step } from './types'

export const DEFAULT_STEPS: Step[] = [
  {
    icon: '🍱',
    minutes: 15
  },
  {
    icon: '🍔',
    minutes: 5
  },
  {
    icon: '🍣',
    minutes: 1
  }
]

/**
 * words read per minute
 */
export const DEFAULT_READ_SPEED = 200
