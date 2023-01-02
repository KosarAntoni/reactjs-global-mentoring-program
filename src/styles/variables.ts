import { css } from '@emotion/react'

export const variables = css`
  :root {
    // colors
    --pastele-red: #f65261;
    --almoast-black: #232323;
    --gray: #424242;
    --light-gray: #555;
    --white: #fff;

    // variables
    --page-background: var(--almoast-black);
    --primary-text: var(--white);
    --secondary-text: var(--light-gray);
    --primary-font: 'Montserrat', sans-serif;

    // z-index
    --ground: 0;
    --modal-content: 10;
  }
`
