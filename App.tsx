import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {AsistenciaView} from "./app/presentation/views/attendance/asistencia";


const Stack= createNativeStackNavigator<RootStackParamlist>();

export type RootStackParamlist = {
  AsistenciaView: undefined,
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"AsistenciaView"} component={AsistenciaView} />
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
