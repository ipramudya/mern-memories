import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import ReactAvatar from 'react-avatar';

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

const reactAvatarStyle = {
  position: 'absolute',
  top: 0,
  border: '3px solid #fff',
};

const LoggedIn = ({ profile, setProfile }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(googleLogout());
    history.push('/');
    setProfile(null);
  };

  return (
    <>
      <ImageBorder />
      <ImageWrapper>
        {profile?.imageUrl ? (
          <Image src={profile?.imageUrl} alt={profile?.name} />
        ) : (
          <ReactAvatar
            name={profile?.name}
            title={profile?.name}
            size="100%"
            round={true}
            style={reactAvatarStyle}
            textMarginRatio={0.1}
          />
        )}
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
