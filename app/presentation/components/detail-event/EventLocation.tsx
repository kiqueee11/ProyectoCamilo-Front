import React from "react";
import {Image, Text, View} from "react-native";
import {styles} from "../../views/detail-event/StylesDetailEvent";

interface Props{
    location: string
}

export const EventLocation = ({ location }: Props) => {
   return(
       <View style={[styles.containerInfo, {marginTop: 15}]}>
           <Image source={require('../../../../assets/ubicacion.png')} style={styles.imageIcons}/>
           <Text style={styles.text}>{location}</Text>
       </View>
   )
};