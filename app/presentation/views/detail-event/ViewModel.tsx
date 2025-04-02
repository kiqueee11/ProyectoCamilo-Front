import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamlist } from "../../../../App";
import {DeleteEventUseCase} from "../../../domain/useCases/events/DeleteEventUseCase";

export const DetailEventViewModel = () => {
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamlist>>();

    const handleDeleteEvent = async (event: any) => {
        setLoading(true);
        try {
            await DeleteEventUseCase(event, event.id);
            Alert.alert("Éxito", "Evento eliminado");
            navigation.navigate("Home");
        } catch (error) {
            Alert.alert("Error", "Hubo un problema al eliminar el evento");
        }
        setLoading(false);
    };

    return {
        loading,
        handleDeleteEvent,
    };
};
