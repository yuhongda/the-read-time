import React, { useState } from 'react'
import styled from 'styled-components'
import { TheReadTime } from '../../../packages/the-read-time/src'

const Container = styled.div`
  width: 100%;
  height: 500px;
`

export const Example: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <TheReadTime speed={100}>
        <p>Many resources indicate that the average reading speed of most adults is around 200 to 250 words per minute, which translates to two minutes per page. College students, probably because they must practice reading, move that pace up a notch to about 300 words per minute. 

Admittedly, not everyone can read fast and hit the average reading speed regardless of one’s age. Many factors play a role in how fast a person can read, such as practice, reading material, and their health. However, this does not mean that they can’t improve their reading pace. 

Tag along as we discuss average reading speed, factors affecting one’s reading speed and comprehension, and ways to improve reading speed.</p>
        The Article <strong>blablabla...</strong> ha-ha!! 哈哈哈
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </TheReadTime>
    </Container>
  )
}
