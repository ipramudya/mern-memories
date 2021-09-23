import { Grid, ListContainer } from './List.style';

const List = ({ children }) => {
  return (
    <ListContainer>
      <Grid>{children}</Grid>
    </ListContainer>
  );
};

export default List;
