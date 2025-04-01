import React, {useEffect} from 'react';
import {Text, View, Image, FlatList, Pressable} from "react-native";
import stylesParticipants from "./StylesParticipants";
import {Filtro} from "../../components/Filtro";
import {ParticipantItem} from "../../components/partipants/ParticipantItem";
import {ParticipantViewModel} from "./ViewModel";
import {PropsStackNavigation} from "../../interfaces/StackNav";


const Participants = ({navigation}: PropsStackNavigation) => {

    const {participants, errorMessage, getParticipantsList} = ParticipantViewModel()

    useEffect(() =>{
        if (errorMessage != ""){
            alert(errorMessage)
        }
    },[errorMessage])

    useEffect(() => {
        getParticipantsList("kxKVtDiqnrSc-WEct3lmGQ")
    },[])

    return(
        <View style={stylesParticipants.container}>
        <View style={stylesParticipants.topSection}>
            <Pressable onPress={() => navigation.goBack()}>
                <Image source={require("../../../../assets/back.png")} style={stylesParticipants.icon}/>
            </Pressable>
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