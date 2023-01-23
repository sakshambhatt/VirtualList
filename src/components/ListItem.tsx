import React, {memo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function ProductCard({
  productName,
  productImg,
}: {
  productName: string;
  productImg: string;
}) {
  return (
    <View style={styles.productView}>
      <Image source={{uri: productImg}} style={styles.productImage} />
      <Text style={styles.productText}>{productName}</Text>
    </View>
  );
}

function ListItem({
  row,
}: {
  row: Array<{id: string; name: string; imageUrl: string; categoryId: string}>;
}) {
  return (
    <View style={styles.listItemView}>
      {row.map(product => (
        <ProductCard
          key={product.id}
          productImg={product.imageUrl}
          productName={product.name}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  listItemView: {
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 10,
    justifyContent: 'center',
    gap: 5,
  },
  productView: {width: 70},
  productImage: {height: 50, width: 50, borderRadius: 50},
  productText: {color: 'black', fontSize: 11},
});

export default memo(ListItem);
