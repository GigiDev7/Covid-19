const authReducer = (state = { userData: null }, action) => {
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
    default:
      return state;
  }
};

export default authReducer;
