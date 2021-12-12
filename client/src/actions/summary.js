import { summary_get } from '../api/index';

export const getSummaryStats = (token) => async (dispatch) => {
  try {
    const { data } = await summary_get(token);
    dispatch({ type: 'GET_SUMMARY', payload: data });
  } catch (error) {
    console.log(error.response.data);
  }
};
