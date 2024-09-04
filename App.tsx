import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';
import ManageExpense from './src/screens/ManageExpense';
import RecentExpense from './src/screens/RecentExpense';
import AllExpense from './src/screens/AllExpense';
import { colors } from './src/assets/Colors';
// import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpenseOverviw = () => {
  return (
    <BottomTabs.Navigator screenOptions={{
      headerStyle: {backgroundColor: colors.primary500},
      headerTintColor: '#ffffff',
      tabBarStyle: {backgroundColor: colors.primary500},
      tabBarActiveTintColor: colors.accent500
    }}>
      <BottomTabs.Screen
       name='RecentExpense' 
       component={RecentExpense}
       options={{
         title: "Recent Expense",
         tabBarLabel: "Recent Expense",
        //  tabBarIcon: ({color, size}) => <Icon />
       }} 
       />
      <BottomTabs.Screen 
      name='AllExpense' 
      component={AllExpense} 
      options={{
        title: "All Expenses"
      }} 
      />
    </BottomTabs.Navigator>
  )
}

const App = (): React.JSX.Element => {
  return (
    <>
      {/* <StatusBar barStyle={'default'} /> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='ExpenseOverview' 
            component={ExpenseOverviw} 
            options={{ headerShown: false }} 
            />
          <Stack.Screen 
          name='ManageExpense' 
          component={ManageExpense} 
          />
        </Stack.Navigator>

      </NavigationContainer>
    </>
  );
}

export default App;
