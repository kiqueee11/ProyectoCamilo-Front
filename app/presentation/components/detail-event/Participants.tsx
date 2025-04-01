import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {styles} from "../../views/detail-event/StylesDetailEvent";

interface Props{
    imageUser1: any,
    imageUser2: any,
    onPress: () => void
}

export const Participants = ({imageUser1, imageUser2, onPress}: Props) => {
    return(
        <View style={styles.containerParticipantes}>
            <Image source={imageUser1} style={styles.imageUser1}/>
            <Image source={imageUser2} style={styles.imageUser2}/>
            <TouchableOpacity style={styles.botonAdd} onPress={onPress}>
                <Text style={styles.textBotonAdd}>+</Text>
            </TouchableOpacity>
        </View>
    )
};