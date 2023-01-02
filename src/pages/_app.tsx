
import React, { FC } from 'react'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { wrapper } from 'store'

import { globalStyles } from 'styles/index'

const App: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest)
  return (
    <Provider store={store}>
      {globalStyles}
      <Component {...props.pageProps} />
      <div id='modal-root' />
    </Provider>
  )
}

export default App
