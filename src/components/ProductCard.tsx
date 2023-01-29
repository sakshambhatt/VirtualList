import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

function ProductCard({
  productName,
  productImg,
}: {
  productName: string;
  productImg: string;
}) {
  return (
    <View style={styles.productView}>
      <FastImage source={{uri: productImg}} style={styles.productImage} />
      <Text style={styles.productText}>{productName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  productView: {width: 100, padding: 10, height: 90},
  productImage: {height: 50, width: 50, borderRadius: 50},
  productText: {color: 'black', fontSize: 11},
});

export default memo(ProductCard);
