import React, {useEffect} from 'react';
import {Text, View, Image, FlatList, Pressable} from "react-native";
import stylesParticipants from "./StylesParticipants";
import {Filtro} from "../../components/Filtro";
import {ParticipantItem} from "../../components/partipants/ParticipantItem";
import {ParticipantViewModel} from "./ViewModel";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {RouteProp, useRoute} from "@react-navigation/native";
import {RootStackParamlist} from "../../../../App";

type ParticipantsRouteProp = RouteProp<RootStackParamlist, 'Participants'>
const Participants = ({navigation}: PropsStackNavigation) => {
    const route = useRoute<ParticipantsRouteProp>();
    const {slug} = route.params;
    const {participants, errorMessage, getParticipantsList, deleteParticipant} = ParticipantViewModel()

    useEffect(() =>{
        if (errorMessage != ""){
            alert(errorMessage)
        }
    },[errorMessage])

    useEffect(() => {
        getParticipantsList(slug)
    },[])

    const handleDelete = async (email:string) => {
        console.log("correo en el padre", email)
        console.log("slug del evento " + slug)
        await deleteParticipant(email,slug)
        getParticipantsList(slug)
    }

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
                        <ParticipantItem participant={item} onDelete={handleDelete}></ParticipantItem>}/>

            </View>
            </View>
        </View>
    )
}

export default Participants;