import { stringify } from 'querystring';

import { listingApi } from '../../request';

export const fetchListing = (queryObj) => {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_LISTING_RESULT_START'
    });
    return listingApi(queryObj)
    .then(response => {
      dispatch({
        type: 'FETCH_LISTING_RESULT_SUCCEED',
        payload: response.data
      })
    })
  }
}
