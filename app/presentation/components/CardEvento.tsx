import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import {AppColors} from "../theme/AppTheme";

const CardEvento = () => {
    return(
        <View style={styles.containerCardEvento}>
            <View style={styles.containerInfo}>
                <Text style={styles.tituloEvento}>Review title</Text>
                <Text style={styles.textInfo}>27/03/2025</Text>
            </View>
            <View style={styles.containerInfo}>
                <Text style={styles.textInfo}>Deportivo</Text>
                <Text style={styles.textInfo}>Madrid, España</Text>
            </View>
            <View style={styles.containerUser}>
                <Image
                    source={require('../../../assets/user.png')}
                    style={styles.userImage}
                />
                <Text style={styles.nombreUser}>Usuario</Text>
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
        margin: 5,
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
    }
})

export default CardEvento;