import React from 'react';
import {styles} from "../../views/detail-event/StylesDetailEvent";
import {View, Image, TouchableOpacity} from "react-native";

interface Props{
    onPressBorrar:() => void,
    onPressEditar: () => void
}

export const ActionButtons = ({onPressBorrar, onPressEditar}: Props) => {
    return(
        <View style={styles.containerInfo}>
            <TouchableOpacity onPress={onPressBorrar}>
                <Image source={require('../../../../assets/borrar.png')} style={styles.imageIcons} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressEditar}>
                <Image source={require('../../../../assets/editar.png')} style={styles.imageIcons} />
            </TouchableOpacity>
        </View>
    )
}