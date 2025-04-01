import React from "react";
import {Image, Text, View} from "react-native";
import {styles} from "../../views/detail-event/StylesDetailEvent";

interface Props{
    username: string,
    imageUser: any
}

export const UserInfo = ({ username, imageUser }: Props) => {
    return(
        <View style={styles.containerInfo}>
            <Image source={imageUser} style={styles.imageUser}/>
            <Text style={styles.textUsuario}>{username}</Text>
        </View>
    )
};