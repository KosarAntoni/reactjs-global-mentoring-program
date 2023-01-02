import React from 'react'
import { css, Global } from '@emotion/react'

export const globalStyles = (
  <Global
    styles={css`
      html {
        font-size: 62.5%;
      }

      body {
        font-family: var(--primary-font);
        font-size: 1.6rem;
        color: var(--primary-color);
        background-color: var(--page-background);
      }
    `}
  />
)
