import React from 'react';
import { View, Text, Button } from 'react-native';

export const Home = (props) => {
  const { navigate } = props.navigation;
  return (
    <View>
      <Text>Home</Text>
      <Button title="Search for Cars" onPress={() => navigate('SearchForm')} />
      <Button title="Latest cars" onPress={() => navigate('SearchListing')} />
      <Button title="Random car" onPress={() => navigate('CarDetail')} />
    </View>
  )
}
 