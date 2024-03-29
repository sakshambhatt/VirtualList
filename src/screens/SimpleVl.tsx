import React, {useCallback} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ProductCard from '../components/ProductCard';
import use495Products from '../hooks/use495Products';
import {commonStyles} from '../styles/commonStyles';

function SimpleVl() {
  const {products, isFetching, isError, refetch} = use495Products();
  const renderItem = useCallback(
    ({item}: {item: Product}) => (
      <ProductCard
        key={item.id}
        productImg={item.imageUrl}
        productName={item.name}
      />
    ),
    [],
  );

  if (isFetching) {
    return (
      <View style={commonStyles.messageContainer}>
        <Text style={commonStyles.loadingText}>Loading...</Text>
      </View>
    );
  } else if (isError) {
    return (
      <View style={commonStyles.messageContainer}>
        <Text style={commonStyles.errorText}>Error...</Text>
      </View>
    );
  }

  return (
    <View style={styles.simpleListContainer}>
      <FlatList
        data={products || []}
        renderItem={renderItem}
        numColumns={3}
        horizontal={false}
        refreshing={isFetching}
        onRefresh={refetch}
        initialNumToRender={27}
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
