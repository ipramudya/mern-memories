import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import GoogleLogin from 'react-google-login';
import { FaGoogle } from 'react-icons/fa';

import { googleAuth } from '../../../../redux/actions/auth';
import { BreakLine, Button, FlexField, Input, Text } from './AuthForm.style';

const SignIn = ({
  isShowPassword,
  handleSwitcher,
  handleChange,
  authFormState,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleGoogleSuccess = (res) => {
    const googleProfile = res?.profileObj;
    const googleTokenId = res?.tokenId;

    dispatch(googleAuth({ googleProfile, googleTokenId }));
    history.push('/');
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
        value={authFormState.email}
        placeholder="Email"
        required
      />
      <Input
        type={isShowPassword ? 'text' : 'password'}
        name="password"
        onChange={handleChange}
        value={authFormState.password}
        placeholder="Password"
        required
      />
      <FlexField>
        <Button type="submit" styledPurpose="execute">
          Sign In
        </Button>
        <Text>Dont have account ?</Text>
        <Button styledPurpose="navigate" onClick={handleSwitcher} type="button">
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
