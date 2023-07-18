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
    console.log(data.password == data.confirmPassword);
    if (data.password === data.confirmPassword) {
      dispatch(signUp({ userName: data.userName, login: data.login, password: data.password }));
    }
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submitHandler)}>
        <h1>Sign Up</h1>
        <Input name="name" type="text" />
        <Input name="login" type="text" />
        <Input name="password" type="password" />
        <Input name="confirmPassword" type="password" />
        <Button onClick={methods.handleSubmit(submitHandler)}>Sign Up</Button>
      </form>
    </FormProvider>
  );
};

export default SignUp;
