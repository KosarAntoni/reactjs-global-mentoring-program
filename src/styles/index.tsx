import React from 'react'
import { css, Global } from '@emotion/react'

import { fonts } from './fonts'
import { normalize } from './normalize'
import { variables } from './variables'

const global = css`
  ${normalize}
  ${variables}
  ${fonts}

  html {
    font-size: 62.5%;
  }

  body {
    font-family: var(--primary-font);
    font-size: 1.6rem;
    color: var(--primary-color);
    background-color: var(--page-background);
  }
`

export const globalStyles = <Global styles={global} />
