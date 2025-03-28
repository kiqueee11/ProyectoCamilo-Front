import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import stylesHome from './StylesHome';
import {Filtro} from "../../components/Filtro";
import CardEvento from "../../components/CardEvento";
import ButtonAddEvento from "../../components/ButtonAddEvento";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamlist} from "../../../../App";
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
                    <CardEvento />
                </TouchableOpacity>
            </View>
            <ButtonAddEvento/>
        </View>
    )
}

export default Home;