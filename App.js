/**
 * goDutch React Native App
 * @format
 * @flow strict-local
 * @author Aditi Jain
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import DetailsInput from './src/screens/DetailsInput';
import Login from './src/screens/Login';
import SetupAccount from './src/screens/SetupAccount';
import { APP_BACKGROUND_COLOR } from './styles/Colors';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { navigationRef } from './utils/CommonRef';

const Stack = createStackNavigator();

function LoginStack() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode="none" initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name="SetupAccount"
        component={SetupAccount}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name="DetailsInput"
        component={DetailsInput}
        options={{animationEnabled: false}}
      />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" /> 
      <SafeAreaView style={styles.safearea}> 
          <LoginStack/>
      </SafeAreaView>
      
    </>
  );
};

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: APP_BACKGROUND_COLOR
  },
});

export default App;
