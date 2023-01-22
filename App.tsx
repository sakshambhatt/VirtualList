import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SimpleVl from './src/screens/SimpleVl';
import MeeshoVl from './src/screens/MeeshoVl';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color, size}: {color: string; size: number}) => {
              if (route.name === 'Simple') {
                return (
                  <MaterialIcons name="view-list" size={size} color={color} />
                );
              } else if (route.name === 'Meesho') {
                return (
                  <MaterialIcons name="dashboard" size={size} color={color} />
                );
              }
            },
            tabBarActiveTintColor: '#f43397',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="Simple" component={SimpleVl} />
          <Tab.Screen name="Meesho" component={MeeshoVl} />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
