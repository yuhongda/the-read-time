import React, { useState } from 'react'
import styled from 'styled-components'
import { TheReadTime } from '../../../packages/the-read-time/src'

const Container = styled.div`
  width: 100%;
  height: 500px;
`

export const Example: React.FC = () => {

  return (
    <Container>
      <TheReadTime />
    </Container>
  )
}
