import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const AvatarContainer = styled.div`
  width: 20%;
  min-height: 100%;
  background-color: #fff;
  border-radius: 1em;
  margin-left: 1em;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

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
  padding: 0 0.5em;
  text-align: center;
  font-size: 1em;
  font-weight: 400;
  letter-spacing: 0.7px;

  ${({ styledVariant }) => {
    if (styledVariant === 'signIn') {
      return css`
        margin-bottom: 1em;
      `;
    }
    if (styledVariant === 'profile') {
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

export const StyledLink = styled(Link)`
  background-color: var(--accept);
  color: #fff;
  border-radius: 5px;
  padding: 0 1em;
  min-height: 44px;
  display: flex;
  align-items: center;
  font-size: 0.8em;
  transition: all 0.3s;

  &:hover {
    filter: brightness(80%);
  }

  ${({ styledVariant }) => {
    if (styledVariant === 'signIn') {
      return css`
        background-color: var(--accept);
      `;
    }
    if (styledVariant === 'signOut') {
      return css`
        background-color: var(--danger);
        margin-top: 2em;
      `;
    }
  }}
`;
