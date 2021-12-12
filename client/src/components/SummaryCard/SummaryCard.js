import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';

const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const SummaryCard = () => {
  const summary = useSelector((state) => state.summary);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Deaths</h2>
        <p>
          {summary?.summary?.deaths && formatNumber(summary.summary.deaths)}
        </p>
      </div>
      <div className={styles.card}>
        <h2>Recovered</h2>
        <p>
          {summary?.summary?.deaths && formatNumber(summary.summary.recovered)}
        </p>
      </div>
      <div className={styles.card}>
        <h2>Confirmed</h2>
        <p>
          {summary?.summary?.deaths && formatNumber(summary.summary.confirmed)}
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;
