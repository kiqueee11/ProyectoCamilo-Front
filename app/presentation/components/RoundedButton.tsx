import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";



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
            <Text style={styles.buttonFormText}>{text}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    buttonForm: {
        backgroundColor: "grey",
        borderRadius: 100,
        width: "100%",
        height: "30%",
        elevation: 40,
    },
    buttonFormText: {
        color: "#000000",
        textAlign: "center",
        fontSize: 25,
    },
})
