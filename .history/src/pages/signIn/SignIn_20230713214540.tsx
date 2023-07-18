import { FC } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import Input from '../../ui/input/Input';
import { ISignIn } from '../../api/dto/IAuthorization';
import { useAppDispatch } from '../../common/hooks/reduxHooks';
import { signIn } from '../../modules/authorization/authorizationThunk';
import Button from '../../ui/button/Button';

const SignIn: FC = () => {
  const dispatch = useAppDispatch();

  const methods = useForm<ISignIn>({});

  const submitHandler: SubmitHandler<ISignIn> = (data) => {
    dispatch(signIn(data));
    methods.reset();
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form>
          <h1>Sign In</h1>
          <Input name="Login" type="text" />
          <Input name="Password" type="password" />
          <button type="submit">Отправить</button>
          <Button onClick={() => methods.handleSubmit(submitHandler)}>Sign In</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default SignIn;
