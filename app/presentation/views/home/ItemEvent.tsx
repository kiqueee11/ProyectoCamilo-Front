import {EventInterface} from "../../../domain/entities/Event";
import CardEvento from "../../components/CardEvento";
import {TouchableOpacity} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamlist} from "../../../../App";

interface Props{
    item: EventInterface;
}

export const RenderEvent = ({item}: Props) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamlist>>();

    return(
        <TouchableOpacity onPress={() => {
            navigation.navigate("DetailEvent")
        }}>
            <CardEvento
                titulo={item.title}
                fecha={item.date}
                tipoEvento={item.type}
                ubicacion={item.location}
                userImage={require("../../../../assets/user.png")}
                usuario={"Usuario"}
                onPressAsistencias={() => {
                    navigation.navigate("AsistenciaView")
                }}
            />
        </TouchableOpacity>
    )
}