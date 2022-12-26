
import React from 'react'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import store from 'store'

import '../styles/index.scss'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <div id='modal-root'></div>
    </Provider>
  )
}
