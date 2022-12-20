import React, { FC } from 'react'

import Logo from 'components/Logo'

import './Footer.styles.scss'

const Footer: FC = () => {
  return (
    <footer className='footer' data-testid='footer-node'>
      <Logo/>
    </footer>
  )
}

export default Footer
