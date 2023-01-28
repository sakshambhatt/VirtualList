import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SectionHeader = ({title}: {title: string}) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {color: 'black', fontSize: 18, fontWeight: 'bold'},
});

export default memo(SectionHeader);
