import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native';
import ProductCard from './ProductCard';

function SectionFlatList({item}: {item: any}) {
  const renderProductItem = useCallback(
    ({item: product}: {item: Product}) => (
      <ProductCard
        key={product.id}
        productImg={product.imageUrl}
        productName={product.name}
      />
    ),
    [],
  );

  return (
    <FlatList
      style={styles.flatListContainer}
      data={item.list}
      keyExtractor={product => product.id}
      numColumns={3}
      renderItem={renderProductItem}
      initialNumToRender={27}
      getItemLayout={(data, index) => ({
        length: 90,
        offset: 90 * index,
        index,
      })}
    />
  );
}

const styles = StyleSheet.create({
  flatListContainer: {backgroundColor: 'pink'},
});

export default SectionFlatList;
