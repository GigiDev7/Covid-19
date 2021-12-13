import React, { useMemo, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTable } from 'react-table';
import { COLUMNS } from './columns';
import styles from './styles.module.css';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { getFilteredCountries } from '../../actions/countries';

const CountryTable = () => {
  const [isDeathAscending, setIsDeathAscending] = useState(false);
  const [isRecoveredAscending, setIsRecoveredAscending] = useState(false);
  const [isConfirmedAscending, setIsConfirmedAscending] = useState(false);

  const [searchField, setSearchField] = useState('');

  const countries = useSelector((state) => state.countries.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const field = searchField.toLowerCase();
    const timeout = setTimeout(() => {
      dispatch(getFilteredCountries(user.token, field));
    }, 400);
    return () => {
      clearTimeout(timeout);
    };
  }, [dispatch, searchField]);

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
    const field = searchField.toLowerCase();
    if (query === 'deaths') {
      if (isDeathAscending) {
        dispatch(getFilteredCountries(user.token, field, query));
        setIsDeathAscending(!isDeathAscending);
      } else {
        dispatch(getFilteredCountries(user.token, field, `-${query}`));
        setIsDeathAscending(!isDeathAscending);
      }
    } else if (query === 'recovered') {
      if (isRecoveredAscending) {
        dispatch(getFilteredCountries(user.token, field, query));
        setIsRecoveredAscending(!isRecoveredAscending);
      } else {
        dispatch(getFilteredCountries(user.token, field, `-${query}`));
        setIsRecoveredAscending(!isRecoveredAscending);
      }
    } else if (query === 'confirmed') {
      if (isConfirmedAscending) {
        dispatch(getFilteredCountries(user.token, field, query));
        setIsConfirmedAscending(!isConfirmedAscending);
      } else {
        dispatch(getFilteredCountries(user.token, field, `-${query}`));
        setIsConfirmedAscending(!isConfirmedAscending);
      }
    }
  };

  const handleSearchChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <input
          placeholder="Search by field name"
          className={styles.search_input}
          type="search"
          onChange={handleSearchChange}
        />
      </div>
      {searchField.toLowerCase() === 'deaths' || !searchField ? (
        <span onClick={() => handleClick('deaths')} id={styles.icon_death}>
          {!isDeathAscending ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </span>
      ) : null}
      {searchField.toLowerCase() === 'recovered' || !searchField ? (
        <span
          onClick={() => handleClick('recovered')}
          id={styles.icon_recovered}
        >
          {!isRecoveredAscending ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </span>
      ) : null}
      {searchField.toLowerCase() === 'confirmed' || !searchField ? (
        <span
          onClick={() => handleClick('confirmed')}
          id={styles.icon_confirmed}
        >
          {!isConfirmedAscending ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </span>
      ) : null}
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
