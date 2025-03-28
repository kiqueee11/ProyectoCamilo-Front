import React from 'react';
import {Text, View, Image} from "react-native";
import stylesParticipants from "./StylesParticipants";
import {Filtro} from "../../components/Filtro";
import {ParticipantContainer} from "../../components/ParticipantContainer";

const Participants = () => {
    return(
        <View style={stylesParticipants.container}>
        <View style={stylesParticipants.topSection}>
            <Image source={require("../../../../assets/back.png")} style={stylesParticipants.icon}/>
            <View style={stylesParticipants.containerText}>
            <Text style={stylesParticipants.textPrincipal}>Participantes</Text>
            </View>
        </View>
            <View>
                <Filtro/>
                <View style={stylesParticipants.participantContainer}>
                <ParticipantContainer/>
            </View>
            </View>
        </View>
    )
}

export default Participants;