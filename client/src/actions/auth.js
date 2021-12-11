import { signup } from '../api/index';

export const signUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await signup(formData);
    dispatch({ type: 'SIGN_UP', payload: data });
    history.push('/');
  } catch (error) {
    console.log(error.response.data);
  }
};
