import styled from 'styled-components';

export const BannerContainer = styled.div`
  margin: 2em auto;
  width: 80%;
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
  font-weight: 500;
  transition: all 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;
