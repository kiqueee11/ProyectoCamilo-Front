import React from "react";
import {Text, TouchableOpacity, StyleSheet} from "react-native";
import {AppColors} from "../theme/AppTheme";

interface Props{
    onPress: () => void,
    text: string
}

export const CustomButton = ({text, onPress}: Props) => {
    return (
        <TouchableOpacity
            onPress={() => onPress()}
            style={styles.boton}>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    boton: {
        backgroundColor: AppColors.primary,
        padding: 15,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        elevation: 2
    },
})