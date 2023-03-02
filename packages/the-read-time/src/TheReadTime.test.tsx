import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'
import React from 'react'
import TheReadTime from './TheReadTime'

describe('<TheReadTime />', () => {
  afterEach(() => {
    cleanup()
  })

  it('The article is show', () => {
    render(
      <TheReadTime>
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
      </TheReadTime>
    )
    expect(screen.getByText(/The Article/i)).toBeDefined()
  })

  it('The Read Time is show in text, 37"', () => {
    render(
      <TheReadTime>
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
      </TheReadTime>
    )
    expect(screen.getByText(/37"/i)).toBeDefined()
  })

  it('The Read Time is show in Emoji and text, 🍣1\'15"', () => {
    render(
      <TheReadTime speed={100}>
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
      </TheReadTime>
    )
    expect(screen.getByText(/🍣/i)).toBeDefined()
    expect(screen.getByText(/1\'15"/i)).toBeDefined()
  })

  it('The Read Time is show in Emoji and text, 🍔🍔🍣🍣12\'30"', () => {
    render(
      <TheReadTime speed={10}>
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
      </TheReadTime>
    )
    expect(screen.getByText(/🍔🍔🍣🍣/i)).toBeDefined()
    expect(screen.getByText(/12\'30"/i)).toBeDefined()
  })

  it('The Read Time is show in Emoji and text, 🍱🍔🍔25\'', () => {
    render(
      <TheReadTime speed={5}>
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
      </TheReadTime>
    )
    expect(screen.getByText(/🍱🍔🍔/i)).toBeDefined()
    expect(screen.getByText(/25\'/i)).toBeDefined()
  })

  it('The Read Time is show in Emoji and text, 🍱🍱🍔🍔🍣41\'40"', () => {
    render(
      <TheReadTime speed={3}>
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
      </TheReadTime>
    )
    expect(screen.getByText(/🍱🍱🍔🍔🍣/i)).toBeDefined()
    expect(screen.getByText(/41\'40"/i)).toBeDefined()
  })
})
