import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, useWindowDimensions, View} from "react-native";
import stylesHome from './StylesHome';
import {Filtro} from "../../components/Filtro";
import ButtonAddEvento from "../../components/ButtonAddEvento";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {Calendar, DateData} from "react-native-calendars";
import CardEvento from "../../components/CardEvento";
import {EventViewModel} from "./ViewModel";
import {EventInterface} from "../../../domain/entities/Event";
import {RenderEvent} from "./ItemEvent";


const Home = ({navigation}:PropsStackNavigation) => {
    const today = new Date().toISOString().split('T')[0];
    const [selectedDate, setSelectedDate] = useState(today);
    const {events, getEventsByDate} = EventViewModel("2025-03-31");
    const { height } = useWindowDimensions();

    useEffect(() => {
        getEventsByDate(selectedDate);
    }, [selectedDate]);

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
            <View style={stylesHome.containerEvent}>
                <FlatList
                    data={events}
                    renderItem={({item}: {item: EventInterface}) => <RenderEvent item={item}/>}
                    keyExtractor={(item) => item.id.toString()}
                    initialNumToRender={10} // los que se renderizan recién se abre la app
                    windowSize={10}
                    style={{maxHeight: height * 0.4}}
                    ListFooterComponent={<View style={{ paddingVertical: 10 }}><Text style={{ textAlign: 'center' }}>no hay más elementos</Text></View>}
                />
            </View>
            <ButtonAddEvento onPress={()=>{navigation.navigate("CreateEvent")}}/>
        </View>
    )
}

export default Home;