import {PropsStackNavigation} from "../../interfaces/StackNav";
import {View, Text, Button, Image} from "react-native";
import styles from "./StylesLogin";
import React from "react";
import FormInput from "../../components/FormInput";
import {RoundedButton} from "../../components/RoundedButton";

export function LoginScreen({navigation, route}: PropsStackNavigation) {



return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image
                style={styles.logo}
                source={require('../../../../assets/logo-app-eventos.png')}
            ></Image>
        </View>
        <Text style={styles.title}>¡Bienvenido! </Text>
        <Text style={styles.subTitle}>Inicia sesión con tu cuenta</Text>

        <View style={styles.formContainer}>

            <FormInput
                text={"Correo eletrónico"}
                placeholder={""}
                keyboardType="email-address"
                secureTextEntry={false}
                //onPressFormInterface={(text) => onChangeLogin('email', text)}
            ></FormInput>
            <FormInput
                text={"Contraseña"}
                placeholder={""}
                keyboardType="default"
                secureTextEntry={true}
                //onPressFormInterface={(text) => onChangeLogin('password', text)}
            ></FormInput>
            <View style={styles.buttonContainer}>
                <RoundedButton text={"Entrar"} onPressFromInterface={() => {
                    navigation.replace("Home")
                    //login()
                }}></RoundedButton>
            </View>
        </View>

    </View>
);


}