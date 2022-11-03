import React, { FC } from 'react'
import classNames from 'classnames'

import { LogoProps } from './Logo.models'

import './Logo.styles.scss'

const Logo: FC<LogoProps> = ({ className }) => (
  <span className={classNames('logo', className)}>
    <b>netflix</b>
    roulette
  </span>
)

export default Logo
