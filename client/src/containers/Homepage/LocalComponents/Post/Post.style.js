import styled, { css } from 'styled-components';
import { FaHeart } from 'react-icons/fa';

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 0;
  padding-top: 80%;
  overflow: hidden;
  background-color: var(--brown);

  &::after {
    position: absolute;
    inset: 0px;
    content: '';
    display: block;
    z-index: 3;
    background-image: linear-gradient(
      180deg,
      rgb(45, 36, 36) 0px,
      rgba(0, 0, 0, 0.1) 30%,
      rgba(0, 0, 0, 0.1)
    );
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;

  > svg {
    font-size: 1.3em;
  }

  &:hover > * {
    color: ${({ styledDisabled }) =>
      styledDisabled ? 'gray' : 'var(--danger)'};
  }

  ${({ styledPlace }) => {
    if (styledPlace === 'upper')
      return css`
        position: relative;

        &::after {
          position: absolute;
          bottom: -0.5em;
          left: 0;
          right: 0;
          color: #fff;
          opacity: 0;
          transition: all 0.3s;
        }

        > svg {
          color: #fff;
        }
      `;
  }}

  ${({ styledPurpose }) => {
    if (styledPurpose === 'edit') {
      return css`
        &:hover {
          &::after {
            opacity: 1;
          }
          > svg {
            color: var(--success);
          }
        }
        &::after {
          content: 'edit';
          color: var(--success);
        }
      `;
    }
    if (styledPurpose === 'delete') {
      return css`
        &:hover {
          &::after {
            opacity: 1;
          }
          > svg {
            color: var(--danger);
          }
        }
        &::after {
          content: 'remove';
          color: var(--danger);
        }
      `;
    }
  }}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5em;
`;

export const H4 = styled.h4`
  color: var(--brown);
  margin-bottom: 0.5em;
  font-size: 1.2em;
`;

export const Text = styled.p`
  margin: 0.5em 0;
  color: var(--brown);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 1.5;
  font-weight: 200;
  font-size: 0.9em;

  ${({ styledVariant }) => {
    if (styledVariant === 'tags') {
      return css`
        font-style: italic;
      `;
    }
    if (styledVariant === 'info') {
      return css`
        margin-left: 0.5em;
      `;
    }
  }};
`;

export const Span = styled.span`
  margin-right: 0.3em;
  font-weight: 500;
  color: var(--brown);

  ${({ button }) =>
    button &&
    css`
      font-weight: 200;
      margin-left: 0.3em;
      font-size: 0.9em;
    `}
`;

export const FlexField = styled.div`
  display: flex;

  ${({ styledFieldPossition }) => {
    if (styledFieldPossition === 'top') {
      return css`
        position: absolute;
        top: 0;
        right: 0.5em;
        z-index: 4;
      `;
    }
    if (styledFieldPossition === 'middle') {
      return css`
        flex-direction: column;
        min-height: 10em;
      `;
    }
    if (styledFieldPossition === 'bottom') {
      return css`
        align-items: center;
        justify-content: space-between;
        padding: 0 0.5em;
      `;
    }
  }}
`;

export const StyledHeart = styled(FaHeart)`
  color: var(--brown);
  transition: all 0.3s;

  ${({ styledFull }) => {
    if (styledFull === 'full') {
      return css`
        color: var(--danger);
      `;
    }
  }}
`;
