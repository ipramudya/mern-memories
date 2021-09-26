import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BannerContainer = styled.div`
  width: ${({ wide }) => (wide ? '80%' : '100%')};
  position: relative;
  padding-bottom: 20em;
`;

export const ImageContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  inset: 0;
`;

export const BannerImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 1em;
`;

export const Content = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 3em;
  z-index: 5;
  position: absolute;
  bottom: 3em;
`;

export const H1 = styled.h1`
  color: white;
  margin-bottom: 1rem;
  width: 100%;
  font-size: 2rem;
  font-weight: 500;
`;

export const H6 = styled.h6`
  color: white;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.7px;
  margin-bottom: 1em;
`;

export const Button = styled.button`
  background-color: #fff;
  color: var(--brown);
  max-width: fit-content;
  padding: 0 0.5em;
  border-radius: 5px;
  transition: all 0.3s;

  &:hover {
    color: #fff;
    background-color: var(--success);
  }
`;

export const StyledLink = styled(Link)`
  color: var(--brown);
  border-radius: 5px;
  padding: 0 2em;
  min-height: 44px;
  max-width: fit-content;
  display: flex;
  align-items: center;
  font-size: 0.8em;
  transition: all 0.3s;
  background-color: #fff;

  &:hover {
    background-color: var(--accept);
    color: #fff;
  }
`;
