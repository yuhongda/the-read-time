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
      <TheReadTime>
        The Article <strong>blablabla...</strong> ha-ha!! 
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </TheReadTime>
    </Container>
  )
}
