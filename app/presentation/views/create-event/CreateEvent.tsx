import {PropsStackNavigation} from "../../interfaces/StackNav";
import {Text, View, TouchableOpacity} from "react-native";
import * as yup from 'yup';
import FormInput from "../../components/FormInput";
import React, {useState} from "react";
import styles from "./StylesCreateEvent";
import {RoundedButton} from "../../components/RoundedButton";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { EventRepositoryImpl } from "../../../data/repositories/EventRepository";
import {BackButton} from "../../components/detail-event/BackButton";
import Toast from "react-native-toast-message";


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
        const eventSchema = yup.object().shape({
            title: yup.string().required("Título necesario"),
            description: yup.string().min(5, "La descripción debe contener más caracteres"),
            date: yup.date()
                .required("Fecha obligatoria")
                .min(new Date(), "La fecha debe ser posterior a hoy"),
            location: yup.string().required("Ubicación obligatoria"),
            type: yup.string().max(30, "El tipo debe contener menos caracteres"),
        });
    try {
        const eventData = {
            title: title,
            description: description,
            date: date,
            location: location,
            type: type
        };

        await eventSchema.validate(eventData)
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
        Toast.show({
            type: "success",
            text1: "Evento creado exitosamente",
            position: "bottom",
        })

        setTimeout(() => {
            navigation.replace("Home");
        }, 1000);
    } catch (error) {
        if (error instanceof yup.ValidationError) {
            Toast.show({
                type: "error",
                text1: error instanceof Error ? error.message : "Ocurrió un error inesperado",
                position: "bottom"
            })
        }else {
            console.error("Error al crear el evento:", error);
            if ((error as any)?.response) {
                console.log("Respuesta del servidor:", (error as any).response.data);
            } else if (error instanceof Error) {
                console.log("Error sin respuesta del servidor:", error.message);
            } else {
                console.log("Error desconocido:", error);
            }
            Toast.show({
                type: "error",
                text1: "Error al crear el evento",
                position: "bottom",
            })
        }

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
            <Toast/>
        </View>
    )
}
export default CreateEvent;