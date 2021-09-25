import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { googleLogout } from '../../../../redux/actions/auth';
import {
  Content,
  H6,
  ImageBorder,
  Image,
  ImageWrapper,
  Text,
  Button,
} from './Avatar.style';

const LoggedIn = ({ profile, setProfile }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(googleLogout());
    history.push('/');
    setProfile({});
  };

  return (
    <>
      <ImageBorder />
      <ImageWrapper>
        <Image src={profile?.imageUrl} alt={profile?.name} />
      </ImageWrapper>
      <Content>
        <H6 styledVariant="profile">{profile?.name}</H6>
        <Text>{profile?.email}</Text>
        <Button onClick={handleLogout}>Sign Out</Button>
      </Content>
    </>
  );
};

export default LoggedIn;
