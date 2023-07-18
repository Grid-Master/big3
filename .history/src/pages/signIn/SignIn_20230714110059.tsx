import { FC } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import Input from '../../ui/input/Input';
import { ISignIn } from '../../api/dto/IAuthorization';
import { useAppDispatch } from '../../common/hooks/reduxHooks';
import { signIn } from '../../modules/authorization/authorizationThunk';
import Button from '../../ui/button/Button';
import styles from './signIn.module.sass';
import backgroundImage from '../../assets/images/signinBackground.png';

const SignIn: FC = () => {
  const dispatch = useAppDispatch();

  const methods = useForm<ISignIn>({});

  const submitHandler: SubmitHandler<ISignIn> = (data) => {
    dispatch(signIn(data));
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={methods.handleSubmit(submitHandler)}>
          <h1 className={styles.title}>Sign In</h1>
          <Input name="login" type="text" />
          <Input name="password" type="password" />
          <Button onClick={methods.handleSubmit(submitHandler)}>Sign In</Button>
          <p className={styles.signin}>
            Not a member yet? <span>Sign up</span>
          </p>
        </form>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={backgroundImage} alt="bg" />
        </div>
      </div>
    </FormProvider>
  );
};

export default SignIn;
