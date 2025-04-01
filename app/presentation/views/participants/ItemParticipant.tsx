import {TouchableOpacity} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamlist} from "../../../../App";
import {ParticipantInterface} from "../../../domain/entities/Participant";
import {ParticipantItem} from "../../components/partipants/ParticipantItem";

interface Props{
    item: ParticipantInterface;
}

export const RenderParticipant = ({item}: Props) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamlist>>();

    return(
            <ParticipantItem
                name={item.name}
                email={item.email}
                phone={item.phone}
                userImage={require("../../../../assets/user.png")}
            />
    )
}