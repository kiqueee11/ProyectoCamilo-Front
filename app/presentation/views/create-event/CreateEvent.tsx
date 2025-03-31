import {PropsStackNavigation} from "../../interfaces/StackNav";
import {Text, View, Image} from "react-native";

import FormInput from "../../components/FormInput";
import React from "react";
import styles from "./StylesCreateEvent";
import stylesHome from "../home/StylesHome";
import {RoundedButton} from "../../components/RoundedButton";


const CreateEvent = ({navigation}: PropsStackNavigation) => {

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
                        //onPressFormInterface={(text) => onChangeLogin('email', text)}
                    ></FormInput>
                </View>

                <FormInput
                    image={require("../../../../assets/icono-texto.png")}
                    text={"Descripción evento"}
                    placeholder={""}
                    keyboardType="default"
                    secureTextEntry={false}
                    //onPressFormInterface={(text) => onChangeLogin('email', text)}
                ></FormInput>

                    <FormInput
                        image={require("../../../../assets/icono-ubicacion.png")}
                        text={"Ubicación"}
                        placeholder={""}
                        keyboardType="default"
                        secureTextEntry={false}
                        //onPressFormInterface={(text) => onChangeLogin('email', text)}
                    ></FormInput>

                    <FormInput
                        image={require("../../../../assets/icono-calendario.png")}
                        text={"Fecha"}
                        placeholder={""}
                        keyboardType="default"
                        secureTextEntry={false}
                        //onPressFormInterface={(text) => onChangeLogin('email', text)}
                    ></FormInput>

                    <FormInput
                        image={require("../../../../assets/icono-tipoevento.png")}
                        text={"Tipo de evento"}
                        placeholder={""}
                        keyboardType="default"
                        secureTextEntry={false}
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