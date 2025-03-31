import React, {useState} from 'react';
import {KeyboardType, Text, TouchableOpacity, View} from "react-native";
import stylesHome from './StylesHome';
import {Filtro} from "../../components/Filtro";
import CardEvento from "../../components/CardEvento";
import ButtonAddEvento from "../../components/ButtonAddEvento";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamlist} from "../../../../App";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {Calendar, DateData} from "react-native-calendars";


const Home = ({navigation}:PropsStackNavigation) => {
    const [selectedDate, setSelectedDate] = useState('');

    return(
        <View style={stylesHome.container}>
            <Text style={stylesHome.textPrincipal}>Eventos</Text>
            <View>
                <Filtro/>
            </View>
            <View style={{marginBottom:20,}}>
                <Calendar
                    onDayPress={(day:DateData) => setSelectedDate(day.dateString)}
                    markedDates={{
                        [selectedDate]: { selected: true, selectedColor: 'blue' }
                    }}
                />
            </View>
            <View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("DetailEvent")
                }}>
                    <CardEvento
                        titulo={"Review title"}
                        fecha={"28/03/2025"}
                        tipoEvento={"Evento"}
                        ubicacion={"Madrid, España"}
                        userImage={require("../../../../assets/user.png")}
                        usuario={"Usuario"}
                    />
                </TouchableOpacity>
            </View>
            <ButtonAddEvento onPress={()=>{navigation.navigate("CreateEvent")}}/>
        </View>
    )
}

export default Home;