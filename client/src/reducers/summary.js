const summaryReducer = (state = { summary: {} }, action) => {
  switch (action.type) {
    case 'GET_SUMMARY':
      return { ...state, summary: action.payload };
    default:
      return state;
  }
};

export default summaryReducer;
