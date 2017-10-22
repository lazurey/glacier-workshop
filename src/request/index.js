import { stringify } from 'querystring';
import client from './client';

const searchListing = '/search-listings';
const carListing = '/listings/';

export const listingApi = (queryObj) => client.get(`${searchListing}?${stringify(queryObj)}`);
