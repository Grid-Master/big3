import { FC, useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import Input from '../../ui/input/Input';
import { ISignIn } from '../../api/dto/IAuthorization';
import { useAppDispatch, useAppSelector } from '../../common/hooks/reduxHooks';
import { signIn } from '../../modules/authorization/authorizationThunk';
import { Link } from 'react-router-dom';
import Button from '../../ui/button/Button';
import styles from './signIn.module.sass';
import backgroundImage from '../../assets/images/signinBackground.png';
import Alert from '../../common/components/alert/Alert';
import { selectAlertIsShow, selectAlertMessage } from '../../modules/alert/alertSelector';
import { setAlert } from '../../modules/alert/alertSlice';

const SignIn: FC = () => {
  const dispatch = useAppDispatch();
  const methods = useForm<ISignIn>({});

  const submitHandler: SubmitHandler<ISignIn> = async (data) => {
    const { login, password } = data;
    const response = await dispatch(signIn({ login, password }));
    //@ts-ignore
    if (response.payload.status === 401) {
      methods.setError('login', {
        type: 'manual',
        message: ``,
      });
      methods.setError('password', {
        type: 'manual',
        message: ``,
      });
      dispatch(setAlert({ showed: true, message: 'Inavalid login or password!' }));
    } //@ts-ignore
    else if (response.payload.status === 404) {
      // setMessage('Not found!');
      // setShowAlert(true);
    } else {
      methods.reset();
    }
  };

  return (
    <FormProvider {...methods}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={methods.handleSubmit(submitHandler)}>
          <h1 className={styles.title}>Sign In</h1>
          <Input name="login" type="text" label="Login" />
          <Input name="password" type="password" label="Password" />
          <Button disable={false} onClick={methods.handleSubmit(submitHandler)}>
            Sign In
          </Button>
          <p className={styles.signin}>
            Not a member yet? <Link to={'/signUp'}>Sign up</Link>
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
