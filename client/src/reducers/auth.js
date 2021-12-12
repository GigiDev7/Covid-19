const authReducer = (state = { userData: null, errors: {} }, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      localStorage.setItem('user', JSON.stringify({ ...action.payload }));
      return { ...state, userData: action.payload };
    case 'LOGOUT':
      localStorage.clear();
      return { ...state, userData: null };
    case 'LOGIN':
      localStorage.setItem('user', JSON.stringify({ ...action.payload }));
      return { ...state, userData: action.payload };
    case 'ERROR':
      return { ...state, errors: action.payload };
    case 'CLEAR_ERRORS':
      return { ...state, errors: {} };
    default:
      return state;
  }
};

export default authReducer;
