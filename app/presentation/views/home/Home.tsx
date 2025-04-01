import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import stylesHome from './StylesHome';
import {Filtro} from "../../components/Filtro";
import ButtonAddEvento from "../../components/ButtonAddEvento";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {Calendar, DateData} from "react-native-calendars";
import CardEvento from "../../components/CardEvento";


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
                        fecha={"01/04/2025"}
                        tipoEvento={"Evento"}
                        ubicacion={"Madrid"}
                        userImage={require("../../../../assets/user.png")}
                        usuario={"Usuario"}
                        onPressAsistencias={() => {
                            navigation.navigate("AsistenciaView")
                        }}
                    />
                </TouchableOpacity>
            </View>
            <ButtonAddEvento onPress={()=>{navigation.navigate("CreateEvent")}}/>
        </View>
    )
}

export default Home;