import {
  AuthSectionContainer,
  NavigateButton,
  Content,
  H3,
  Text,
  ImageSection,
} from './AuthSection.style';

const AuthForm = ({ children }) => {
  return (
    <AuthSectionContainer>
      {children}
      <ImageSection>
        <Content>
          <H3>Welcome to Memories App</H3>
          <Text>
            If you want to write your own memories or stories, please make sure
            to SignIn first
          </Text>
          <NavigateButton to="/">See People's Memories</NavigateButton>
        </Content>
      </ImageSection>
    </AuthSectionContainer>
  );
};

export default AuthForm;
