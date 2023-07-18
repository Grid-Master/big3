import { FC } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import Input from '../../ui/input/Input';
import { ISignIn } from '../../api/dto/IAuthorization';
import { useAppDispatch } from '../../common/hooks/reduxHooks';
import { signIn } from '../../modules/authorization/authorizationThunk';

const SignIn: FC = () => {
  const dispatch = useAppDispatch();
  const methods = useForm();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISignIn>({});

  const submit: SubmitHandler<ISignIn> = (data) => {
    dispatch(signIn(data));
    reset();
    console.log(errors);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(submit)}>
          <h1>Sign In</h1>
          <Input name="Login" type="text" />
          <Input name="Password" type="password" />
          <button type="submit">Отправить</button>
        </form>
      </FormProvider>
    </div>
  );
};

export default SignIn;
