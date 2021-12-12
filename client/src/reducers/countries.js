const countryReducer = (state = { countries: [] }, action) => {
  switch (action.type) {
    case 'GET_COUNTRIES':
      return { ...state, countries: action.payload };
    case 'SORT_COUNTRIES':
      return { ...state, countries: action.payload };
    default:
      return state;
  }
};

export default countryReducer;