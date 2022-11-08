import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'

const appRoot = document.getElementById('app-root')
if (appRoot == null) throw new Error('Failed to find the root element')

const root = createRoot(appRoot)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
