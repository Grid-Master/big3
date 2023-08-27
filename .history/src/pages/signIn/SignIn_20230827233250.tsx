import { FC, useEffect } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { ISignIn } from '../../modules/authorization/interfaces/IAuthorization';
import { useAppDispatch, useAppSelector } from '../../common/hooks/reduxHooks';
import { signIn } from '../../modules/authorization/authorizationThunk';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../common/components/button/Button';
import styles from './signIn.module.sass';
import backgroundImage from '../../assets/images/signinBackground.png';
import { setAlert } from '../../modules/alert/alertSlice';
import Input from '../../common/components/input/Input';
import { selectAuthorization } from '../../modules/authorization/authorizationSelector';

const SignIn: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const methods = useForm<ISignIn>({});
  const { error, isLoading } = useAppSelector(selectAuthorization);

  const submitHandler: SubmitHandler<ISignIn> = async (data) => {
    const { login, password } = data;
    const signResponse = await dispatch(signIn({ login, password }));
    if (signResponse.payload && !('status' in signResponse.payload)) {
      navigate('/teams');
    }
  };

  useEffect(() => {
    if (error === 401) {
      methods.setError('login', {
        type: 'manual',
        message: ``,
      });
      methods.setError('password', {
        type: 'manual',
        message: ``,
      });
      dispatch(setAlert({ showed: true, message: 'Inavalid login or password!', type: 'failure' }));
    } else if (error === 404) {
      dispatch(setAlert({ showed: true, message: 'Not found!', type: 'failure' }));
    } else if (!isLoading) {
      methods.reset();
    }
  }, [error]);

  return (
    <FormProvider {...methods}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={methods.handleSubmit(submitHandler)}>
          <h1 className={styles.title}>Sign In</h1>
          <Input name="login" type="text" label="Login" />
          <Input name="password" type="password" label="Password" />
          <Button
            typeButton="default"
            disable={false}
            onClick={methods.handleSubmit(submitHandler)}>
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
