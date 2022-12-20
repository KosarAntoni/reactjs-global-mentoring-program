import store from '.'
import { deleteMovie, fetchAllMovies, fetchSingleMovie } from './moviesSlice'

const movieResponseMock = {
    id: 346364,
    title: 'It',
    tagline: 'Your fears are unleashed',
    vote_average: 7.1,
    vote_count: 7250,
    release_date: '2017-09-05',
    poster_path: 'https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg',
    overview: 'In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.',
    budget: 35000000,
    revenue: 700381748,
    genres: [
        'Drama',
        'Horror',
        'Thriller'
    ],
    runtime: 134
}

test('fetchSingleMovie test', async () => {
    global.fetch = jest.fn(async () => await Promise.resolve({
        json: async () => await Promise.resolve(movieResponseMock)
    })) as any

    await store.dispatch(fetchSingleMovie(346364))
    const state = store.getState()
    expect(state.movies.single).toEqual(movieResponseMock)
})

test('fetchAllMovies test', async () => {
    global.fetch = jest.fn(async () => await Promise.resolve({
        json: async () => await Promise.resolve({ data: [movieResponseMock] })
    })) as any

    await store.dispatch(fetchAllMovies({}))
    const state = store.getState()
    expect(state.movies.all).toEqual([movieResponseMock])
})

test('deleteMovie test', async () => {
    global.fetch = jest.fn(async () => await Promise.resolve({
        json: async () => await Promise.resolve({ status: 200 })
    })) as any

    const response = await store.dispatch(deleteMovie(movieResponseMock.id))
    expect(response.payload.status).toEqual(200)
})
