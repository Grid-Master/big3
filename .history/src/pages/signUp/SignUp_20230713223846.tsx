import { FC } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { useAppDispatch } from '../../common/hooks/reduxHooks';
import { ISignUp } from '../../api/dto/IAuthorization';
import { signUp } from '../../modules/authorization/authorizationThunk';
import Input from '../../ui/input/Input';
import Button from '../../ui/button/Button';

const SignUp: FC = () => {
  const dispatch = useAppDispatch();

  const methods = useForm<ISignUp>({});

  const submitHandler: SubmitHandler<{confirmPassword : string} extends ISignUp> = (data) => {
    if(data.password === data.confirmPassword)

    // dispatch(signUp(data));
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
