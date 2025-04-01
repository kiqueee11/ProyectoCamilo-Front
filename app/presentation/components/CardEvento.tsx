import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import {AppColors} from "../theme/AppTheme";

interface Props{
    titulo: string,
    fecha: string,
    tipoEvento: string,
    ubicacion: string,
    userImage: any,
    usuario: string,
    onPressAsistencias: () => void
}

const CardEvento = ({titulo, fecha, tipoEvento, ubicacion, userImage, usuario, onPressAsistencias}: Props) => {
    return(
        <View style={styles.containerCardEvento}>
            <View style={styles.containerInfo}>
                <Text style={styles.tituloEvento}>{titulo}</Text>
                <Text style={styles.textInfo}>{fecha}</Text>
            </View>
            <View style={styles.containerInfo}>
                <Text style={styles.textInfo}>{tipoEvento}</Text>
                <Text style={styles.textInfo}>{ubicacion}</Text>
            </View>
            <View style={styles.containerUser}>
                <Image
                    source={userImage}
                    style={styles.userImage}
                />
                <Text style={styles.nombreUser}>{usuario}</Text>
            </View>
            <View style={styles.containerAsistencias}>
                <Text onPress={onPressAsistencias} style={styles.botonAsistencias}>Ver asistencias</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerCardEvento:{
        width: "100%",
        borderRadius: 30,
        borderWidth: 1,
        borderColor: AppColors.borderColor,
        backgroundColor: AppColors.backgroundColor,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginVertical: 10,
        elevation: 3,
    },
    containerInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5
    },
    tituloEvento:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    textInfo:{
        fontSize: 16,
        fontWeight: 'light',
    },
    containerUser:{
        marginTop: 13,
        marginHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    userImage:{
        width: 40,
        height: 40
    },
    nombreUser:{
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 10
    },
    containerAsistencias:{
        marginHorizontal: 5,
        marginTop: 10,
    },
    botonAsistencias:{
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }
})

export default CardEvento;