import React from "react";
import {Image, Text, View} from "react-native";
import {styles} from "../../views/detail-event/StylesDetailEvent";

interface Props{
    date: string;
}

export const EventDate = ({ date }: Props) => {
    return(
        <View style={[styles.containerInfo, {marginTop: 15}]}>
            <Text style={[styles.text, {marginRight: 5}]}>{date}</Text>
            <Image source={require('../../../../assets/calendario.png')} style={styles.imageIcons}/>
        </View>
    )
};