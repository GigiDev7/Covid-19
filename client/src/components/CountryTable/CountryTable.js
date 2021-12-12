import React, { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTable } from 'react-table';
import { COLUMNS } from './columns';
import styles from './styles.module.css';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { sortCountries } from '../../actions/countries';

const CountryTable = () => {
  const [isDeathAscending, setIsDeathAscending] = useState(false);
  const [isRecoveredAscending, setIsRecoveredAscending] = useState(false);
  const [isConfirmedAscending, setIsConfirmedAscending] = useState(false);

  const countries = useSelector((state) => state.countries.countries);
  const dispatch = useDispatch();

  //for tables
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => countries, [countries]);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  // sorting
  const handleClick = (query, value) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (query === 'deaths') {
      if (isDeathAscending) {
        dispatch(sortCountries(user.token, query, 1));
        setIsDeathAscending(!isDeathAscending);
      } else {
        dispatch(sortCountries(user.token, query, -1));
        setIsDeathAscending(!isDeathAscending);
      }
    } else if (query === 'recovered') {
      if (isRecoveredAscending) {
        dispatch(sortCountries(user.token, query, 1));
        setIsRecoveredAscending(!isRecoveredAscending);
      } else {
        dispatch(sortCountries(user.token, query, -1));
        setIsRecoveredAscending(!isRecoveredAscending);
      }
    } else if (query === 'confirmed') {
      if (isConfirmedAscending) {
        dispatch(sortCountries(user.token, query, 1));
        setIsConfirmedAscending(!isConfirmedAscending);
      } else {
        dispatch(sortCountries(user.token, query, -1));
        setIsConfirmedAscending(!isConfirmedAscending);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <input type="search" />
      </div>
      <span onClick={() => handleClick('deaths')} id={styles.icon_death}>
        {!isDeathAscending ? <AiFillCaretUp /> : <AiFillCaretDown />}
      </span>
      <span onClick={() => handleClick('recovered')} id={styles.icon_recovered}>
        {!isRecoveredAscending ? <AiFillCaretUp /> : <AiFillCaretDown />}
      </span>
      <span onClick={() => handleClick('confirmed')} id={styles.icon_confirmed}>
        {!isConfirmedAscending ? <AiFillCaretUp /> : <AiFillCaretDown />}
      </span>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CountryTable;
