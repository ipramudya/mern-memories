import { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { FaGoogle } from 'react-icons/fa';

import { BreakLine, Button, FlexField, Input, Text } from './AuthForm.style';

const SignIn = ({ isShowPassword, handleRegister }) => {
  const [state, setstate] = useState('');

  const handleChange = (event) => {};

  const handleGoogleSuccess = async (res) => {
    const googleProfile = res?.profileObj;
    const googleTokenId = res?.tokenId;
  };

  const handleGoogleFailure = async (err) => {
    console.log(err);
  };

  return (
    <>
      <Input
        type="text"
        name="email"
        onChange={handleChange}
        value={state}
        placeholder="Email"
        required
      />
      <Input
        type={isShowPassword ? 'text' : 'password'}
        name="password"
        onChange={handleChange}
        value={state}
        placeholder="Password"
        required
      />
      <FlexField>
        <Button type="submit" styledPurpose="execute">
          Sign In
        </Button>
        <Text>Dont have account ?</Text>
        <Button styledPurpose="navigate" onClick={handleRegister} type="button">
          Register
        </Button>
      </FlexField>
      <BreakLine>
        <span>or</span>
      </BreakLine>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        onSuccess={handleGoogleSuccess}
        onFailure={handleGoogleFailure}
        cookiePolicy="single_host_origin"
        render={(renderProps) => (
          <Button
            type="button"
            styledPurpose="google"
            disabled={renderProps.disabled}
            onClick={renderProps.onClick}
          >
            <FaGoogle />
            Sign in with Google
          </Button>
        )}
      />
    </>
  );
};

export default SignIn;
