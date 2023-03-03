import React, { useEffect, useState } from 'react'
import { TheReadTime } from '../../../packages/the-read-time/src'
import { getStoryById, getStoryIds } from '../api/hnApi'

export const AsyncContent: React.FC = () => {
  const [list, setList] = useState([])
  const [id, setId] = useState()
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  useEffect(() => {
    ;(async () => {
      const res = await getStoryIds({ storyType: 'askstories' })
      const ids = Object.values(res?.data)
      setList(ids)
      setId(ids[0])
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      const {
        data: { title, text }
      } = await getStoryById({
        storyId: id
      })
      setTitle(title)
      setText(text)
    })()
  }, [id])

  return (
    <div>
      <select onChange={(e) => setId(e.target.value)}>
        {list?.map((item) => {
          return <option key={item} value={item}>{item}</option>
        })}
      </select>
      <TheReadTime>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{__html: text}} />
      </TheReadTime>
    </div>
  )
}
