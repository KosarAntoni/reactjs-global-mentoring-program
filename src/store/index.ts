import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import moviesSlice from 'store/moviesSlice'

const store = () => configureStore({
  reducer: {
    movies: moviesSlice
  }
})

export default store
export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export const wrapper = createWrapper<AppStore>(store)
