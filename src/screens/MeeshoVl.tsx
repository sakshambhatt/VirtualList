import {FlashList} from '@shopify/flash-list';
import React, {useCallback, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import SectionHeader from '../components/SectionHeader';
import useMeeshoProducts from '../hooks/useMeeshoProducts';
import {commonStyles} from '../styles/commonStyles';

function MeeshoVl() {
  const {
    categories,
    sectionWiseProducts,
    isFetching,
    isError,
    refetch,
    sectionIdToIndexMap,
    currentSection,
    setCurrentSection,
  } = useMeeshoProducts();

  const sectionListRef = useRef<FlashList<string | Product>>(null);

  const setThisAsCurrentSection = useCallback(
    (sectionId: string) => {
      setCurrentSection(sectionId);
      if (sectionListRef.current !== null) {
        const desiredSectionIndex = sectionIdToIndexMap.get(sectionId) || 0;
        sectionListRef.current.scrollToIndex({
          animated: true,
          index: desiredSectionIndex,
        });
      }
    },
    [sectionIdToIndexMap, setCurrentSection],
  );

  const renderCategoryItem = useCallback(
    ({item}: {item: any}) => {
      return (
        <CategoryCard
          isActive={item.id === currentSection}
          item={{id: item.id, title: item.title, iconName: item.iconName}}
          setThisAsCurrentSection={setThisAsCurrentSection}
        />
      );
    },
    [currentSection, setThisAsCurrentSection],
  );

  // const onCheckViewableItems = ({
  //   viewableItems,
  //   changed,
  // }: {
  //   viewableItems: any;
  //   changed: any;
  // }) => {
  //   // if section or changed are not undefined
  //   // and one of them is different than currentSection, then set currentSection
  //   if (
  //     (viewableItems?.[0]?.item?.id !== undefined ||
  //       changed?.[0]?.item?.id !== undefined) &&
  //     (viewableItems?.[0]?.item?.id !== currentSection ||
  //       changed?.[0]?.item?.id !== currentSection)
  //   ) {
  //     const targetSectionId =
  //       changed?.[0]?.item?.id !== undefined
  //         ? changed?.[0]?.item?.id
  //         : viewableItems?.[0]?.item?.id;
  //     setCurrentSection(targetSectionId);
  //   }
  // };

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
    <View style={styles.meeshoVlContainer}>
      {/* List of Categories */}
      <View style={{width: 75}}>
        <FlashList
          data={categories}
          renderItem={renderCategoryItem}
          estimatedItemSize={95}
        />
      </View>
      {/* List of Products w.r.t. categories */}
      <FlashList
        data={sectionWiseProducts}
        renderItem={({item}) => {
          if (typeof item === 'string') {
            return <SectionHeader title={item} />;
          } else {
            return (
              <ProductCard productImg={item.imageUrl} productName={item.name} />
            );
          }
        }}
        numColumns={3}
        getItemType={item => {
          return typeof item === 'string' ? 'sectionHeader' : 'productList';
        }}
        estimatedItemSize={100}
        ref={sectionListRef}
        onRefresh={refetch}
        refreshing={isFetching}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  meeshoVlContainer: {flex: 1, flexDirection: 'row'},
});

export default MeeshoVl;
