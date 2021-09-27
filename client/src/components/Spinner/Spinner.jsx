import styled, { css } from 'styled-components';
import { PropagateLoader } from 'react-spinners';

const Spinner = ({ loading }) => {
  const spinnerStyle = css`
    position: fixed;
    margin: auto;
    top: 50%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999;
  `;

  const OverlayBackground = styled.div`
    position: fixed;
    min-width: 100%;
    min-height: 100vh;
    top: 0;
    z-index: 990;
    background-color: rgba(2, 1, 1, 0.5);
  `;
  return (
    <>
      <PropagateLoader color="#FFF" loading={loading} css={spinnerStyle} />
      <OverlayBackground />
    </>
  );
};

export default Spinner;
