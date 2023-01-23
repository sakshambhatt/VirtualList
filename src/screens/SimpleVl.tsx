import React from 'react';
import {FlatList} from 'react-native';
import ListItem from '../components/ListItem';
import use495Products from '../hooks/use495Products';

function SimpleVl() {
  const {products} = use495Products();

  return (
    <FlatList
      data={products || []}
      renderItem={({item, index}) => <ListItem key={index} row={item} />}
    />
  );
}

export default SimpleVl;
