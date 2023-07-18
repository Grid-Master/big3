import { FC } from 'react';
import Input from '../../ui/input/Input';

const SignIn: FC = () => {
  return (
    <div>
      <form>
        <h1>Sign In</h1>
        <Input label="Login" type="text" />
        <Input label="Password" type="password" />
      </form>
    </div>
  );
};

export default SignIn;
