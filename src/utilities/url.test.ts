import { appendToParams, removeFromParams } from './url'

const paramsMock = new URLSearchParams()
const movie1 = { movie: '381288' }
const movie2 = { movie: '578' }
const genre = { genre: 'horror' }
const lorem = { lorem: 'ipsum' }
paramsMock.append('movie', movie1.movie)
paramsMock.append('genre', genre.genre)

test('appendToParams util works correct', () => {
    // correct replace param
    expect(appendToParams(paramsMock)).toStrictEqual({ ...genre, ...movie1 })
    expect(appendToParams(paramsMock, movie2)).toStrictEqual({ ...genre, ...movie2 })
    expect(appendToParams(paramsMock, lorem)).toStrictEqual({ ...genre, ...movie1, ...lorem })

    // if empthy searchParams return only new value
    expect(appendToParams(new URLSearchParams(), movie2)).toStrictEqual({ ...movie2 })
})

test('removeFromParams util works correct', () => {
    // correct replace param
    expect(removeFromParams(paramsMock, 'genre')).toStrictEqual({ ...movie1 })
    expect(removeFromParams(paramsMock, 'test')).toStrictEqual({ ...genre, ...movie1 })
    expect(removeFromParams(paramsMock, '')).toStrictEqual({ ...genre, ...movie1 })

    // if empthy searchParams return empthy object
    expect(removeFromParams(new URLSearchParams(), 'genre')).toStrictEqual({ })
})
