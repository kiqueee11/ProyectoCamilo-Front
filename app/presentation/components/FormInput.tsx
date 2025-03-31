import {Image, KeyboardType, TextInput, View, StyleSheet, Text} from "react-native";
import React from "react";


interface Props {
    placeholder: string;
    keyboardType: KeyboardType;
    secureTextEntry: boolean;
    text: string;
    image: any;
   // onPressFormInterface: (text: string) => void;
}

const FormInput = ({image,text, placeholder, keyboardType, secureTextEntry}: Props) => {

    return (
        <View style={styles.formInputContainer}>
            <Text style={styles.textInput}>{text}</Text>

            <TextInput style={styles.input}
                       placeholder={placeholder}
                       secureTextEntry={secureTextEntry}
                       keyboardType={keyboardType}
            ></TextInput>
            <Image style={styles.formImageInput} source={image}/>
        </View>


    );
}

    const styles = StyleSheet.create({
       formInputContainer:{
        flexDirection:"column",
           width:"100%",


       },


        textInput: {
            width:"100%",
            margin: "auto",
            marginBottom: 7,
        },
        formImageInput: {
            width: 25,
            height: 25,
            position: "absolute",
            alignSelf: "flex-end",
            top:"45%",
            right:"5%",

        },
        input: {
            width: "100%",
            backgroundColor: "white",
            marginBottom: 13,
            paddingHorizontal: 10,
            borderRadius: 80,
            borderColor: "grey",
            borderWidth: 1,
            height: 40,
            elevation: 4,
        },
})
export default FormInput;