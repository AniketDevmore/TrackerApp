import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ManageExpense from './src/screens/ManageExpense';
import RecentExpense from './src/screens/RecentExpense';
import AllExpense from './src/screens/AllExpense';
import { colors } from './src/assets/Colors';
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import IconButton from './src/components/UI/IconButton';
import ExpensesContextProvider from "./src/store/expenses-context"
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
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ focused, color, size }) =>
          renderTabIcon(route, focused, color, size),
        tabBarActiveTintColor: colors.accent500,
        tabBarInactiveTintColor: colors.accent100,
        tabBarStyle: { backgroundColor: colors.primary500 },
        headerTintColor: colors.whiteColor,
        headerStyle: { backgroundColor: colors.primary500 },
        headerRight: ({ tintColor }) => (
          <IconButton icon={'add'} size={28} color={tintColor} onPress={()=>{
            navigation.navigate('ManageExpense')
          }} />
        )
      })}
    >
      <BottomTabs.Screen
        name='RecentExpense'
        component={RecentExpense}
        options={{
          title: "Recent Expense",
          tabBarLabel: "Recent Expense",
        }}
      />
      <BottomTabs.Screen
        name='AllExpense'
        component={AllExpense}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expense",
        }}
      />
    </BottomTabs.Navigator>
  )
}

const App = (): React.JSX.Element => {
  return (
    <>
    <ExpensesContextProvider>
      <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
          headerStyle: {backgroundColor: colors.primary500},
          headerTintColor: colors.whiteColor
        }}
        >
          <Stack.Screen
            name='ExpenseOverview'
            component={ExpenseOverviw}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='ManageExpense'
            component={ManageExpense}
            options={{
              presentation: 'modal'
            }}
          />
        </Stack.Navigator>

      </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}

export default App;
