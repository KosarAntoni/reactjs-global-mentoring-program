import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import Layout from 'templates/Layout'

const IndexPage: NextPage = () => {
    return (
      <div>
        <Head>
          <title>Redux Toolkit</title>
          <link href='/favicon.ico' rel='icon' />
        </Head>

        <Layout />
      </div>
    )
  }

export default IndexPage
