import React from 'react'
import s from './style.module.scss'
import type { TheReadTimeProps } from './types'
import wordCount from './wordCount'
import extractTextFromReactNode from './extractTextFromReactNode'
import { DEFAULT_BASE, DEFAULT_READ_SPEED, DEFAULT_STEPS } from './misc'
import convertTimeToEmoji from './convertTimeToEmoji'
import { formatDuration, intervalToDuration } from 'date-fns'
import convertNumberToTime from './convertNumberToTime'

export const TheReadTime: React.FC<TheReadTimeProps> = (props) => {
  const { steps = DEFAULT_STEPS, speed = DEFAULT_READ_SPEED, time, displayRender } = props

  const text = extractTextFromReactNode(props.children)
  const count = wordCount(text)
  const totalTime = count / speed
  const totalTimeString = convertNumberToTime(totalTime)
  const processSteps = steps.sort((a, b) => b.minutes - a.minutes)
  const emoji = convertTimeToEmoji(processSteps, time || totalTime)

  return (
    <div className={s.container}>
      {displayRender ? (
        displayRender(emoji, totalTime)
      ) : (
        <div>
          {emoji}
          {totalTimeString}
        </div>
      )}
      {props.children}
    </div>
  )
}
export { TheReadTime as default }
