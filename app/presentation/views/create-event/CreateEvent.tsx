import {PropsStackNavigation} from "../../interfaces/StackNav";
import {Text, View, Image, TouchableOpacity} from "react-native";

import FormInput from "../../components/FormInput";
import React, {useState} from "react";
import styles from "./StylesCreateEvent";
import stylesHome from "../home/StylesHome";
import {RoundedButton} from "../../components/RoundedButton";
import DatePicker from "react-native-date-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const CreateEvent = ({navigation}: PropsStackNavigation) => {

    const [date, setDate] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const formattedDate = new Intl.DateTimeFormat('es-ES', { dateStyle: 'long' }).format(date);
    const formattedTime = new Intl.DateTimeFormat('es-ES', { timeStyle: 'short' }).format(date);

    return (
        <View style={styles.container}>
            <Image style={styles.imagen} source={require("../../../../assets/icono-atras.png")} />
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
                        //onPressFormInterface={(text) => onChangeLogin('email', text)}
                    ></FormInput>
                </View>

                <FormInput
                    image={require("../../../../assets/icono-texto.png")}
                    text={"Descripción evento"}
                    placeholder={""}
                    keyboardType="default"
                    secureTextEntry={false}
                    editable={true}
                    //onPressFormInterface={(text) => onChangeLogin('email', text)}
                ></FormInput>

                    <FormInput
                        image={require("../../../../assets/icono-ubicacion.png")}
                        text={"Ubicación"}
                        placeholder={""}
                        keyboardType="default"
                        secureTextEntry={false}
                        editable={true}
                        //onPressFormInterface={(text) => onChangeLogin('email', text)}
                    ></FormInput>

                <TouchableOpacity onPress={() => setDatePickerVisibility(true)}>
                    <FormInput
                        image={require("../../../../assets/icono-calendario.png")}
                        text={"Fecha"}
                        placeholder={`${formattedDate} - ${formattedTime}`}
                        keyboardType="default"
                        secureTextEntry={false}
                        editable={false}
                        //onPressFormInterface={(text) => onChangeLogin('email', text)}
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
                        //onPressFormInterface={(text) => onChangeLogin('email', text)}
                    ></FormInput>
                <View style={styles.buttonContainer}>
                    <RoundedButton text={"Crear evento"} onPressFromInterface={() => {
                        navigation.replace("LoginScreen")
                        //crearevento()
                    }}></RoundedButton>
                </View>
            </View>
        </View>
    )
}
export default CreateEvent;