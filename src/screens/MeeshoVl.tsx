import React from 'react';
import {FlatList, SectionList, Text, View} from 'react-native';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import SectionHeader from '../components/SectionHeader';
import useMeeshoProducts from '../hooks/useMeeshoProducts';
import {commonStyles} from '../styles/commonStyles';

function MeeshoVl() {
  const {sectionWiseProducts, isFetching, isError, refetch} =
    useMeeshoProducts();

  if (isFetching) {
    return (
      <View style={commonStyles.messageContainer}>
        <Text style={commonStyles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={commonStyles.messageContainer}>
        <Text style={commonStyles.errorText}>Error...</Text>
      </View>
    );
  }

  return (
    <View style={{flexDirection: 'row'}}>
      <FlatList
        data={sectionWiseProducts}
        renderItem={({item}) => (
          <CategoryCard title={item.title} iconName={item.iconName} />
        )}
      />
      <SectionList
        sections={sectionWiseProducts}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
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
            initialNumToRender={35}
          />
        )}
        renderSectionHeader={({section: {title}}) => (
          <SectionHeader title={title} />
        )}
        onRefresh={refetch}
        refreshing={isFetching}
        initialNumToRender={15}
      />
    </View>
  );
}

export default MeeshoVl;
