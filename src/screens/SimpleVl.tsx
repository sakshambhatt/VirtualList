import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {Text} from 'react-native';
import {FlatList, Image, View} from 'react-native';
import get500Products from '../api/get500Products';
import {styles} from '../styles/commonStyles';

function ListItem({
  productName,
  productImg,
}: {
  productName: string;
  productImg: string;
}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
      }}>
      <Image
        source={{uri: productImg}}
        style={{height: 100, width: 100, borderRadius: 50}}
      />
      <Text style={styles.text}>{productName}</Text>
    </View>
  );
}

function SimpleVl() {
  const {data} = useQuery({
    queryKey: ['simple-list-500'],
    queryFn: get500Products,
    staleTime: Infinity,
  });

  return (
    <FlatList
      data={data?.data?.products || []}
      renderItem={({item}) => (
        <ListItem
          productImg={item.imageUrl}
          productName={item.name}
          key={item.id}
        />
      )}
    />
  );
}

export default SimpleVl;
