import {
  Content,
  H6,
  ImageBorder,
  Image,
  ImageWrapper,
  StyledLink,
  Text,
} from './Avatar.style';

const LoggedIn = ({ profile }) => {
  return (
    <>
      <ImageBorder />
      <ImageWrapper>
        <Image src={profile?.imageUrl} alt={profile?.name} />
      </ImageWrapper>
      <Content>
        <H6 styledVariant="profile">{profile?.name}</H6>
        <Text>{profile?.email}</Text>
        <StyledLink to="" styledVariant="signOut">
          Sign Out
        </StyledLink>
      </Content>
    </>
  );
};

export default LoggedIn;
