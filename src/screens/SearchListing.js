import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { fetchListing } from '../redux/actions/searchListing';

class SearchListingScreen extends Component {
  componentDidMount() {
    const query = {
      sort: 'age',
      desc: '1',
      size: 2,
    };
    this.props.fetchListing(query);
  }

  render() {
    const { listingData } = this.props;
    return (
      <View>
        <Text>Search Listing</Text>
        {
          listingData.listings && listingData.listings.map((item) => (
            <Text key={item.id}>{item.id}</Text>
          ))
        }
      </View>
    );
  };
};

const mapStateToProps = (state) => ({
  listingData: state.searchlisting,
});

const mapDispatchToProps = (dispatch) => ({
  fetchListing: (query) => dispatch(fetchListing(query)),
});

export const SearchListing = connect(mapStateToProps, mapDispatchToProps)(SearchListingScreen);