import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {FlatList, Image, SectionList, Text, View} from 'react-native';
import getMeeshoProducts from '../api/getMeeshoProducts';
// import ProductCard from '../components/ProductCard';
// import useMeeshoProducts from '../hooks/useMeeshoProducts';

function MeeshoVl() {
  const {data, isFetching, isError} = useQuery(
    ['get-meesho-products'],
    getMeeshoProducts,
  );

  const sectionWiseProducts = data?.data?.sectionWiseProducts || [];

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
    <SectionList
      style={{backgroundColor: 'pink'}}
      sections={sectionWiseProducts}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <FlatList
          style={{backgroundColor: 'black'}}
          data={item.data}
          keyExtractor={product => product.id}
          numColumns={3}
          renderItem={({item: product}) => (
            <View>
              <Image source={{uri: product.imageUrl}} />
              <Text>{product.name}</Text>
            </View>
          )}
        />
      )}
      renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
    />
  );
}

export default MeeshoVl;
