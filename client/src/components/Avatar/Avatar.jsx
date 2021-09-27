import ReactAvatar from 'react-avatar';

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

const Avatar = ({ profile, handleLogout }) => {
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
            color="#ED8D8D"
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

export default Avatar;
