import React, { useEffect } from 'react';
import Summary from '../components/Summary/Summary';
import { useHistory } from 'react-router-dom';
import { getSummaryStats } from '../actions/summary';
import { useSelector, useDispatch } from 'react-redux';

const Statistics = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const summary = useSelector((state) => state.summary);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      history.push('/login');
    } else {
      dispatch(getSummaryStats(user.token));
    }
  }, [history, dispatch]);

  return <Summary />;
};

export default Statistics;
