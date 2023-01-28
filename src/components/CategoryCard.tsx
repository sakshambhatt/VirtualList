import React, {memo} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {meeshoPrimaryColor} from '../configs/colors';
import {commonStyles} from '../styles/commonStyles';

function CategoryCard({
  isActive,
  item,
  setThisAsCurrentSection,
}: {
  isActive: boolean;
  item: {id: string; title: string; iconName: string};
  setThisAsCurrentSection: (sectionId: string) => void;
}) {
  const handleCardPress = () => setThisAsCurrentSection(item.id);
  const containerStyle = isActive
    ? {...styles.categoryCardContainer, ...styles.activeCategory}
    : {...styles.categoryCardContainer};
  const textStyle = isActive ? {color: meeshoPrimaryColor} : commonStyles.text;
  const iconColor = isActive ? meeshoPrimaryColor : 'gray';

  return (
    <Pressable style={containerStyle} onPress={handleCardPress}>
      <MaterialIcons name={item.iconName} size={22} color={iconColor} />
      <Text style={textStyle}>{item.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  categoryCardContainer: {
    width: 75,
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 25,
  },
  activeCategory: {
    borderLeftWidth: 10,
    borderLeftColor: meeshoPrimaryColor,
  },
});

export default memo(CategoryCard);
