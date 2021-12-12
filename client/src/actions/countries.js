import { countries_get } from '../api/index';

export const getCountryData = (token) => async (dispatch) => {
  try {
    const { data } = await countries_get(token);
    dispatch({ type: 'GET_COUNTRIES', payload: data });
  } catch (error) {
    console.log(error.response.data);
  }
};
