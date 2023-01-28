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

const styles = StyleSheet.create({
  productView: {width: 100, padding: 10},
  productImage: {height: 50, width: 50, borderRadius: 50},
  productText: {color: 'black', fontSize: 11},
});

export default memo(ProductCard);
