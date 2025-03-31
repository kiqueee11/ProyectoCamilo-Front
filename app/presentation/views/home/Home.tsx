import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import stylesHome from './StylesHome';
import {Filtro} from "../../components/Filtro";
import CardEvento from "../../components/CardEvento";
import ButtonAddEvento from "../../components/ButtonAddEvento";
import {PropsStackNavigation} from "../../interfaces/StackNav";

const Home = ({navigation}:PropsStackNavigation) => {
    return(
        <View style={stylesHome.container}>
            <Text style={stylesHome.textPrincipal}>Eventos</Text>
            <View>
                <Filtro/>
            </View>
            <View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("DetailEvent")
                }}>
                    <CardEvento
                        titulo={"Review title"}
                        fecha={"28/03/2025"}
                        tipoEvento={"Evento"}
                        ubicacion={"Madrid, España"}
                        userImage={require("../../../../assets/user.png")}
                        usuario={"Usuario"}
                    />
                </TouchableOpacity>
            </View>
            <ButtonAddEvento onPress={() => {

            }}/>
        </View>
    )
}

export default Home;