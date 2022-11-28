import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_URL, MOVIES_LIMIT } from 'consts'
import { RootState } from 'store'

export const fetchMovies = createAsyncThunk(
  'movies/fetchSortedMovies',
  async ({ genres, sort, limit = MOVIES_LIMIT }: { genres?: string[], sort?: 'vote_average' | 'release_date', limit?: number }) => {
    const response = await fetch(`${API_URL}/movies?${sort ? `sortBy=${sort}&sortOrder=desc&` : ''}${genres ? `filter=${genres.join(',')}&` : ''}limit=${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    return data.data
  }
)

export const fetchSingleMovie = createAsyncThunk(
  'movies/fetchSingleMovie',
  async (id: number) => {
    const response = await fetch(`${API_URL}/movies/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    return data
  }
)

export interface Movie {
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

export interface MoviesState {
  all: Movie[]
  single?: Movie
}

const initialState: MoviesState = {
  all: []
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    clearSingleMovie: (state) => {
      state.single = undefined
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.all = action.payload
      })
      .addCase(fetchSingleMovie.fulfilled, (state, action) => {
        state.single = action.payload
      })
  }
})

export const selectAllMovies = (state: RootState) => state.movies.all
export const selectSingleMovie = (state: RootState) => state.movies.single

export const { clearSingleMovie } = moviesSlice.actions

export default moviesSlice.reducer
