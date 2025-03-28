import React from 'react';
import {Text, View, Image, FlatList} from "react-native";
import stylesParticipants from "./StylesParticipants";
import {Filtro} from "../../components/Filtro";
import {ParticipantItem} from "../../components/partipants/ParticipantItem";


const Participants = () => {

    const ListParticipants = [
        "Antonio",
        "Sihao",
        "Emily",
        "Enrique",
        "Axel",
        "Alex",
        "Daniel",
    ]

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
                        data={ListParticipants}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item})=>
                        <ParticipantItem username={item}></ParticipantItem>
                    }/>
            </View>
            </View>
        </View>
    )
}

export default Participants;