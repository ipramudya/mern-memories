import styled from 'styled-components';

export const ListContainer = styled.div`
  margin: 2em auto;
  width: 80%;
`;
export const Grid = styled.div`
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;
