import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { signUp, logIn } from '../../actions/auth';
import { useHistory } from 'react-router-dom';

const Auth = ({ text }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

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
      history.push('/');
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
            placeholder="Email Address *"
          />
          <input
            ref={passwordRef}
            id="password"
            type={isPasswordShown ? 'text' : 'password'}
            placeholder="Password *"
          />
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
        {text === 'Sign in' && (
          <Link className={styles.link} to="/signup">
            Don't have an account? Sign up
          </Link>
        )}
      </div>
    </div>
  );
};

export default Auth;
