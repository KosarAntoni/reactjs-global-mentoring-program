import { formatGenres } from './formatGenres'

test('formatGenres util work correctly', () => {
    expect(formatGenres([
        'Drama',
        'Romance'
    ])).toBe('Drama & Romance')

    expect(formatGenres([
        'Drama',
        'Romance',
        'Lorem',
        'Ipsum'
    ])).toBe('Drama, Romance, Lorem, Ipsum')
})
