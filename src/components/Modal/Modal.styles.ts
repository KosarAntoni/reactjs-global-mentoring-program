import styled from '@emotion/styled'

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  & .content {
    position: relative;
    z-index: var(--modal-content);

    padding: 6rem;

    background-color: var(--page-background);
    box-shadow: 0 0 2px rgb(0 0 0 / 10%), 0 2px 10px rgb(0 0 0 / 7%),
      0 10px 20px rgb(0 0 0 / 5%), 0 10px 50px rgb(0 0 0 / 5%);
  }

  & .background {
    position: absolute;
    z-index: var(--ground);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    opacity: 0.9;
    background-color: var(--page-background);
    backdrop-filter: blur(12px);
  }

  & .close-button {
    cursor: pointer;

    position: absolute;
    top: 2.5rem;
    right: 2.5rem;

    padding: 0;

    font-size: 3rem;
    line-height: 0.6;
    color: var(--primary-text);

    background: none;
    border: none;
  }
`
