import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SimpleVl from './src/screens/SimpleVl';
import MeeshoVl from './src/screens/MeeshoVl';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Simple" component={SimpleVl} />
        <Tab.Screen name="Meesho" component={MeeshoVl} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
