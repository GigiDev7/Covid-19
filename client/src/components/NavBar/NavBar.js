import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const NavBar = () => {
  return (
    <nav>
      <div className={styles.wrapper}>
        <Link to="/">Covid 19</Link>
      </div>
      <div className={styles.wrapper}>
        <Link to="/countries">Countries Data</Link>
        <Link to="/stats">Summary</Link>
      </div>
      <div className={styles.wrapper}>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    </nav>
  );
};

export default NavBar;
