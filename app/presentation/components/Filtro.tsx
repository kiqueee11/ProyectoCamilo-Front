import React from "react";
import {StyleSheet, TextInput, View, Image} from "react-native";
import {AppColors} from "../theme/AppTheme";

export const Filtro = () => {
    return(
        <View style={styles.containerFilter}>
            <TextInput style={styles.filter} placeholder={""}></TextInput>
            <Image source={require("../../../assets/lupa.png")} style={styles.lupa}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    containerFilter:{
        width: "100%",
    },
    filter:{
        width: "auto",
        borderRadius: 25,
        height:50,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        paddingHorizontal:55,
        borderColor: AppColors.borderColor,
        borderWidth: 1,
    },
    lupa:{
        position: "absolute",
        left: 22,
        top: 31,
        width: 20,
        height: 30,
        resizeMode: "contain"
    },
})