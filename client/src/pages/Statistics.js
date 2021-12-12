import React, { useEffect, useState } from 'react';
import SummaryCard from '../components/SummaryCard/SummaryCard';
import { useHistory } from 'react-router-dom';
import { getSummaryStats } from '../actions/summary';
import { useDispatch } from 'react-redux';

const Statistics = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setIsShown(false);
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      history.replace('/login');
    } else {
      dispatch(getSummaryStats(user.token));
      setIsShown(true);
    }
  }, [history, dispatch]);

  if (!isShown) {
    return null;
  }

  return <SummaryCard />;
};

export default Statistics;
