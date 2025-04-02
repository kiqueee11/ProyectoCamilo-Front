import { PropsStackNavigation } from "../../interfaces/StackNav";
import { Text, View, Image, TouchableOpacity } from "react-native";
import FormInput from "../../components/FormInput";
import React, { useEffect, useState } from "react";

import { RoundedButton } from "../../components/RoundedButton";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { EventRepositoryImpl } from "../../../data/repositories/EventRepository";
import styles from "../create-event/StylesCreateEvent";
import {BackButton} from "../../components/detail-event/BackButton";

const UpdateEvent = ({ navigation, route }: PropsStackNavigation) => {
    const eventRepository = new EventRepositoryImpl();
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
            alert("Evento actualizado exitosamente");
            navigation.replace("Home");
        } catch (error) {
            console.error("Error al actualizar el evento:", error);
            alert("Error al actualizar el evento");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.back}>
                <BackButton onPress={() => navigation.navigate("DetailEvent")} />
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
        </View>
    );
};

export default UpdateEvent;
