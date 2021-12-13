const countryReducer = (state = { countries: [] }, action) => {
  switch (action.type) {
    case 'GET_COUNTRIES':
      return { ...state, countries: action.payload };
    case 'FILTER_COUNTRIES':
      return { ...state, countries: action.payload };
    case 'CLEAR_DATA':
      return { ...state, countries: [] };
    default:
      return state;
  }
};

export default countryReducer;
