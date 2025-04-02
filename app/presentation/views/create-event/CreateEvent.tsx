import {PropsStackNavigation} from "../../interfaces/StackNav";
import {Text, View, Image, TouchableOpacity} from "react-native";

import FormInput from "../../components/FormInput";
import React, {useState} from "react";
import styles from "./StylesCreateEvent";
import stylesHome from "../home/StylesHome";
import {RoundedButton} from "../../components/RoundedButton";
import DatePicker from "react-native-date-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { EventRepositoryImpl } from "../../../data/repositories/EventRepository";
import {BackButton} from "../../components/detail-event/BackButton";


const CreateEvent = ({navigation}: PropsStackNavigation) => {

    const [fdate, setDate] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const date = new Intl.DateTimeFormat('es-ES', { dateStyle: 'long' }).format(fdate);
    const formattedTime = new Intl.DateTimeFormat('es-ES', { timeStyle: 'short' }).format(fdate);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [type, setType] = useState("");
    const [host, setHost] = useState("yourself");
    const handleCreateEvent = async () => {
    const eventRepository = new EventRepositoryImpl();
    const date = fdate.toISOString().split("T")[0];
    console.log("Datos enviados al backend:", {
        title,
        description,
        date,
        location,
        type,
    });
    try {
        const response = await eventRepository.createEvent(
            title,
            description,
            date,
            location,
            type
        );
    
        // Verifica si la respuesta es JSON
        if (typeof response === "string") {
            console.log("Respuesta en texto plano:", response);
        } else {
            console.log("Respuesta JSON:", response);
        }
    
        alert("Evento creado exitosamente");
        navigation.replace("Home");
    } catch (error) {
        console.error("Error al crear el evento:", error);
        if ((error as any)?.response) {
            console.log("Respuesta del servidor:", (error as any).response.data);
        } else if (error instanceof Error) {
            console.log("Error sin respuesta del servidor:", error.message);
        } else {
            console.log("Error desconocido:", error);
        }
        alert("Error al crear el evento");
    }
};

    return (
        <View style={styles.container}>
            <View style={styles.back}>
                <BackButton onPress={() => navigation.navigate("Home")} />
            </View>
            <Text style={styles.title}>Creación del evento</Text>
            <View style={styles.formContainer}>
                <View>
                    <FormInput
                        image={null}
                        text={"Nombre evento"}
                        placeholder={""}
                        keyboardType="default"
                        secureTextEntry={false}
                        editable={true}
                        value={null}
                        onPressFormInterface={(text) => setTitle(text)}
                    ></FormInput>
                </View>

                <FormInput
                    image={require("../../../../assets/icono-texto.png")}
                    text={"Descripción evento"}
                    placeholder={""}
                    keyboardType="default"
                    secureTextEntry={false}
                    editable={true}
                    value={null}
                    onPressFormInterface={(text) => setDescription(text)}
                ></FormInput>

                    <FormInput
                        image={require("../../../../assets/icono-ubicacion.png")}
                        text={"Ubicación"}
                        placeholder={""}
                        keyboardType="default"
                        secureTextEntry={false}
                        editable={true}

                        value={null}
                        onPressFormInterface={(text) => setLocation(text)}
                    ></FormInput>

                <TouchableOpacity onPress={() => setDatePickerVisibility(true)}>
                    <FormInput
                        image={require("../../../../assets/icono-calendario.png")}
                        text={"Fecha"}
                        placeholder={`${date} - ${formattedTime}`}
                        keyboardType="default"
                        secureTextEntry={false}
                        editable={false}
                        value={null}
                        onPressFormInterface={(text) => null}
                    ></FormInput>
                </TouchableOpacity>
                    {/* Picker Modal */}
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

                        value={null}
                        onPressFormInterface={(text) => setType(text)}
                    ></FormInput>
                <View style={styles.buttonContainer}>
                    <RoundedButton text={"Crear evento"} onPressFromInterface={() => {
                        handleCreateEvent();
                        //crearevento()
                    }}></RoundedButton>
                </View>
            </View>
        </View>
    )
}
export default CreateEvent;