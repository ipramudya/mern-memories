import { useState } from 'react';
import { Button, FlexField, Input, Text } from './AuthForm.style';

const Register = ({ isShowPassword, handleRegister }) => {
  const [state, setstate] = useState('');

  const handleChange = (event) => {};

  return (
    <>
      <Input
        type="text"
        name="firstname"
        onChange={handleChange}
        value={state}
        placeholder="First Name"
        required
      />
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
      <Input
        type={isShowPassword ? 'text' : 'password'}
        name="confirmPass"
        onChange={handleChange}
        value={state}
        placeholder="Confirm Password"
        required
      />
      <FlexField>
        <Button type="submit" styledPurpose="execute">
          Register
        </Button>
        <Text>Have an account ?</Text>
        <Button styledPurpose="navigate" onClick={handleRegister} type="button">
          Sign in now
        </Button>
      </FlexField>
    </>
  );
};

export default Register;
