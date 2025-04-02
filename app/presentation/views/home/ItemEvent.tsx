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
    const dateObj = new Date(item.date);
    const formattedDate = new Intl.DateTimeFormat("es-ES", {
        day:  "2-digit",
        month: "2-digit",
        year: "numeric"
    }).format(dateObj);

    return(
        <TouchableOpacity onPress={() => {
            navigation.navigate("DetailEvent", {event: item})
        }}>
            <CardEvento
                titulo={item.title}
                fecha={formattedDate}
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