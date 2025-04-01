import React, {useEffect} from 'react';
import {Text, View, Image, FlatList} from "react-native";
import stylesParticipants from "./StylesParticipants";
import {Filtro} from "../../components/Filtro";
<<<<<<< HEAD
=======
import {ParticipantItem} from "../../components/partipants/ParticipantItem";
>>>>>>> origin/grupo-1
import {ParticipantViewModel} from "./ViewModel";
import { ParticipantItem } from '../../components/partipants/ParticipantItem';




const Participants = () => {

    const {participants, errorMessage, getParticipantsList} = ParticipantViewModel()

<<<<<<< HEAD
    useEffect(() =>{
        if (errorMessage != ""){
            alert(errorMessage)
        }
    },[errorMessage])

    useEffect(() => {
        getParticipantsList("kxKVtDiqnrSc-WEct3lmGQ")

=======
    const {participant, getParticipantByEmail} = ParticipantViewModel("5Ya-tSzODho5GHgknmvezw\n");

    useEffect(() => {
        getParticipantByEmail("5Ya-tSzODho5GHgknmvezw\n")
>>>>>>> origin/grupo-1
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

                        data={participants}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        initialNumToRender={10}
                        renderItem={({item})=>
                        <ParticipantItem participant={item}></ParticipantItem>}/>

            </View>
            </View>
        </View>
    )
}

export default Participants;