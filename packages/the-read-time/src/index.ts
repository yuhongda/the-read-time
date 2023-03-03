import TheReadTime from './TheReadTime'
import type { TheReadTimeProps, Step } from './types'
import wordCount from './wordCount'
import extractTextFromReactNode from './extractTextFromReactNode'
import convertTimeToEmoji from './convertTimeToEmoji'
import convertNumberToTime from './convertNumberToTime'

export type { TheReadTimeProps, Step }
export { TheReadTime, wordCount, extractTextFromReactNode, convertTimeToEmoji, convertNumberToTime }
export default {
  TheReadTime,
  wordCount,
  extractTextFromReactNode,
  convertTimeToEmoji,
  convertNumberToTime
}
