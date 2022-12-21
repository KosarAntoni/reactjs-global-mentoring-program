import { configureStore } from '@reduxjs/toolkit'
import moviesSlice from 'store/moviesSlice'

const store = configureStore({
  reducer: {
    movies: moviesSlice
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppStore = ReturnType<typeof configureStore>
export type AppDispatch = typeof store.dispatch
