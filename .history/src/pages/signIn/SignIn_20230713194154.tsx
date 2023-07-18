import { FC } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import Input from '../../ui/input/Input';
import { ISignIn } from '../../api/dto/IAuthorization';

const SignIn: FC = () => {
  const methods = useForm<ISignIn>({});

  const submit: SubmitHandler<ISignIn> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submit)}>
          <h1>Sign In</h1>
          <Input value="" label="Login" type="text" />
          <Input value="" label="Password" type="password" />
          <button type="submit">Отправить</button>
        </form>
      </FormProvider>
    </div>
  );
};

export default SignIn;
