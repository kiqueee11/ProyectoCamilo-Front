import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import stylesHome from './StylesHome';
import {Filtro} from "../../components/Filtro";
import ButtonAddEvento from "../../components/ButtonAddEvento";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {Calendar, DateData} from "react-native-calendars";
import {EventViewModel} from "./ViewModel";
import {EventInterface} from "../../../domain/entities/Event";
import {RenderEvent} from "./ItemEvent";


const Home = ({navigation}:PropsStackNavigation) => {
    const [selectedDate, setSelectedDate] = useState('');
    const {events, getEventsByTitle} = EventViewModel("Prueba");

    useEffect(() => {
        getEventsByTitle("Prueba")
    }, []);

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
                <FlatList
                    data={events}
                    renderItem={({item}: {item: EventInterface}) => <RenderEvent item={item}/>}
                    keyExtractor={(item) => item.id.toString()}
                    initialNumToRender={10} // los que se renderizan recién se abre la app
                    ListFooterComponent={<View style={{ paddingVertical: 10 }}><Text style={{ textAlign: 'center' }}>no hay más elementos</Text></View>}
                />
            </View>
            <ButtonAddEvento onPress={()=>{navigation.navigate("CreateEvent")}}/>
        </View>
    )
}

export default Home;