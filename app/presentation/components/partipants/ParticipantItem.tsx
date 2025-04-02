import {Image, View, Text, Pressable, StyleSheet, Modal} from "react-native";
import React, {useEffect, useState} from "react";
import {ParticipantResponse} from "../../../domain/entities/Participant";
import {viewModel} from "../../views/attendance/ViewModel";
import {ParticipantViewModel} from "../../views/participants/ViewModel";
import {createUpdateAttendanceUseCase} from "../../../domain/useCases/attendances/CreateUpdateAttendance";
import {getEventAttendersUseCase} from "../../../domain/useCases/attendances/GetEventAttenders";



interface IParticipantItemProps{
    participant: ParticipantResponse
    onDelete:(email: string) => void
    onAdd:(email: string) => void
}

export const ParticipantItem = ({participant, onDelete, onAdd}:IParticipantItemProps) => {

    const [pressed, setPressed] = useState(false);
    const [deletePressed, setDeletePressed] = useState(false);
    const [addPressed, setAddPressed] = useState(false);

    const {
        createAttendanceDTO,
        createUpdateAttendanceDTO,
        addAttendanceParticipant,
    } = viewModel()

    const {
        slug,
    } = ParticipantViewModel()


    const loadAttendersCheckerArray = async () => {
        try {
            const response = await getEventAttendersUseCase(slug);
            if (response.some(attendance => attendance.user.name === participant.name)) {
                 setPressed(true);
            }
        } catch (error) {
            console.error("Error loading attenders:", error);
        }
    }
    useEffect(()=> {
        loadAttendersCheckerArray()
    }, [])


    const confirmDelete = () => {
        onDelete(participant.email);
        console.log("correo en el hijo" + participant.email);
        setDeletePressed(false)
    };

    // const confirmAdd = (email: string) => {
    //     onAdd(participant.email);
    //     console.log("correo en el hijo" + participant.email);
    //     setAddPressed(false)
    // };
    return(
        <View style={styles.container}>
            <View style={styles.userImgContainer}>

                <Image source={require("../../../../assets/participants/user_image.png")}
                       style={styles.userImg}/>
                <Text style={styles.usernameText}>{participant.name}</Text>
            </View>

            <View style={styles.iconsContainer}>
                <Pressable onPress={async () => {
                    setPressed(!pressed)
                    if (pressed) {
                        await createUpdateAttendanceUseCase(createUpdateAttendanceDTO(false, participant.email, slug))
                    } else {
                        await createUpdateAttendanceUseCase(createUpdateAttendanceDTO(true, participant.email, slug))
                    }
                }}>
                    {pressed ?
                        <Image source={require("../../../../assets/participants/check_box_filled.png")}/>
                        :
                        <Image source={require("../../../../assets/participants/check_box_unfilled.png")}/>
                    }

                </Pressable>
                <Pressable onPress={() => {setDeletePressed(!deletePressed)}}>
                    <Image source={require("../../../../assets/participants/cancel.png")}/>
                </Pressable>
                {deletePressed ?
                    <Modal transparent animationType="fade">
                        <View style={styles.modalBackground}>
                            <View style={styles.modalContainer}>
                                <View style={styles.modalTextContainer}>
                                    <Text style={styles.deleteQuestionText}>¿Eliminar participante?</Text>
                                    <View style={styles.modalAnswerContainer}>
                                        <Pressable onPress={() => setDeletePressed(false)}>
                                            <Text style={styles.deleteQuestionText}>NO</Text>
                                        </Pressable>
                                        <Pressable onPress={() =>{confirmDelete()}}>
                                            <Text style={{...styles.deleteQuestionText, color: "red"}}>SÍ</Text>
                                        </Pressable>

                                    </View>
                                </View>

                            </View>
                        </View>
                    </Modal>
                    : null
                }

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: 90,
        alignSelf: "center",
        marginBottom: 26
    },
    userImgContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    userImg:{
        width: 70,
        height: 70,
        marginRight: 10,
    },
    usernameText:{
        fontSize: 20,
    },
    iconsContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "24%",
        alignSelf: "center",
    },
    modalBackground:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContainer: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        width: "80%",
        maxHeight: 400,
    },
    modalTextContainer:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
    },
    deleteQuestionText:{
        fontSize: 18,
        fontWeight: "bold",
    },
    modalAnswerContainer:{
        marginTop: 40,
        width: "60%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    modalTitleText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    modalButtonText: {
        fontSize: 18,
        color: "black",
        marginTop: 35,
        fontWeight: "semibold",
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        width: 300,
        maxWidth: '100%'
    },
})
