import React from 'react';
import {Text, View} from 'react-native';
import useMeeshoProducts from '../hooks/useMeeshoProducts';
import {styles} from '../styles/commonStyles';

function MeeshoVl() {
  const {data, isFetching, isError} = useMeeshoProducts();
  console.log({data});

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
    <View style={styles.container}>
      <Text style={styles.text}>Meesho Virtual List</Text>
    </View>
  );
}

export default MeeshoVl;
