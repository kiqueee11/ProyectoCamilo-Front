import {PropsStackNavigation} from "../../interfaces/StackNav";
import {View, Text, Button, Image} from "react-native";
import styles from "./StylesLogin";
import React, { useEffect } from "react";
import FormInput from "../../components/FormInput";
import {RoundedButton} from "../../components/RoundedButton";
import {CustomButton} from "../../components/CustomButton";
import { checkUser } from "../../../domain/useCases/auth/CheckUser";

export function LoginScreen({navigation, route}: PropsStackNavigation) {

const [email, setEmail] = React.useState("");
const [password, setPassword] = React.useState("");
const handleCheckUser = (email: string, password: string): void => {
    console.log("Email:", email, "Password:", password);
    checkUser(email, password)
            .then((response) => {
                if (response.length > 0) {
                    navigation.replace("Home")
                } else {
                    alert("Usuario o contraseña incorrectos")
                }
            })
            .catch((error) => {
                console.error("Error al verificar el usuario:", error);
            });    
}

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
                onPressFormInterface={(text) => setEmail(text)}
            ></FormInput>
            <FormInput
                image={null}
                text={"Contraseña"}
                placeholder={""}
                keyboardType="default"
                secureTextEntry={true}
                editable={true}
                onPressFormInterface={(text) => setPassword(text)}
            ></FormInput>
            <View style={styles.buttonContainer}>
                <CustomButton onPress={() => {
                    handleCheckUser(email, password);
                }} text={"Entrar"}/>
            </View>
        </View>

    </View>
);


}