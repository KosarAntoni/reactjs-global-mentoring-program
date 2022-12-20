import React, { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import type { PreloadedState } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import type { RenderOptions } from '@testing-library/react'
import { render } from '@testing-library/react'
import type { AppStore, RootState } from 'store'
import moviesSlice, { initialState } from 'store/moviesSlice'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export function renderWithProviders (
  ui: React.ReactElement,
  {
    preloadedState = {
        movies: initialState
    },
    store = configureStore({ reducer: { movies: moviesSlice }, preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper ({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <Provider store={store}>
        {children}
      </Provider>
    )
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
