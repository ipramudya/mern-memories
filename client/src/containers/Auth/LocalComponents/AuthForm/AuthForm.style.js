import styled, { css } from 'styled-components';

export const AuthFormContainer = styled.div`
  overflow: hidden;
  position: relative;
`;

export const FormBox = styled.div`
  position: absolute;
  top: 2em;
  left: 1em;
  right: 1em;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 1em;
  padding: 1.5em;
`;

export const FormField = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;

export const FlexField = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2em;

  ${({ styledPurpose }) => {
    if (styledPurpose === 'name') {
      return css`
        margin: unset;

        > input[name='lastName'] {
          margin-left: 0.5em;
        }
      `;
    }
  }}
`;

export const RelativeField = styled.div`
  position: relative;
  margin-top: 1em;

  > input {
    margin: unset;
  }
`;

export const Button = styled.button`
  transition: all 0.3s;

  &:hover {
    filter: brightness(80%);
  }

  ${({ styledPurpose }) => {
    if (styledPurpose === 'execute') {
      return css`
        background-color: var(--accept);
        color: #fff;
        border-radius: 5px;
        padding: 0 1em;
        margin-right: 1em;
      `;
    }
    if (styledPurpose === 'navigate') {
      return css`
        color: var(--success);
        margin-left: 0.5em;
        font-size: 0.8em;
      `;
    }
    if (styledPurpose === 'google') {
      return css`
        background-color: var(--success);
        border-radius: 5px;
        color: #fff;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        > svg {
          margin-right: 1em;
          font-size: 1.5em;
        }
      `;
    }
    if (styledPurpose === 'small') {
      return css`
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      `;
    }
  }}
`;

export const H4 = styled.h4`
  font-weight: 400;
  text-align: center;
`;

export const Text = styled.p`
  font-weight: 200;
  font-size: 0.8em;
`;

export const Input = styled.input`
  padding: 1em;
  width: 100%;
  border: 1px solid rgba(127, 127, 127, 0.5);
  color: var(--brown);
  border-radius: 0.4em;
  margin-top: 1em;
  animation: fadeIn 1s;
`;

export const BreakLine = styled.div`
  width: 100%;
  margin: 1em 0;
  padding: 1em 0;
  position: relative;
  text-align: center;

  > span {
    background-color: white;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 0.5em;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: fit-content;
    color: rgb(93, 108, 116);
    font-size: 0.8em;
    font-weight: 200;
  }

  &::before {
    border-top: 1px solid rgba(127, 127, 127, 0.5);
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 0;
    content: '';
    width: 100%;
  }
`;
