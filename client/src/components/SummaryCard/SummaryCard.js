import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const SummaryCard = () => {
  const summary = useSelector((state) => state.summary);

  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>{t('summaryDeaths')}</h2>
        <p>
          {summary?.summary?.deaths && formatNumber(summary.summary.deaths)}
        </p>
      </div>
      <div className={styles.card}>
        <h2>{t('summaryRecovered')}</h2>
        <p>
          {summary?.summary?.deaths && formatNumber(summary.summary.recovered)}
        </p>
      </div>
      <div className={styles.card}>
        <h2>{t('summaryConfirmed')}</h2>
        <p>
          {summary?.summary?.deaths && formatNumber(summary.summary.confirmed)}
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;
