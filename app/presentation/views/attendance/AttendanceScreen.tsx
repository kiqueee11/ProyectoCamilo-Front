import React, {useState, useCallback, useEffect} from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import viewModel from './AttendanceViewModel';
import stylesAsistencia from "./StylesAttendances";
import {RouteProp, useRoute} from "@react-navigation/native";
import {RootStackParamlist} from "../../../../App";
import {PropsStackNavigation} from "../../interfaces/StackNav";

type DetailEventRouteProp = RouteProp<RootStackParamlist, 'DetailEvent'>

const AttendanceScreen = ({navigation}: PropsStackNavigation) => {
    const routeEvent = useRoute<DetailEventRouteProp>();
    const {event} = routeEvent.params;
    const {
        attenders,
        loadAttenders,
    }= viewModel.attendanceViewModel()

    useEffect(() => {
        loadAttenders(event.slug);
    }, []);

    const handleShowParticipant = async (id: number) => {
        try{
            console.log("Participante con id:", id);
            console.log("Slug del evento actual:", "EGW5NRthVusIuhHPX-bWsA");
        } catch (e) {
            console.error( "Error al mostrar el participante: " ,e);
        }
    }

    return (
        <View style={stylesAsistencia.container}>
            <Text style={stylesAsistencia.titulo}>Asistencias</Text>
            <View style={stylesAsistencia.formContainer}>
                <Text style={stylesAsistencia.text}> {event.title} </Text>
                <Text style={stylesAsistencia.textDetails}>{event.date}</Text>
                <Text style={stylesAsistencia.textDetails}>{event.location}</Text>
                <Text style={stylesAsistencia.textEvent}>Registrados: </Text>
                <Text style={stylesAsistencia.textEvent}>No asisten:</Text>
                <Text style={stylesAsistencia.textEvent}>Asistentes:</Text>
                <FlatList
                    data={attenders}
                    keyExtractor={(item) => item.id.toString()}
                    style={stylesAsistencia.contentContainer}
                    renderItem={({ item }) => (
                        <View style={stylesAsistencia.listItems}>
                            <Text style={stylesAsistencia.listText}>{item.user.name}</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}

export default AttendanceScreen;


