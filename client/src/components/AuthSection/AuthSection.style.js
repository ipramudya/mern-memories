import { Link } from 'react-router-dom';
import styled from 'styled-components';

import FormImage from '../../assets/formImage.jpg';

export const AuthSectionContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 3fr;
  position: relative;
`;

export const ImageSection = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  background-image: url(${FormImage});
  background-position: center;

  &::after {
    position: absolute;
    inset: 0px;
    content: '';
    display: block;
    background-image: linear-gradient(
      180deg,
      rgb(45, 36, 36) 0px,
      rgba(0, 0, 0, 0.1) 30%,
      rgba(0, 0, 0, 0.1)
    );
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 2em;
  left: 3em;
  max-width: 40%;
  z-index: 2;
`;

export const NavigateButton = styled(Link)`
  color: var(--brown);
  background-color: #fff;
  padding: 0 0.5em;
  border-radius: 5px;
  min-height: 44px;
  max-width: fit-content;
  display: flex;
  align-items: center;
  font-size: 0.8em;
  transition: all 0.3s;

  &:hover {
    filter: brightness(80%);
  }
`;

export const H3 = styled.h3`
  color: #fff;
  margin-bottom: 1em;
  font-size: 2em;
`;

export const Text = styled.p`
  color: #fff;
  letter-spacing: 0.7px;
  line-height: 1.5;
  margin-bottom: 0.5em;
`;
