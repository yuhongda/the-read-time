import React from 'react'
import type { TheReadTimeProps } from './types'
import wordCount from './wordCount'
import extractTextFromReactNode from './extractTextFromReactNode'
import { DEFAULT_READ_SPEED, DEFAULT_STEPS } from './misc'
import convertTimeToEmoji from './convertTimeToEmoji'
import convertNumberToTime from './convertNumberToTime'

export const TheReadTime: React.FC<TheReadTimeProps> = (props) => {
  const { steps = DEFAULT_STEPS, speed = DEFAULT_READ_SPEED, time, displayRender } = props

  const text = extractTextFromReactNode(props.children)
  const count = wordCount(text)
  const totalTime = time || count / speed
  const totalTimeString = convertNumberToTime(totalTime)
  const processSteps = steps.sort((a, b) => b.minutes - a.minutes)
  const emoji = convertTimeToEmoji(processSteps, totalTime)

  return (
    <div>
      {displayRender ? (
        displayRender(emoji, totalTime)
      ) : (
        <div>
          {emoji.flat().join('')}
          {totalTimeString}
        </div>
      )}
      {props.children}
    </div>
  )
}
export { TheReadTime as default }
