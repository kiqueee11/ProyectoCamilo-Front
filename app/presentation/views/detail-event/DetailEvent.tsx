import React from "react";
import {Text, View} from "react-native";
import { styles } from "./StylesDetailEvent";
import {CustomButton} from "../../components/CustomButton";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {BackButton} from "../../components/detail-event/BackButton";
import {UserInfo} from "../../components/detail-event/UserInfo";
import {ActionButtons} from "../../components/detail-event/ActionButtons";
import {EventDate} from "../../components/detail-event/EventDate";
import {EventLocation} from "../../components/detail-event/EventLocation";
import {Participants} from "../../components/detail-event/Participants";
import {EventDescription} from "../../components/detail-event/EventDescription";
import {RouteProp, useRoute} from "@react-navigation/native";
import {RootStackParamlist} from "../../../../App";

type DetailEventRouteProp = RouteProp<RootStackParamlist, 'DetailEvent'>

const DetailEvent = ({navigation}: PropsStackNavigation) => {
    const route = useRoute<DetailEventRouteProp>();
    const {event} = route.params;

    return(
        <View style={styles.container}>
            <View style={styles.back}>
                <BackButton onPress={() => {navigation.navigate('Home')}}/>
            </View>
            <View style={styles.containerDetailEvent}>
                <View style={styles.containerTop}>
                    <UserInfo username={"Usuario"} imageUser={require('../../../../assets/user.png')}/>
                    <ActionButtons onPressBorrar={() => {}} onPressEditar={() => {}}/>
                </View>
                <View>
                    <Text style={styles.textTitulo}>{event.title}</Text>
                </View>
                <View style={styles.containerTop}>
                    <EventDate date={event.date}/>
                    <EventLocation location={event.location}/>
                </View>
                <View style={styles.containerTop}>
                    <View>
                        <Text style={styles.text}>{event.type}</Text>
                    </View>
                    <Participants imageUser1={require('../../../../assets/user.png')} imageUser2={require('../../../../assets/user.png')} onPress={() => {navigation.navigate('Participants')}}/>
                </View>
                <EventDescription description={event.description}/>
                <View style={styles.containerButton}>
                    <CustomButton onPress={()=>{navigation.navigate("Participants")}} text={"VER PARTICIPANTES"}/>
                </View>
            </View>
        </View>
    )
}

export default DetailEvent;
