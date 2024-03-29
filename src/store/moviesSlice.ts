import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { API_URL, MOVIES_LIMIT } from 'consts'
import { HYDRATE } from 'next-redux-wrapper'
import { RootState } from 'store'

export const fetchAllMovies = createAsyncThunk(
  'movies/fetchSortedMovies',
  async ({ genres, sort, search, limit = MOVIES_LIMIT }: { genres?: string[], sort?: 'vote_average' | 'release_date', search?: string | string[], limit?: number }) => {
    const url = [
      `${API_URL}/movies?`,
      `${search ? `search=${search.toString()}&searchBy=title&` : ''}`,
      `${sort ? `sortBy=${sort}&sortOrder=desc&` : ''}`,
      `${genres ? `filter=${genres.join(',')}&` : ''}`,
      `limit=${limit}`
    ].join('')

    const response = await fetch(url, {
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

export const deleteMovie = createAsyncThunk(
  'movies/deleteMovie',
  async (id: number) => {
    const response = await fetch(`${API_URL}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    return data
  }
)

export const addMovie = createAsyncThunk(
  'movies/addMovie',
  async (body: Movie) => {
    const response = await fetch(`${API_URL}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    const data = await response.json()
    return data
  }
)

export const editMovie = createAsyncThunk(
  'movies/addMovie',
  async (body: Movie) => {
    const response = await fetch(`${API_URL}/movies`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
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
  single?: Movie | null
}

const initialState: MoviesState = {
  all: []
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    clearSingleMovie: (state) => {
      state.single = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMovies.fulfilled, (state, action) => {
        state.all = action.payload
      })
      .addCase(fetchSingleMovie.fulfilled, (state, action) => {
        state.single = action.payload
      })
      .addCase(HYDRATE, (state, action) => {
        const typedAction = action as PayloadAction<RootState>
        state.all = typedAction.payload.movies.all
      })
  }
})

export const selectAllMovies = (state: RootState) => state.movies.all
export const selectSingleMovie = (state: RootState) => state.movies.single

export const { clearSingleMovie } = moviesSlice.actions

export default moviesSlice.reducer
