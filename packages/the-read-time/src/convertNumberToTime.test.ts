import { describe, it, expect } from 'vitest'
import convertNumberToTime from './convertNumberToTime'

describe('convertNumberToTime()', () => {
  it('1.27 => 1\'16"', async () => {
    const totalTimeString = convertNumberToTime(1.27)
    expect(totalTimeString).toEqual('1\'16\"')
  })

  it('60 => 1h', async () => {
    const totalTimeString = convertNumberToTime(60)
    expect(totalTimeString).toEqual('1h')
  })

  it('121 => 2h1\'', async () => {
    const totalTimeString = convertNumberToTime(121)
    expect(totalTimeString).toEqual('2h1\'')
  })

  it('121.5 => 2h1\'30"', async () => {
    const totalTimeString = convertNumberToTime(121.5)
    expect(totalTimeString).toEqual('2h1\'30"')
  })

  it('100', async () => {
    const totalTimeString = convertNumberToTime(100)
    expect(totalTimeString).toEqual('1h40\'')
  })
})
