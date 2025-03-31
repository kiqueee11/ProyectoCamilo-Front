import React from "react";
import {TouchableOpacity, Image} from "react-native";

interface Props{
    onPress: () => void,
}

export const BackButton = ({ onPress }: Props) => {
   return(
       <TouchableOpacity onPress={onPress}>
           <Image source={require('../../../../assets/back.png')} />
       </TouchableOpacity>
   )
}