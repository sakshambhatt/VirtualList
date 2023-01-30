import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SectionHeader = ({title}: {title: string}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {paddingLeft: 10},
  sectionTitle: {color: 'black', fontSize: 20, fontWeight: 'bold'},
});

export default memo(SectionHeader);
