import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {AppColors} from "../theme/AppTheme";



interface Props {
    text: string,
    onPressFromInterface: () => void,
}

export const RoundedButton = ({text, onPressFromInterface}: Props) => {
    return (
        <TouchableOpacity
            style={styles.buttonForm}
            onPress={() => onPressFromInterface()}
        >
            <Text>{text}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    buttonForm: {
        backgroundColor: AppColors.primary,
        padding: 15,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        elevation: 2
    },
})
