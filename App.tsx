import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./app/presentation/views/home/Home";
import DetailEvent from "./app/presentation/views/detail-event/DetailEvent";
import {LoginScreen} from "./app/presentation/views/auth/Login";
import CreateEvent from "./app/presentation/views/create-event/CreateEvent";
import {NavigationContainer} from "@react-navigation/native";
import {AsistenciaView} from "./app/presentation/views/attendance/asistencia";
import Participants from "./app/presentation/views/participants/Participants";


const Stack= createNativeStackNavigator<RootStackParamlist>();

export type RootStackParamlist = {
  Home: undefined,
  DetailEvent: undefined,
  LoginScreen: undefined,
  CreateEvent: undefined,
  AsistenciaView: undefined,
  Participants: undefined,
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"LoginScreen"} component={LoginScreen} />
        <Stack.Screen name={"Home"} component={Home} />
        <Stack.Screen name={"AsistenciaView"} component={AsistenciaView} />
        <Stack.Screen name={"CreateEvent"} component={CreateEvent} />
        <Stack.Screen name={"DetailEvent"} component={DetailEvent} />
        <Stack.Screen name={"Participants"} component={Participants} />
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
