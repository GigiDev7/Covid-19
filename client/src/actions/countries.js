import {
  countries_get,
  get_sorted_countries,
  get_by_field,
} from '../api/index';

export const getCountryData = (token) => async (dispatch) => {
  try {
    const { data } = await countries_get(token);
    dispatch({ type: 'GET_COUNTRIES', payload: data });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const sortCountries = (token, query, value) => async (dispatch) => {
  try {
    const { data } = await get_sorted_countries(token, query, value);
    dispatch({ type: 'SORT_COUNTRIES', payload: data });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getByField = (token, query) => async (dispatch) => {
  try {
    const { data } = await get_by_field(token, query);
    dispatch({ type: 'GET_BY_FIELD', payload: data });
  } catch (error) {
    console.log(error.response.data);
  }
};
