import React, {useEffect, useState} from 'react';
import {FlatList, SectionList, Text, View} from 'react-native';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import SectionHeader from '../components/SectionHeader';
import useMeeshoProducts from '../hooks/useMeeshoProducts';
import {commonStyles} from '../styles/commonStyles';

function MeeshoVl() {
  const {sectionWiseProducts, isFetching, isError, refetch, isSuccess} =
    useMeeshoProducts();

  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const setThisAsCurrentSection = (sectionId: string) =>
    setCurrentSection(sectionId);

  useEffect(() => {
    if (currentSection === null && isSuccess) {
      setCurrentSection(sectionWiseProducts[0].id);
    }
  }, [currentSection, isSuccess, sectionWiseProducts]);

  console.log({currentSection});

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
    <View style={{flexDirection: 'row'}}>
      <FlatList
        data={sectionWiseProducts}
        renderItem={({item}) => (
          <CategoryCard
            isActive={item.id === currentSection}
            item={{id: item.id, title: item.title, iconName: item.iconName}}
            setThisAsCurrentSection={setThisAsCurrentSection}
          />
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
