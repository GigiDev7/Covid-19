import { signup_post, login_post } from '../api/index';

export const signUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await signup_post(formData);
    dispatch({ type: 'SIGN_UP', payload: data });
    history.push('/');
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error.response.data });
    console.log(error.response.data);
  }
};

export const logIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await login_post(formData);
    dispatch({ type: 'LOGIN', payload: data });
    history.push('/');
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error.response.data });
    console.log(error.response.data);
  }
};
