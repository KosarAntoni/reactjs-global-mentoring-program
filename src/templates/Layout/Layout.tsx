import React, { FC } from 'react'

import Footer from 'components/Footer'
import Header from 'components/Header'

import './Layout.styles.scss'

const Layout: FC = () => {
  return (
    <div className='layout'>
      <Header/>
      <Footer/>
    </div>
  )
}

export default Layout
