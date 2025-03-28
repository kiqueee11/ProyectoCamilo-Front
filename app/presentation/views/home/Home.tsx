import React from 'react';
import {Text, View} from "react-native";
import stylesHome from './StylesHome';
import {Filtro} from "../../components/Filtro";
import CardEvento from "../../components/CardEvento";

const Home = () => {
    return(
        <View style={stylesHome.container}>
            <Text style={stylesHome.textPrincipal}>Eventos</Text>
            <View>
                <Filtro/>
            </View>
            <View>
                <CardEvento />
            </View>
        </View>
    )
}

export default Home;