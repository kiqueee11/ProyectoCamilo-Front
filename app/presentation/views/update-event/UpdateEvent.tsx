import { PropsStackNavigation } from "../../interfaces/StackNav";
import { Text, View,TouchableOpacity } from "react-native";
import FormInput from "../../components/FormInput";
import React, { useState } from "react";
import { RoundedButton } from "../../components/RoundedButton";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { EventRepositoryImpl } from "../../../data/repositories/EventRepository";
import styles from "../create-event/StylesCreateEvent";
import {BackButton} from "../../components/detail-event/BackButton";
import {RouteProp, useRoute} from "@react-navigation/native";
import {RootStackParamlist} from "../../../../App";
import Toast from "react-native-toast-message";
type UpdateEventRouteProp = RouteProp<RootStackParamlist, "UpdateEvent">;
const UpdateEvent = ({ navigation}: PropsStackNavigation) => {
    const eventRepository = new EventRepositoryImpl();
    const route = useRoute<UpdateEventRouteProp>();
    const { event } = route.params; // Recibimos el evento desde la navegación

    const [fdate, setDate] = useState(new Date(event.date));
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [title, setTitle] = useState(event.title);
    const [description, setDescription] = useState(event.description);
    const [location, setLocation] = useState(event.location);
    const [type, setType] = useState(event.type);

    const formattedDate = new Intl.DateTimeFormat('es-ES', { dateStyle: 'long' }).format(fdate);
    const formattedTime = new Intl.DateTimeFormat('es-ES', { timeStyle: 'short' }).format(fdate);

    const handleUpdateEvent = async () => {
        try {
            await eventRepository.updateEvent(
                event.id, // Enviamos el ID del evento
                title,
                description,
                fdate.toISOString().split("T")[0],
                location,
                type
            );
            Toast.show({
                type: "success",
                text1: "Evento actualizado exitosamente",
                position: "bottom",
            })

            setTimeout(() => {
                navigation.replace("Home");
            }, 1000);

        } catch (error) {
            console.error("Error al actualizar el evento:", error);
            Toast.show({
                type: "error",
                text1: "Error al actualizar el evento",
                position: "bottom",
            })
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.back}>
                <BackButton onPress={() => navigation.goBack()} />
            </View>
            <Text style={styles.title}>Editar evento</Text>
            <View style={styles.formContainer}>
                <FormInput
                    image={null}
                    text={"Nombre evento"}
                    placeholder={""}
                    keyboardType="default"
                    secureTextEntry={false}
                    editable={true}
                    value={title}
                    onPressFormInterface={(text) => setTitle(text)}
                />
                <FormInput
                    image={require("../../../../assets/icono-texto.png")}
                    text={"Descripción evento"}
                    placeholder={""}
                    keyboardType="default"
                    secureTextEntry={false}
                    editable={true}
                    value={description}
                    onPressFormInterface={(text) => setDescription(text)}
                />
                <FormInput
                    image={require("../../../../assets/icono-ubicacion.png")}
                    text={"Ubicación"}
                    placeholder={""}
                    keyboardType="default"
                    secureTextEntry={false}
                    editable={true}
                    value={location}
                    onPressFormInterface={(text) => setLocation(text)}
                />
                <TouchableOpacity onPress={() => setDatePickerVisibility(true)}>
                    <FormInput
                        image={require("../../../../assets/icono-calendario.png")}
                        text={"Fecha"}
                        placeholder={`${formattedDate} - ${formattedTime}`}
                        keyboardType="default"
                        secureTextEntry={false}
                        editable={false}
                        value={null}
                        onPressFormInterface={(text) => null}
                    />
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="datetime"
                    is24Hour={true}
                    onConfirm={(selectedDate) => {
                        setDatePickerVisibility(false);
                        setDate(selectedDate);
                    }}
                    onCancel={() => setDatePickerVisibility(false)}
                />
                <FormInput
                    image={require("../../../../assets/icono-tipoevento.png")}
                    text={"Tipo de evento"}
                    placeholder={""}
                    keyboardType="default"
                    secureTextEntry={false}
                    editable={true}
                    value={type}
                    onPressFormInterface={(text) => setType(text)}
                />
                <View style={styles.buttonContainer}>
                    <RoundedButton text={"Actualizar evento"} onPressFromInterface={handleUpdateEvent} />
                </View>
            </View>
            <Toast/>
        </View>
    );
};

export default UpdateEvent;
