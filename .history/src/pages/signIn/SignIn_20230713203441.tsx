import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../../ui/input/Input';
import { ISignIn } from '../../api/dto/IAuthorization';

const SignIn: FC = () => {
  const {register  } = useForm<ISignIn>({});

  const submit: SubmitHandler<ISignIn> = (data) => {
    console.log(data);
  };
  return (
    <div>
        <form onSubmit={.handleSubmit(submit)}>
          <h1>Sign In</h1>
          <Input register={register} label="Login" type="text" />
          <Input register={register} label="Password" type="password" />
          <button type="submit">Отправить</button>
        </form>
    </div>
  );
};

export default SignIn;
