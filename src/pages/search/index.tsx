import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { AppStore, wrapper } from 'store/index'
import { fetchAllMovies } from 'store/moviesSlice'

import Layout from 'templates/Layout'

const IndexPage: NextPage = () => {
    return (
      <>
        <Head>
          <title>Search</title>
          <link href='/favicon.ico' rel='icon' />
        </Head>

        <Layout />
      </>
    )
  }

export default IndexPage

export const getServerSideProps = wrapper.getServerSideProps(
  (store: AppStore) => async () => {
    await store.dispatch(fetchAllMovies({}))
    return {
      props: {}
    }
  }
)
