import React, { FC } from 'react'

import Logo from 'components/Logo'

import { StyledFooter } from './Footer.styles'

const Footer: FC = () => {
  return (
    <StyledFooter className='footer'>
      <Logo />
    </StyledFooter>
  )
}

export default Footer
