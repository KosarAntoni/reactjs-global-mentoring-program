import React, { FC } from 'react'
import classNames from 'classnames'

import { LogoProps } from './Logo.models'

const Logo: FC<LogoProps> = ({ className }) => (
  <span className={classNames('logo', className)}>
    <b>netflix</b>
    roulette
  </span>
)

export default Logo
