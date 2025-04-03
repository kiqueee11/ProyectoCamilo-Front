import React, {useState, useCallback, useEffect} from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import viewModel, {attendanceViewModel} from './AttendanceViewModel';
import stylesAsistencia from "./StylesAttendances";
import {RouteProp, useRoute} from "@react-navigation/native";
import {RootStackParamlist} from "../../../../App";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {getEventAttendancesStatsUseCase} from "../../../domain/useCases/attendances/GetEventStats";

type DetailEventRouteProp = RouteProp<RootStackParamlist, 'DetailEvent'>

const AttendanceScreen = ({navigation}: PropsStackNavigation) => {
    const routeEvent = useRoute<DetailEventRouteProp>();
    const {event} = routeEvent.params;
    const {
        attenders,
        loadAttenders,
        eventStats,
        getEventAttendanceStats
    }= attendanceViewModel()

    useEffect(() => {
        loadAttenders(event.slug);
        getEventAttendanceStats(event.slug);
    }, []);

    const handleShowParticipant = async (id: number) => {
        try{
            console.log("Participante con id:", id);
            console.log("Slug del evento actual:", "EGW5NRthVusIuhHPX-bWsA");
        } catch (e) {
            console.error( "Error al mostrar el participante: " ,e);
        }
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleString("es-ES", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
            // hour: "2-digit",
            // minute: "2-digit",
            // hour12: false
        });
    };


    return (
        <View style={stylesAsistencia.container}>
            <Text style={stylesAsistencia.titulo}> Asistencias </Text>
            <View style={stylesAsistencia.formContainer}>
                <Text style={stylesAsistencia.text}>{event.title} </Text>

                <Text style={stylesAsistencia.textDetails}>{formatDate(event.date)}</Text>
                <Text style={stylesAsistencia.textDetails}>{event.location}</Text>

                <Text style={stylesAsistencia.textEvent}>Registrados: {eventStats?.registered} , No asisten: {eventStats?.missing} , Asistentes: {eventStats?.attenders} </Text>

                <FlatList
                    data={attenders}
                    keyExtractor={(item) => item.id.toString()}
                    style={stylesAsistencia.contentContainer}
                    renderItem={({ item }) => (
                        <View style={stylesAsistencia.listItems}>
                            <Text style={stylesAsistencia.listText}>✔️  {item.user.name}   </Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}

export default AttendanceScreen;


