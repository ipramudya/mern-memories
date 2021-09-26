import { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import { register, signIn } from '../../redux/actions/auth';
import { AuthSection } from '../../components';

import {
  AuthFormContainer,
  FormBox,
  FormField,
  H4,
} from './LocalComponents/AuthForm/AuthForm.style';

import SignIn from './LocalComponents/AuthForm/SignIn';
import Register from './LocalComponents/AuthForm/Register';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Auth = () => {
  const [authForm, setAuthForm] = useState(initialState);
  const [isRegistered, setIsRegistered] = useState(true);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSwitcher = () => {
    setIsRegistered((prevState) => !prevState);
    setAuthForm(initialState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isRegistered) {
      // sign in
      dispatch(signIn(authForm, history));
    } else {
      // register
      dispatch(register(authForm, history));
    }
  };

  const handleChange = (event) => {
    setAuthForm({ ...authForm, [event.target.name]: event.target.value });
  };

  return (
    <AuthSection>
      <AuthFormContainer>
        <FormBox onSubmit={handleSubmit}>
          <H4>{isRegistered ? 'Sign In' : 'Register'}</H4>
          <FormField>
            {isRegistered ? (
              <SignIn
                isShowPassword={isShowPassword}
                handleSwitcher={handleSwitcher}
                handleChange={handleChange}
                authFormState={authForm}
              />
            ) : (
              <Register
                isShowPassword={isShowPassword}
                setShowPass={setIsShowPassword}
                handleSwitcher={handleSwitcher}
                handleChange={handleChange}
                authFormState={authForm}
              />
            )}
          </FormField>
        </FormBox>
      </AuthFormContainer>
    </AuthSection>
  );
};

export default Auth;
