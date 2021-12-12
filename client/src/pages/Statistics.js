import React, { useEffect, useState } from 'react';
import SummaryCard from '../components/SummaryCard/SummaryCard';
import { useHistory } from 'react-router-dom';
import { getSummaryStats } from '../actions/summary';
import { useDispatch } from 'react-redux';

const Statistics = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      history.replace('/login');
    } else {
      dispatch(getSummaryStats(user.token));
    }
  }, [history, dispatch]);

  return <SummaryCard />;
};

export default Statistics;
