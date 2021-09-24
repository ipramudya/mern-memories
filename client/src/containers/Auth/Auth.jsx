import { useState } from 'react';

import { AuthSection } from '../../components';

import {
  AuthFormContainer,
  FormBox,
  FormField,
  H4,
  Button,
} from './LocalComponents/AuthForm/AuthForm.style';

import SignIn from './LocalComponents/AuthForm/SignIn';
import Register from './LocalComponents/AuthForm/Register';

const Auth = () => {
  const [isRegistered, setisRegistered] = useState(true);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleRegister = () => {
    setisRegistered((prevState) => !prevState);
  };

  const NavigateButton = ({ content }) => (
    <Button styledPurpose="navigate" onClick={handleRegister} type="button">
      {content}
    </Button>
  );

  return (
    <AuthSection>
      <AuthFormContainer>
        <FormBox>
          <H4>{isRegistered ? 'Sign In' : 'Register'}</H4>
          <FormField>
            {isRegistered ? (
              <SignIn
                isShowPassword={isShowPassword}
                handleRegister={handleRegister}
              />
            ) : (
              <Register
                isShowPassword={isShowPassword}
                handleRegister={handleRegister}
              />
            )}
          </FormField>
        </FormBox>
      </AuthFormContainer>
    </AuthSection>
  );
};

export default Auth;
