import React from 'react'
import s from './style.module.scss'
import type { TheReadTimeProps } from './types'
import wordCount from './wordCount'
import extractTextFromReactNode from './extractTextFromReactNode'

export const TheReadTime: React.FC<TheReadTimeProps> = (props) => {
  const { minuteIcon = '🍣', fiveMinutesIcon = '🍔', quarterIcon = '🍱' } = props

  const text = extractTextFromReactNode(props.children)
  console.log(text)
  const count = wordCount(text)
  console.log(count)

  return (
    <div className={s.container}>
      <div>
        {minuteIcon}
        {fiveMinutesIcon}
        {quarterIcon}
      </div>
      {props.children}
    </div>
  )
}
export { TheReadTime as default }
