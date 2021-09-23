import { Grid, ListContainer } from './List.style';

const List = ({ children }) => {
  console.log('List');
  return (
    <ListContainer>
      <Grid>{children}</Grid>
    </ListContainer>
  );
};

export default List;
