import React from 'react';
import { useSelector } from 'react-redux';

const CountryTable = () => {
  const countries = useSelector((state) => state.countries);
  console.log(countries);

  return (
    <div>
      <h1>country table</h1>
    </div>
  );
};

export default CountryTable;
