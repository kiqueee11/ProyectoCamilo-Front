import {PropsStackNavigation} from "../../interfaces/StackNav";
import {View, Text, Button, Image} from "react-native";
import styles from "./StylesLogin";
import React from "react";
import FormInput from "../../components/FormInput";
import {RoundedButton} from "../../components/RoundedButton";
import {CustomButton} from "../../components/CustomButton";

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
                image={null}
                text={"Correo eletrónico"}
                placeholder={""}
                keyboardType="email-address"
                secureTextEntry={false}
                editable={true}
                onPressFormInterface={() => {}}
            ></FormInput>
            <FormInput
                image={null}
                text={"Contraseña"}
                placeholder={""}
                keyboardType="default"
                secureTextEntry={true}
                editable={true}
                onPressFormInterface={() => {}}
            ></FormInput>
            <View style={styles.buttonContainer}>
                <CustomButton onPress={() => {
                    navigation.replace("Home")
                    //login()
                }} text={"Entrar"}/>
            </View>
        </View>

    </View>
);


}