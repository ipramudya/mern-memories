import { Button, FlexField, Input, Text } from './AuthForm.style';

const Register = ({ isShowPassword, handleSwitcher, handleChange, state }) => {
  return (
    <>
      <FlexField styledPurpose="name">
        <Input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={state.firstName}
          placeholder="First Name"
          required
        />
        <Input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={state.lastName}
          placeholder="Last Name"
          required
        />
      </FlexField>
      <Input
        type="text"
        name="email"
        onChange={handleChange}
        value={state.email}
        placeholder="Email"
        required
      />
      <Input
        type={isShowPassword ? 'text' : 'password'}
        name="password"
        onChange={handleChange}
        value={state.password}
        placeholder="Password"
        required
      />
      <Input
        type={isShowPassword ? 'text' : 'password'}
        name="confirmPassword"
        onChange={handleChange}
        value={state.confirmPassword}
        placeholder="Confirm Password"
        required
      />
      <FlexField>
        <Button type="submit" styledPurpose="execute">
          Register
        </Button>
        <Text>Have an account ?</Text>
        <Button styledPurpose="navigate" onClick={handleSwitcher} type="button">
          Sign in now
        </Button>
      </FlexField>
    </>
  );
};

export default Register;
