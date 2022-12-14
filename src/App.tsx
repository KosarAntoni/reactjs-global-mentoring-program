import React, { FC } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import Layout from 'templates/Layout'
import NotFound from 'templates/NotFound'

import './App.styles.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/search' />,
    errorElement: <NotFound />

  },

  {
    path: '/search',
    element: <Layout />,
    children: [
      {
        path: '/search/:searchQuery',
        element: <h2>im nested</h2>
      }
    ]
  }

])

const App: FC = () => {
  return (<RouterProvider router={router} />)
}

export default App
