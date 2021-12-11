import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const [user, setUser] = useState(useSelector((state) => state.userData));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);

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
        {user?.email ? (
          <div className={styles.userDiv}>
            <p className={styles.userEmail}>{user.email}</p>
            <button className={styles.logoutBtn}>Logout</button>
          </div>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
