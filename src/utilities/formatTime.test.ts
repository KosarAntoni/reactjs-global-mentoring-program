import { numberToFormTime, numberToTime, timeToNumber } from './formatTime'

test('numberToTime util work correctly', () => {
    expect(numberToTime(123)).toBe('02h 03min')
    expect(numberToTime(123456)).toBe('2057h 36min')
    expect(numberToTime(0)).toBe('00h 00min')
})

test('numberToFormTime util work correctly', () => {
    expect(numberToFormTime(123)).toBe('02:03')
    expect(numberToFormTime(123456)).toBe('2057:36')
    expect(numberToFormTime(0)).toBe('00:00')
})

test('timeToNumber util work correctly', () => {
    expect(timeToNumber('00:00')).toBe(0)
    expect(timeToNumber('2057:36')).toBe(123456)
    expect(timeToNumber('02:03')).toBe(123)
    expect(timeToNumber('test')).toBe(0)
    expect(timeToNumber('')).toBe(0)
})
