import styled, { css } from 'styled-components';

export const FormContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition: all 1s;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const FormBox = styled.div`
  width: 30em;
  max-width: 50%;
  background-color: #fff;
  padding: 1.5em;
  border-radius: 1em;
  position: relative;
  margin: 0 auto;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);
  transition: all 0.5s;
  animation: zoomIn 0.5s;
`;

export const H3 = styled.h3`
  color: var(--brown);
  font-weight: 400;
  font-size: 1em;
`;

export const Button = styled.button`
  ${({ styledPurpose }) => {
    if (styledPurpose === 'close') {
      return css`
        position: absolute;
        top: 0.5em;
        right: 0.5em;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5em;

        &:hover > * {
          filter: brightness(80%);
        }

        > * {
          color: var(--brown);
          transition: all 0.3s;
        }
      `;
    }
    if (styledPurpose === 'submit') {
      return css`
        background-color: var(--success);
      `;
    }
    if (styledPurpose === 'clear') {
      return css`
        background-color: var(--danger);
      `;
    }
  }}

  ${({ styledVariant }) => {
    if (styledVariant === 'execution') {
      return css`
        margin-top: 1em;
        border-radius: 5px;
        margin-left: 1em;
        transition: all 0.3s;
        padding: 0 0.5em;
        color: white;

        &:hover {
          filter: brightness(80%);
        }
      `;
    }
  }}
`;

export const FormField = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

export const FlexField = styled.div`
  display: flex;
  justify-content: space-between;

  ${({ styledFieldPurpose }) => {
    if (styledFieldPurpose === 'fileBase') {
      return css`
        justify-content: flex-end;
        overflow: hidden;
        align-items: flex-end;

        > input {
          color: transparent;
          max-width: 70px;
          min-height: 44px;
          position: relative;

          &::before {
            content: 'Add File';
            min-height: 44px;
            color: #fff;
            display: inline-block;
            background: var(--accept);
            border-radius: 5px;
            padding: 0 0.5em;
            outline: none;
            white-space: nowrap;
            -webkit-user-select: none;
            cursor: pointer;
            position: absolute;
            bottom: 0;
            right: 0;
            display: flex;
            align-items: center;
            transition: all 0.3s;
          }

          &:hover::before {
            filter: brightness(80%);
          }

          &::-webkit-file-upload-button {
            visibility: hidden;
          }
        }
      `;
    }
  }}
`;

export const Input = styled.input`
  padding: 1em;
  width: 100%;
  border: 1px solid rgba(127, 127, 127, 0.5);
  color: var(--brown);
  border-radius: 0.4em;
  margin-top: 1em;

  &:first-child {
    margin-right: 1em;
  }

  &:focus {
    border: 1px solid var(--success);
    outline: none;
  }
`;

export const Textarea = styled.textarea`
  height: 5em;
  padding: 1em;
  width: 100%;
  margin-top: 1em;
  border: 1px solid rgba(127, 127, 127, 0.5);
  color: #3d282f;
  border-radius: 0.4em;

  &:focus {
    border: 1px solid var(--success);
    outline: none;
  }
`;

export const Span = styled.span`
  font-size: 0.8em;
  color: var(--brown);
  font-weight: 300;
  text-align: end;
  text-overflow: ellipsis;
  max-width: 10em;
  overflow: hidden;
  white-space: nowrap;
`;
