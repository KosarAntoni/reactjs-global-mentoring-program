import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import NotFound from 'templates/NotFound'

const NotFoundPage: NextPage = () => {
    return (
      <>
        <Head>
          <title>Not Found</title>
          <link href='/favicon.ico' rel='icon' />
        </Head>

        <NotFound/>
      </>
)
}

export default NotFoundPage
