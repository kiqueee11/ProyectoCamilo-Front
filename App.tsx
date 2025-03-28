import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import Home from "./app/presentation/views/home/Home";
import DetailEvent from "./app/presentation/views/detail-event/DetailEvent";
import {LoginScreen} from "./app/presentation/views/auth/Login";


const Stack= createNativeStackNavigator<RootStackParamlist>();

export type RootStackParamlist = {
  Home: undefined,
  DetailEvent: undefined,
  LoginScreen: undefined,
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"LoginScreen"} component={LoginScreen} />
        <Stack.Screen name={"Home"} component={Home} />
        <Stack.Screen name={"DetailEvent"} component={DetailEvent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
