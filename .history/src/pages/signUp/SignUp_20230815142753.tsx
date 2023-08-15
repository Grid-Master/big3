import { FC, useEffect } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../common/hooks/reduxHooks';
import { ISignUp } from '../../modules/authorization/interfaces/IAuthorization';
import { signUp } from '../../modules/authorization/authorizationThunk';
import { Link } from 'react-router-dom';
import Button from '../../common/components/button/Button';
import styles from './signUp.module.sass';
import backgroundImage from '../../assets/images/signupBackground.png';
import { setAlert } from '../../modules/alert/alertSlice';
import Input from '../../common/components/input/Input';
import Checkbox from '../../common/components/checkbox/Checkbox';
import { selectAuthorization } from '../../modules/authorization/authorizationSelector';

interface ISignUpConfirm extends ISignUp {
  confirmPassword: string;
  accept: boolean;
}

const SignUp: FC = () => {
  const dispatch = useAppDispatch();
  const methods = useForm<ISignUpConfirm>({});
  const { error, isLoading } = useAppSelector(selectAuthorization);

  const submitHandler: SubmitHandler<ISignUpConfirm> = async (data) => {
    const { userName, login, password, confirmPassword, accept } = data;
    if (!accept) {
      return;
    }
    if (accept && password === confirmPassword) {
      await dispatch(signUp({ userName, login, password }));
    } else {
      methods.setError('password', {
        type: 'manual',
        message: '',
      });
      methods.setError('confirmPassword', {
        type: 'manual',
        message: 'Passwords do not match',
      });
    }
  };

  useEffect(() => {
    if (error === 409) {
      methods.setError('login', {
        type: 'manual',
        message: `User with this login already exists.`,
      });
    } else if (error === 404) {
      dispatch(setAlert({ showed: true, message: 'Not found!', type: 'failure' }));
    } else if (!isLoading) {
      methods.reset();
    }
  }, [error]);

  return (
    <div className={styles.container}>
      <FormProvider {...methods}>
        <form className={styles.form} onSubmit={methods.handleSubmit(submitHandler)}>
          <h1 className={styles.title}>Sign Up</h1>
          <Input name="userName" type="text" label="Name" />
          <Input name="login" type="text" label="Login" />
          <Input name="password" type="password" label="Password" />
          <Input name="confirmPassword" type="password" label="Enter your password again" />
          <Checkbox name={'accept'} control={methods.control} label="I accept the agreement" />
          <Button typeButton="default" onClick={methods.handleSubmit(submitHandler)}>
            Sign Up
          </Button>
          <p className={styles.signin}>
            Already a member? <Link to={'/signIn'}>Sign in</Link>
          </p>
        </form>
        <div className={styles.imageContainer}>
          <img src={backgroundImage} alt="bg" />
        </div>
      </FormProvider>
    </div>
  );
};

export default SignUp;
