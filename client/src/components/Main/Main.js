import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Main = () => {
  const user = useSelector((state) => state.auth.userData);

  return (
    <div className={styles.container}>
      <motion.h1
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        animate={{ y: [-200, 0], opacity: 1 }}
      >
        See Latest Covid 19 Statistics.
        <span>Get stats for each country and for whole world.</span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        animate={{ y: [100, 0], opacity: 1 }}
        className={styles.link_wrapper}
      >
        <Link className={styles.link} to={user ? '#' : '/login'}>
          Get Started by Logging in
        </Link>
        <Link className={styles.link} to={user ? '/countries' : '#'}>
          Already Logged in? See Stats
        </Link>
      </motion.div>
    </div>
  );
};

export default Main;
