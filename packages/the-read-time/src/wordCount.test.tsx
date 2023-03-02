import React from 'react'
import { describe, it, expect } from 'vitest'
import extractTextFromReactNode from './extractTextFromReactNode'
import wordCount from './wordCount'

describe('wordCount()', () => {
  it('wordCount works fine', async () => {
    const text = extractTextFromReactNode(
      <>
        <p>
          Many resources indicate that the average reading speed of most adults is around 200 to 250
          words per minute, which translates to two minutes per page. College students, probably
          because they must practice reading, move that pace up a notch to about 300 words per
          minute. Admittedly, not everyone can read fast and hit the average reading speed
          regardless of one’s age. Many factors play a role in how fast a person can read, such as
          practice, reading material, and their health. However, this does not mean that they can’t
          improve their reading pace. Tag along as we discuss average reading speed, factors
          affecting one’s reading speed and comprehension, and ways to improve reading speed.
        </p>
        The Article <strong>blablabla...</strong> ha-ha!! 哈哈哈
      </>
    )
    const count = wordCount(text)
    expect(count).toEqual(125)
  })
})
