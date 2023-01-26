import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ProductCard from '../components/ProductCard';
import use495Products from '../hooks/use495Products';

function SimpleVl() {
  const {products, isFetching, isError} = use495Products();

  if (isFetching) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'green'}}>Loading...</Text>
      </View>
    );
  } else if (isError) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'red'}}>Error...</Text>
      </View>
    );
  }

  return (
    <View style={styles.simpleListContainer}>
      <FlatList
        data={products || []}
        renderItem={({item}) => (
          <ProductCard
            key={item.id}
            productImg={item.imageUrl}
            productName={item.name}
          />
        )}
        numColumns={3}
        horizontal={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  simpleListContainer: {
    flex: 1,
    alignItems: 'center',
    gap: 2,
  },
});

export default SimpleVl;
