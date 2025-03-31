import React from 'react';
import {styles} from "../../views/detail-event/StylesDetailEvent";
import {View, Image, TouchableOpacity} from "react-native";


export const ActionButtons = () => {
    return(
        <View style={styles.containerInfo}>
            <TouchableOpacity>
                <Image source={require('../../../../assets/borrar.png')} style={styles.imageIcons} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../../../../assets/editar.png')} style={styles.imageIcons} />
            </TouchableOpacity>
        </View>
    )
}