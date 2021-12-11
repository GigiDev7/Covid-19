import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';

const Auth = ({ text }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const handleShowPassword = () => {
    setIsPasswordShown((prevState) => !prevState);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>{text}</h2>
        <form>
          <input id="email" type="email" placeholder="Email Address *" />
          <input
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
