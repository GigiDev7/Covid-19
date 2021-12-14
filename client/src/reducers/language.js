const languageReducer = (state = { lang: '' }, action) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return { ...state, lang: action.payload };
    default:
      return state;
  }
};

export default languageReducer;
