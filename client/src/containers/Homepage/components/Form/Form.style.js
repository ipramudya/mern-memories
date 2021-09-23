import styled, { css } from 'styled-components';

export const FormContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  transform: translateY(-250%);
  opacity: 0;
  transition: all 1s;
  z-index: 10;

  ${({ active }) =>
    active &&
    css`
      transform: translateY(0%);
      opacity: 1;
    `}
`;

export const FormBox = styled.div`
  width: 30em;
  max-width: 50%;
  background-color: #fff;
  padding: 1.5em;
  border-radius: 1em;
  position: relative;
  margin: 0 auto;
`;

export const H3 = styled.h3`
  color: var(--brown);
  font-weight: 400;
  font-size: 1em;
`;

export const Button = styled.button`
  ${({ arrow }) =>
    arrow &&
    css`
      position: absolute;
      top: 0em;
      right: 1em;

      &:hover > * {
        opacity: 0.8;
      }

      > * {
        color: var(--brown);
        width: 100%;
        height: 100%;
        transition: all 0.3s;
      }
    `}

  ${({ execution }) =>
    execution &&
    css`
      margin-top: 1em;
      border-radius: 5px;
      margin-left: 1em;
      transition: all 0.3s;

      &:hover {
        opacity: 0.8;
      }

      > * {
        color: #fff;
        width: 50%;
        height: 50%;
      }
    `}

    ${({ file }) =>
    file &&
    css`
      background-color: var(--accept);
      padding: 0 0.5em;
      color: #fff;
    `}

    ${({ submit }) =>
    submit &&
    css`
      background-color: var(--success);
    `}

    ${({ cancel }) =>
    cancel &&
    css`
      background-color: var(--danger);
    `}
`;

export const FormField = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FlexField = styled.div`
  display: flex;
  justify-content: space-between;

  ${({ buttons }) =>
    buttons &&
    css`
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
          opacity: 0.8;
        }

        &::-webkit-file-upload-button {
          visibility: hidden;
        }
      }
    `}
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
