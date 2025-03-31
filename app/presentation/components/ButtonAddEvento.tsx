import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppColors} from "../theme/AppTheme";

interface Props {
    onPress: () => void,
}

const ButtonAddEvento = ({onPress}:Props) => {
    return(
        <TouchableOpacity onPress={() => onPress()} style={styles.button}>
            <Text style={styles.add}>+</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        backgroundColor: AppColors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        position: 'absolute',
        bottom: 25,
        right: 25,
        elevation: 4,
    },
    add: {
        fontSize: 30,
        textAlign: 'center',
    }
});


export default ButtonAddEvento;