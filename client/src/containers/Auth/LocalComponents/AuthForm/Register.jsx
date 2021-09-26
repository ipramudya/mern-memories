import { FiEye, FiEyeOff } from 'react-icons/fi';
import {
  Button,
  FlexField,
  Input,
  RelativeField,
  Text,
} from './AuthForm.style';

const Register = ({
  isShowPassword,
  handleSwitcher,
  handleChange,
  setShowPass,
  authFormState,
}) => {
  const handleShowPassword = () => {
    setShowPass((prevState) => !prevState);
  };

  return (
    <>
      <FlexField styledPurpose="name">
        <Input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={authFormState.firstName}
          placeholder="First Name"
          required
        />
        <Input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={authFormState.lastName}
          placeholder="Last Name"
          required
        />
      </FlexField>
      <Input
        type="text"
        name="email"
        onChange={handleChange}
        value={authFormState.email}
        placeholder="Email"
        required
      />
      <RelativeField>
        <Input
          type={isShowPassword ? 'text' : 'password'}
          name="password"
          onChange={handleChange}
          value={authFormState.password}
          placeholder="Password"
          required
        />
        <Button
          styledPurpose="small"
          onClick={handleShowPassword}
          type="button"
        >
          {isShowPassword ? <FiEye /> : <FiEyeOff />}
        </Button>
      </RelativeField>
      <Input
        type={isShowPassword ? 'text' : 'password'}
        name="confirmPassword"
        onChange={handleChange}
        value={authFormState.confirmPassword}
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
