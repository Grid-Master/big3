import { FC, useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../common/hooks/reduxHooks';
import { ISignUp } from '../../api/dto/IAuthorization';
import { signUp } from '../../modules/authorization/authorizationThunk';
import { Link } from 'react-router-dom';
import Input from '../../ui/input/Input';
import Button from '../../ui/button/Button';
import styles from './signUp.module.sass';
import backgroundImage from '../../assets/images/signupBackground.png';
import { unwrapResult } from '@reduxjs/toolkit';

interface ISignUpConfirm extends ISignUp {
  confirmPassword: string;
  accept: boolean;
}

const SignUp: FC = () => {
  const dispatch = useAppDispatch();
  const methods = useForm<ISignUpConfirm>({});
  const isDisable = methods.watch('accept');
  const { error } = useAppSelector((data) => data.AuthorizationReducer);

  const submitHandler: SubmitHandler<ISignUpConfirm> = async (data) => {
    const { userName, login, password, confirmPassword, accept } = data;
    if (accept && password === confirmPassword) {
      try {
        await dispatch(signUp({ userName, login, password }));
        methods.reset();
      } catch (error) {
        switch (error) {
          case 409: {
            alert('User with this login already exists');
          }
        }
      }
    }
  };

  return (
    <div className={styles.container}>
      <FormProvider {...methods}>
        <form className={styles.form} onSubmit={methods.handleSubmit(submitHandler)}>
          <h1 className={styles.title}>Sign Up</h1>
          <Input name="userName" type="text" label="Name" />
          <Input name="login" type="text" label="Login" />
          <Input name="password" type="password" label="Password" />
          <Input name="confirmPassword" type="password" label="Enter your password again" />
          <label className={styles.accept}>
            <input type="checkbox" {...methods.register('accept', { required: true })} />I accept
            the agreement
          </label>
          <Button disable={!isDisable} onClick={methods.handleSubmit(submitHandler)}>
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
