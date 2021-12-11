import { signup_post, logout_get } from '../api/index';

export const signUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await signup_post(formData);
    dispatch({ type: 'SIGN_UP', payload: data });
    history.push('/');
  } catch (error) {
    console.log(error.response.data);
  }
};

export const logOut = (history) => async (dispatch) => {
  try {
    await logout_get();
    dispatch({ type: 'LOGOUT' });
    history.push('/');
  } catch (error) {}
};
