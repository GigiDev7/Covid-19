import { countries_get, get_filtered_countries } from '../api/index';

export const getCountryData = (token) => async (dispatch) => {
  try {
    const { data } = await countries_get(token);
    dispatch({ type: 'GET_COUNTRIES', payload: data });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getFilteredCountries =
  (token, field, sort) => async (dispatch) => {
    try {
      const { data } = await get_filtered_countries(token, field, sort);
      dispatch({ type: 'FILTER_COUNTRIES', payload: data });
    } catch (error) {
      console.log(error.response.data);
    }
  };
