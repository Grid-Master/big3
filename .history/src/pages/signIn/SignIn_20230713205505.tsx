import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../../ui/input/Input';
import { ISignIn } from '../../api/dto/IAuthorization';
import { useAppDispatch } from '../../common/hooks/reduxHooks';
import { signIn } from '../../modules/authorization/authorizationThunk';

const SignIn: FC = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignIn>({});

  const submit: SubmitHandler<ISignIn> = (data) => {
    dispatch(signIn(data));
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <h1>Sign In</h1>
        <Input register={register} errors={errors} label="Login" type="text" />
        <Input register={register} errors={errors} label="Password" type="password" />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default SignIn;
