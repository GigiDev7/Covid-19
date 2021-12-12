import React, { useEffect, useState } from 'react';
import { getCountryData } from '../actions/countries';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CountryTable from '../components/CountryTable/CountryTable';

const CountriesData = () => {
  const [isShown, setIsShown] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    setIsShown(false);
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      history.replace('/login');
    } else {
      dispatch(getCountryData(user.token));
      setIsShown(true);
    }
  }, [history, dispatch]);

  if (!isShown) {
    return null;
  }

  return <CountryTable />;
};

export default CountriesData;
