import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const [oldUser, setOldUser] = useState();
  const user = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const history = useHistory();

  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    dispatch({ type: 'CLEAR_DATA' });
    setOldUser();
    history.push('/');
  };

  // for getting user after site refresh
  useEffect(() => {
    setOldUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  //rendering conditionally
  const renderItems = () => {
    if (user?.email) {
      return (
        <div className={styles.userDiv}>
          <p className={styles.userEmail}>{user.email}</p>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            {t('navLogout')}
          </button>
        </div>
      );
    } else if (!user?.email && oldUser?.email) {
      return (
        <div className={styles.userDiv}>
          <p className={styles.userEmail}>{oldUser?.email}</p>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            {t('navLogout')}
          </button>
        </div>
      );
    } else {
      return (
        <>
          <Link to="/login">{t('navLogin')}</Link>
          <Link to="/signup">{t('navSignup')}</Link>
        </>
      );
    }
  };

  return (
    <nav>
      <div className={styles.wrapper}>
        <select onChange={handleLanguageChange}>
          <option value="en">eng</option>
          <option value="ka">ქა</option>
        </select>
        <Link to="/">{t('covid')}</Link>
      </div>
      <div className={styles.wrapper}>
        <Link to="/countries">{t('navCountries')}</Link>
        <Link to="/stats">{t('navSummary')}</Link>
      </div>
      <div className={styles.wrapper}>{renderItems()}</div>
    </nav>
  );
};

export default NavBar;
