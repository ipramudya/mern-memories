import { SnackbarContainer, Text } from './Snackbar.style';

const Snackbar = ({ active, message, colorType }) => {
  return (
    <SnackbarContainer styledColor={colorType} active={active}>
      <Text styledColor={colorType}>{message}</Text>
    </SnackbarContainer>
  );
};

export default Snackbar;
