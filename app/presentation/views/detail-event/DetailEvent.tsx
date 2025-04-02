import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./StylesDetailEvent";
import { CustomButton } from "../../components/CustomButton";
import { PropsStackNavigation } from "../../interfaces/StackNav";
import { BackButton } from "../../components/detail-event/BackButton";
import { UserInfo } from "../../components/detail-event/UserInfo";
import { ActionButtons } from "../../components/detail-event/ActionButtons";
import { EventDate } from "../../components/detail-event/EventDate";
import { EventLocation } from "../../components/detail-event/EventLocation";
import { Participants } from "../../components/detail-event/Participants";
import { EventDescription } from "../../components/detail-event/EventDescription";
import { AddParticipantModal } from "../../components/partipants/ModalAddParticipant";
import { DeleteEventModal } from "../../components/detail-event/DeleteEventModal";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamlist } from "../../../../App";
import { ParticipantViewModel } from "../participants/ViewModel";
import { DetailEventViewModel } from "./ViewModel";
import UpdateEvent from "../update-event/UpdateEvent";

type DetailEventRouteProp = RouteProp<RootStackParamlist, "DetailEvent">;

const DetailEvent = ({ navigation }: PropsStackNavigation) => {
    const route = useRoute<DetailEventRouteProp>();
    const { event } = route.params;
    const { getParticipantsList, addParticipant } = ParticipantViewModel();
    const { loading, handleDeleteEvent } = DetailEventViewModel();
    const [addPressed, setAddPressed] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const handleAddParticipant = async (email: string) => {
        try {
            console.log("Añadiendo participante con email:", email);
            console.log("Slug del evento actual:", event.slug);
            await addParticipant(email, event.slug);
            getParticipantsList(event.slug);
            setAddPressed(false);
        } catch (error) {
            console.error("Error al añadir participante:", error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.back}>
                <BackButton onPress={() => navigation.navigate("Home")} />
            </View>
            <View style={styles.containerDetailEvent}>
                <View style={styles.containerTop}>
                    <UserInfo username={"Usuario"} imageUser={require('../../../../assets/user.png')} />
                    <ActionButtons onPressBorrar={() => setModalVisible(true)} onPressEditar={() => navigation.navigate("UpdateEvent")} />
                </View>
                <Text style={styles.textTitulo}>{event.title}</Text>
                <View style={styles.containerTop}>
                    <EventDate date={event.date} />
                    <EventLocation location={event.location} />
                </View>
                <Text style={styles.text}>{event.type}</Text>
                <View style={styles.containerTop}>
                    <Participants
                        imageUser1={require('../../../../assets/user.png')}
                        imageUser2={require('../../../../assets/user.png')}
                        onPress={() => setAddPressed(!addPressed)}
                    />
                </View>
                <EventDescription description={event.description} />
                <View style={styles.containerButton}>
                    <CustomButton
                        onPress={() => navigation.navigate("Participants", { slug: event.slug })}
                        text={"VER PARTICIPANTES"}
                    />
                </View>
            </View>
            <DeleteEventModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onDelete={() => handleDeleteEvent(event)}
                loading={loading}
            />
            {addPressed && (
                <AddParticipantModal
                    onClose={() => setAddPressed(false)}
                    onAdd={(email) => handleAddParticipant(email)}
                />
            )}
        </View>
    );
};

export default DetailEvent;
