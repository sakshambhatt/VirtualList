import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ProductCard from '../components/ProductCard';
import use495Products from '../hooks/use495Products';

function SimpleVl() {
  const {products} = use495Products();

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
