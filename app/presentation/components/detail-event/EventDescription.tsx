import React from "react";
import {Image, ScrollView, Text, View} from "react-native";
import {styles} from "../../views/detail-event/StylesDetailEvent";

interface Props{
    description: string
}

export const EventDescription = ({ description }:Props) => {
    return(
        <ScrollView style={styles.containerDescripcion}>
            <Text style={styles.descripcion}>{description}</Text>
        </ScrollView>
    )
};