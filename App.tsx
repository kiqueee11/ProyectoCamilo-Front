import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {AsistenciaView} from "./app/presentation/views/attendance/asistencia";
import { StyleSheet, Text, View } from 'react-native';

export type RootStackParamsList = {
  AsistenciaView: undefined;

}
const Stack = createStackNavigator<RootStackParamsList>();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AsistenciaView" component={AsistenciaView}/>
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
