import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'store'

interface Movie {
  id: number
  title: string
  tagline: string
  vote_average: number
  vote_count: number
  release_date: string
  poster_path: string
  overview: string
  budget: number
  revenue: number
  genres: string[]
  runtime: number
}

interface MoviesState {
  movies: Movie[]
}

const initialState: MoviesState = {
  movies: []
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {}
})

export const selectCount = (state: RootState) => state.counter.value

export default moviesSlice.reducer
