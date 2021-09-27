import styled, { css } from 'styled-components';

export const ImageBorder = styled.div`
  width: 100%;
  height: 30%;
  position: absolute;
  top: 0;
  background-color: var(--brown);
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 0;
  padding-top: 30%;
  width: 30%;
  overflow: hidden;
  margin-bottom: 1em;
`;

export const Image = styled.img`
  border: 3px solid #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const H6 = styled.h6`
  color: var(--brown);
  padding: 0 1em;
  font-size: 1em;
  font-weight: 400;
  letter-spacing: 0.7px;

  ${({ styledvariant }) => {
    if (styledvariant === 'signIn') {
      return css`
        margin-bottom: 1em;
      `;
    }
    if (styledvariant === 'profile') {
      return css`
        margin-bottom: 0.5em;
      `;
    }
  }}
`;

export const Text = styled.p`
  color: var(--brown);
  font-weight: 200;
  font-size: 0.9em;
`;

export const Button = styled.button`
  color: #fff;
  border-radius: 5px;
  padding: 0 1em;
  background-color: var(--danger);
  margin-top: 2em;
  transition: all 0.3s;

  &:hover {
    filter: brightness(80%);
  }
`;
