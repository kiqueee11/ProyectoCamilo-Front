import React from 'react';
import { StyleSheet,} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./app/presentation/views/home/Home";
import Participants from "./app/presentation/views/participants/Participants";
import DetailEvent from "./app/presentation/views/detail-event/DetailEvent";
import {LoginScreen} from "./app/presentation/views/auth/Login";
import CreateEvent from "./app/presentation/views/create-event/CreateEvent";
import {NavigationContainer} from "@react-navigation/native";
import {EventInterface} from "./app/domain/entities/Event";
import UpdateEvent from "./app/presentation/views/update-event/UpdateEvent";
import AttendanceScreen from "./app/presentation/views/attendance/AttendanceScreen";

const Stack= createNativeStackNavigator<RootStackParamlist>();

export type RootStackParamlist = {
  Home: undefined,
  Participants: {slug:string},
  DetailEvent: { event: EventInterface },
  LoginScreen: undefined,
  CreateEvent: undefined,
  UpdateEvent: { event: EventInterface },
  AttendaceScreen: {event: EventInterface},
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"LoginScreen"} component={LoginScreen} />
        <Stack.Screen name={"Participants"} component={Participants} />
        <Stack.Screen name={"Home"} component={Home} />
        <Stack.Screen name={"AttendaceScreen"} component={AttendanceScreen} />
        <Stack.Screen name={"CreateEvent"} component={CreateEvent} />
        <Stack.Screen name={"DetailEvent"} component={DetailEvent} />
        <Stack.Screen name={"UpdateEvent"} component={UpdateEvent} />
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
