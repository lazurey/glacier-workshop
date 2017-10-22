const initialState = {
  listings: [],
  metadata: {},
};

const searchListingReducer = (state = initialState, action = {}) => {
  if (action.type === 'FETCH_LISTING_RESULT_SUCCEED') {
    return action.payload;
  }
  return state;
}

export default searchListingReducer;
