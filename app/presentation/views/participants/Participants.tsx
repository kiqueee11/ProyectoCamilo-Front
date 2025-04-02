import React, {useEffect, useState} from 'react';
import {Text, View, Image, FlatList, Pressable} from "react-native";
import stylesParticipants from "./StylesParticipants";
import {Filtro} from "../../components/Filtro";
import {ParticipantItem} from "../../components/partipants/ParticipantItem";
import {ParticipantViewModel} from "./ViewModel";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {RouteProp, useRoute} from "@react-navigation/native";
import {RootStackParamlist} from "../../../../App";
import {AddParticipantModal} from "../../components/partipants/ModalAddParticipant";
import {viewModel} from "../attendance/ViewModel";


const Participants = ({navigation}: PropsStackNavigation) => {
    const {
        participants,
        errorMessage,
        getParticipantsList,
        deleteParticipant,
        addParticipant,
        slug
    } = ParticipantViewModel()
    const [addPressed, setAddPressed] = useState(false);

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

    const handleAdd = async (email:string) => {
        try {
            console.log("Intentando añadir participante con email:", email);
            console.log("Slug del evento:", slug);
            await addParticipant(email, slug);
            getParticipantsList(slug);
        } catch (error) {
            console.error("Error al añadir participante:", error);
        }
    };

    const confirmAdd = (email: string) => {
        console.log("correo en el hijo - add:", email);
        handleAdd(email);
        setAddPressed(false);
    };



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
                        <ParticipantItem participant={item} onDelete={handleDelete} onAdd={handleAdd}></ParticipantItem>}/>

            </View>
            </View>
            <View >
                <Pressable style={stylesParticipants.textBotonAdd} onPress={() =>{setAddPressed(!addPressed)}}>
                    <Text style={stylesParticipants.textBotonAddText}>Añadir participante</Text>
                </Pressable>
                {addPressed ? (
                    <AddParticipantModal
                        onClose={() => setAddPressed(false)}
                        onAdd={(email) => {
                            confirmAdd(email);
                        }}
                    />
                ) : null}

            </View>
        </View>
    )
}

export default Participants;