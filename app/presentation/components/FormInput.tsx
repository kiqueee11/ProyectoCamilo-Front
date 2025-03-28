import {KeyboardType, TextInput, View, StyleSheet, Text} from "react-native";
import React from "react";


interface Props {
    placeholder: string;
    keyboardType: KeyboardType;
    secureTextEntry: boolean;
    text: string;
   // onPressFormInterface: (text: string) => void;
}

const FormInput = ({text, placeholder, keyboardType, secureTextEntry}: Props) => {

    return (
        <View>
            <Text style={styles.textInput}>{text}</Text>
            <TextInput style={styles.input}
                       placeholder={placeholder}
                       secureTextEntry={secureTextEntry}
                       keyboardType={keyboardType}

            ></TextInput>

        </View>


    );
}

    const styles = StyleSheet.create({
        textInput: {
            width:"95%",
            display:"flex",
            margin: "auto",
            marginBottom: 7,
            elevation: 4,
        },
        input: {
            backgroundColor: "white",
            marginBottom: 13,
            paddingHorizontal: 10,
            borderRadius: 80,
            borderColor: "grey",
            borderWidth: 1,
            height: 40,
            elevation: 40,
        },
})
export default FormInput;