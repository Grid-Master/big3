import { FC } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../ui/input/Input';
import { ISignIn } from '../../api/dto/IAuthorization';

const SignIn: FC = () => {
  const { register, handleSubmit } = useForm<ISignIn>({});

  const submit: SubmitHandler<ISignIn> = (data) => {};
  return (
    <div>
      <form>
        <h1>Sign In</h1>
        <Input {...register('login')} label="Login" type="text" />
        <Input {...register('password')} label="Password" type="password" />
      </form>
    </div>
  );
};

export default SignIn;
