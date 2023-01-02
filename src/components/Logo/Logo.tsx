import React, { FC } from 'react'
import classNames from 'classnames'

import { StyledLogo } from './Logo.styles'

import { LogoProps } from './Logo.models'

const Logo: FC<LogoProps> = ({ className }) => (
  <StyledLogo className={classNames('logo', className)}>
    <b>netflix</b>
    roulette
  </StyledLogo>
)

export default Logo
