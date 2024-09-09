import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ManageExpense from './src/screens/ManageExpense';
import RecentExpense from './src/screens/RecentExpense';
import AllExpense from './src/screens/AllExpense';
import { colors } from './src/assets/Colors';
import Icon, { IconType } from "react-native-dynamic-vector-icons";

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpenseOverviw = () => {
  const renderTabIcon = (
    route: any,
    focused: boolean,
    color: string,
    size: number,
  ) => {
    let iconName = "hour-glass";
    let iconType = IconType.Ionicons
    switch (route.name) {
      case "RecentExpense":
        iconName = focused ? "hourglass" : "hourglass-outline";
        break;
      case "AllExpense":
        iconName = focused ? "calendar" : "calendar-outline";
        break;
      default:
        iconName = focused ? "hourglass" : "hourglass-outline";
        break;
    }
    return (
      <Icon
        name={iconName}
        type={iconType}
        size={size}
        color={color}
      />
    );
  };
  return (
    <BottomTabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) =>
        renderTabIcon(route, focused, color, size),
      tabBarActiveTintColor: colors.accent500,
      tabBarInactiveTintColor: "#a6a6a6",
      tabBarStyle: {backgroundColor: colors.primary500},
      headerTintColor: '#ffffff',
      headerStyle: {backgroundColor: colors.primary500},
    })}
    //  screenOptions={{
    //   headerStyle: {backgroundColor: colors.primary500},
    //   headerTintColor: '#ffffff',
    //   tabBarStyle: {backgroundColor: colors.primary500},
    //   tabBarActiveTintColor: colors.accent500
    // }}
    >
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
        title: "All Expenses",
        tabBarLabel :"All Expense",
        // tabBarIcon: ({color, size}) => <Image source={require('./src/assets/images/calendar.png')} style={{height:25, width:25}}/>
      }} 
      />
    </BottomTabs.Navigator>//BEA044A3
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
