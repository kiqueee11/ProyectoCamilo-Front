import React, {useEffect, useState} from 'react';
import {Text, View, Image, FlatList} from "react-native";
import stylesParticipants from "./StylesParticipants";
import {Filtro} from "../../components/Filtro";
import {ParticipantItem} from "../../components/partipants/ParticipantItem";
import {ParticipantViewModel} from "./ViewModel";
import {ParticipantInterface} from "../../../domain/entities/Participant";
import {RenderParticipant} from "./ItemParticipant";


const Participants = () => {

    // const ListParticipants = [
    //     "Antonio",
    //     "Sihao",
    //     "Emily",
    //     "Enrique",
    //     "Axel",
    //     "Alex",
    //     "Daniel",
    // ]

    const {participant, getParticipantByEmail} = ParticipantViewModel("Prueba");

    useEffect(() => {
        getParticipantByEmail("Prueba")
    }, []);

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
                    <FlatList
                        data={participant}
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}: {item: ParticipantInterface}) => <RenderParticipant item={item}/>}
                        initialNumToRender={10}
                        ListFooterComponent={<View style={{ paddingVertical: 10 }}><Text style={{ textAlign: 'center' }}>no hay más elementos</Text></View>}
                    />
            </View>
            </View>
        </View>
    )
}

export default Participants;