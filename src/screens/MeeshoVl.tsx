import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList, SectionList, StyleSheet, Text, View} from 'react-native';
import CategoryCard from '../components/CategoryCard';
import SectionFlatList from '../components/SectionFlatList';
import SectionHeader from '../components/SectionHeader';
import useMeeshoProducts from '../hooks/useMeeshoProducts';
import {toastError} from '../services/toast';
import {commonStyles} from '../styles/commonStyles';

function MeeshoVl() {
  const {
    sectionWiseProducts,
    isFetching,
    isError,
    refetch,
    isSuccess,
    sectionIdToIndexMap,
  } = useMeeshoProducts();

  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const sectionListRef = useRef<SectionList>(null);

  const renderCategoryItem = useCallback(
    ({item}: {item: any}) => {
      const setThisAsCurrentSection = (sectionId: string) => {
        setCurrentSection(sectionId);
        if (sectionListRef.current !== null) {
          const desiredSectionIndex = sectionIdToIndexMap.get(sectionId);
          sectionListRef.current.scrollToLocation({
            itemIndex: 0,
            sectionIndex: desiredSectionIndex,
          });
        }
      };

      return (
        <CategoryCard
          isActive={item.id === currentSection}
          item={{id: item.id, title: item.title, iconName: item.iconName}}
          setThisAsCurrentSection={setThisAsCurrentSection}
        />
      );
    },
    [currentSection, sectionIdToIndexMap],
  );

  const renderSectionItem = useCallback(
    ({item}: {item: any}) => <SectionFlatList item={item} />,
    [],
  );

  useEffect(() => {
    if (currentSection === null && isSuccess) {
      setCurrentSection(sectionWiseProducts[0].id);
    }
  }, [currentSection, isSuccess, sectionWiseProducts]);

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
      <FlatList
        data={sectionWiseProducts}
        renderItem={renderCategoryItem}
        initialNumToRender={9}
      />
      <SectionList
        sections={sectionWiseProducts}
        keyExtractor={item => item.id}
        renderItem={renderSectionItem}
        renderSectionHeader={({section: {title}}) => (
          <SectionHeader title={title} />
        )}
        onRefresh={refetch}
        refreshing={isFetching}
        initialNumToRender={15}
        ref={sectionListRef}
        onScrollToIndexFailed={() => toastError('Scrolling failed!')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  meeshoVlContainer: {flexDirection: 'row'},
});

export default MeeshoVl;
