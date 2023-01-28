import React from 'react';
import {FlatList} from 'react-native';
import ProductCard from './ProductCard';

function SectionFlatList({item}: {item: any}) {
  return (
    <FlatList
      style={{backgroundColor: 'pink'}}
      data={item.list}
      keyExtractor={product => product.id}
      numColumns={3}
      renderItem={({item: product}) => (
        <ProductCard
          key={product.id}
          productImg={product.imageUrl}
          productName={product.name}
        />
      )}
      initialNumToRender={27}
      getItemLayout={(data, index) => ({
        length: 90,
        offset: 90 * index,
        index,
      })}
    />
  );
}

export default SectionFlatList;
