import styled, { css } from 'styled-components';

export const SnackbarContainer = styled.div`
  position: absolute;
  top: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  width: 100%;
  min-height: 44px;
  transform: translateY(-100%);
  transition: all 1s;

  ${({ styledColor }) => {
    if (styledColor === 'danger') {
      return css`
        background-color: #ffe2e2;
      `;
    }
  }}

  ${({ styledColor }) => {
    if (styledColor === 'success') {
      return css`
        background-color: #cce5ff;
      `;
    }
  }}

  ${({ active }) =>
    active &&
    css`
      transform: translateY(0);
    `}
`;

export const Text = styled.p`
  text-align: center;
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 1px;

  ${({ styledColor }) => {
    if (styledColor === 'danger') {
      return css`
        color: var(--danger);
      `;
    }
    if (styledColor === 'success') {
      return css`
        color: var(--success);
      `;
    }
  }}
`;
