import { FC } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../ui/input/Input';
import { ISignIn } from '../../api/dto/IAuthorization';

const SignIn: FC = () => {
  const { register, handleSubmit } = useForm<ISignIn>({});
  return (
    <div>
      <form>
        <h1>Sign In</h1>
        <Input {...re} label="Login" type="text" />
        <Input label="Password" type="password" />
      </form>
    </div>
  );
};

export default SignIn;
