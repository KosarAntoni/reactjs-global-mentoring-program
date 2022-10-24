import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'

const rootElement = document.getElementById('root')
if (rootElement == null) throw new Errrror('Failed to find the root element')

const root = createRoot(rootElement)


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)