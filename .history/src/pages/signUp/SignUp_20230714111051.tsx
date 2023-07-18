import { FC } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { useAppDispatch } from '../../common/hooks/reduxHooks';
import { ISignUp } from '../../api/dto/IAuthorization';
import { signUp } from '../../modules/authorization/authorizationThunk';
import Input from '../../ui/input/Input';
import Button from '../../ui/button/Button';

interface ISignUpConfirm extends ISignUp {
  confirmPassword: string;
}

const SignUp: FC = () => {
  const dispatch = useAppDispatch();

  const methods = useForm<ISignUpConfirm>({});

  const submitHandler: SubmitHandler<ISignUpConfirm> = (data) => {
    console.log(data.login);
    //@ts-ignore
    dispatch(signUp({ userName: data.name, password: data.password, login: data.login }));
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submitHandler)}>
        <h1>Sign Up</h1>
        <Input name="name" type="text" label="Name" />
        <Input name="login" type="text" label="Login" />
        <Input name="password" type="password" label="Password" />
        <Input name="confirmPassword" type="password" label="Enter your password again" />
        <Button onClick={methods.handleSubmit(submitHandler)}>Sign Up</Button>
      </form>
    </FormProvider>
  );
};

export default SignUp;
