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

const DetailEvent = ({navigation}: PropsStackNavigation) => {
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
                    <Text style={styles.textTitulo}>Titulo del evento</Text>
                </View>
                <View style={styles.containerTop}>
                    <EventDate date={"28/03/2025"}/>
                    <EventLocation location={"Madrid, España"}/>
                </View>
                <View style={styles.containerTop}>
                    <View>
                        <Text style={styles.text}>Tipo de evento</Text>
                    </View>
                    <Participants imageUser1={require('../../../../assets/user.png')} imageUser2={require('../../../../assets/user.png')} onPress={() => {navigation.navigate('Participants')}}/>
                </View>
                <EventDescription description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."}/>
                <View style={styles.containerButton}>
                    <CustomButton onPress={()=>{}} text={"PARTICIPAR EN EVENTO"}/>
                </View>
            </View>
        </View>
    )
}

export default DetailEvent;
