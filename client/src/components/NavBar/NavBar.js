import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../actions/auth';
import { useHistory } from 'react-router-dom';

const NavBar = () => {
  const [oldUser, setOldUser] = useState();
  const user = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logOut(history));
  };

  // for getting user after site refresh
  useEffect(() => {
    setOldUser(JSON.parse(localStorage.getItem('user')));
  }, [oldUser]);

  //rendering conditionally
  const renderItems = () => {
    if (user?.email) {
      return (
        <div className={styles.userDiv}>
          <p className={styles.userEmail}>{user.email}</p>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            Logout
          </button>
        </div>
      );
    } else if (!user?.email && oldUser?.email) {
      return (
        <div className={styles.userDiv}>
          <p className={styles.userEmail}>{oldUser?.email}</p>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign up</Link>
        </>
      );
    }
  };

  return (
    <nav>
      <div className={styles.wrapper}>
        <Link to="/">Covid 19</Link>
      </div>
      <div className={styles.wrapper}>
        <Link to="/countries">Countries Data</Link>
        <Link to="/stats">Summary</Link>
      </div>
      <div className={styles.wrapper}>{renderItems()}</div>
    </nav>
  );
};

export default NavBar;
