import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { signUp, logIn } from '../../actions/auth';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Auth = ({ text }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const errors = useSelector((state) => state.auth.errors);

  const history = useHistory();
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  const { t } = useTranslation();

  useEffect(() => {
    dispatch({ type: 'CLEAR_ERRORS' });
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === 'Sign up') {
      dispatch(
        signUp(
          {
            email: emailRef.current.value,
            password: passwordRef.current.value,
          },
          history
        )
      );
    } else if (text === 'Sign in') {
      dispatch(
        logIn(
          {
            email: emailRef.current.value,
            password: passwordRef.current.value,
          },
          history
        )
      );
    }
  };

  const handleShowPassword = () => {
    setIsPasswordShown((prevState) => !prevState);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>{text}</h2>
        <form onSubmit={handleSubmit}>
          <input
            ref={emailRef}
            id="email"
            type="email"
            placeholder={`${t('email')} *`}
          />
          {errors?.message?.startsWith('Email') && (
            <span className={styles.email_span}>{errors.message}</span>
          )}
          {errors?.email && (
            <span className={styles.email_span}>{errors.email}</span>
          )}
          {errors?.message?.endsWith('email') && (
            <span className={styles.email_span}>{errors.message}</span>
          )}
          <input
            ref={passwordRef}
            id="password"
            type={isPasswordShown ? 'text' : 'password'}
            placeholder={`${t('password')} *`}
          />
          {errors?.message?.startsWith('Password') && (
            <span className={styles.pass_span}>{errors.message}</span>
          )}
          {errors?.password && (
            <span className={styles.pass_span}>{errors.password}</span>
          )}
          {errors?.message?.endsWith('password') && (
            <span className={styles.pass_span}>{errors.message}</span>
          )}
          {isPasswordShown ? (
            <AiFillEye onClick={handleShowPassword} className={styles.icon} />
          ) : (
            <AiFillEyeInvisible
              onClick={handleShowPassword}
              className={styles.icon}
            />
          )}
          <button>{text}</button>
        </form>
        {text === t('login') && (
          <Link className={styles.link} to="/signup">
            {t('loginText')}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Auth;
