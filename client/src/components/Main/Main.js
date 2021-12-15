import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const Main = () => {
  const [isUser, setIsUser] = useState();
  const user = useSelector((state) => state.auth.userData);

  useEffect(() => {
    if (user) {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  }, [user]);

  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <motion.h1
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        animate={{ y: [-200, 0], opacity: 1 }}
      >
        {t('mainText')}
        <span>{t('mainSpan')}</span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        animate={{ y: [100, 0], opacity: 1 }}
        className={styles.link_wrapper}
      >
        <Link className={styles.link} to={isUser ? '#' : '/login'}>
          {t('mainBtn1')}
        </Link>
        <Link className={styles.link} to={isUser ? '/countries' : '#'}>
          {t('mainBtn2')}
        </Link>
      </motion.div>
    </div>
  );
};

export default Main;
