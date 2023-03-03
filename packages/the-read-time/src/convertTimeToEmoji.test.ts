import { describe, it, expect } from 'vitest'
import convertTimeToEmoji from './convertTimeToEmoji'

const steps = [
  {
    icon: '🍣',
    minutes: 1
  },
  {
    icon: '🍔',
    minutes: 5
  },
  {
    icon: '🍱',
    minutes: 15
  }
].sort((a, b) => b.minutes - a.minutes)

describe('convertTimeToEmoji()', () => {
  it('100 minutes => 🍱🍱🍱🍱🍱🍱🍔🍔', async () => {
    const emoji = convertTimeToEmoji(steps, 100)
    expect(emoji.flat().join('')).toEqual('🍱🍱🍱🍱🍱🍱🍔🍔')
  })
})
