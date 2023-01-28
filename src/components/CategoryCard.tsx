import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {meeshoPrimaryColor} from '../configs/colors';
import {commonStyles} from '../styles/commonStyles';

function CategoryCard({title, iconName}: {title: string; iconName: string}) {
  return (
    <View
      style={{
        ...styles.categoryCardContainer,
        ...styles.activeCategory,
      }}>
      <MaterialIcons name={iconName} size={22} color={meeshoPrimaryColor} />
      <Text style={commonStyles.text}>{title}</Text>
    </View>
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
