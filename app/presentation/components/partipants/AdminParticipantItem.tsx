import {Image, View, Text, Pressable, StyleSheet, Modal, TextInput} from "react-native";
import React, {useState} from "react";
import {AddParticipantModal} from "./ModalAddParticipant";

interface IParticipantItemProps{
    username: string
}

export const AdminParticipantItem = ({username}:IParticipantItemProps) => {

    const [pressed, setPressed] = useState(false);
    const [deletePressed, setDeletePressed] = useState(false);
    const [addPressed, setAddPressed] = useState(false);

    return(
        <View style={styles.container}>
            <View style={styles.userImgContainer}>
                <Image source={require("../../../../assets/participants/user_image.png")}
                       style={styles.userImg}/>
                <Text style={styles.usernameText}>{username}</Text>
            </View>

            <View style={styles.iconsContainer}>
                <Pressable onPress={() => {setPressed(!pressed)}}>
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
                                        <Pressable onPress={() => setDeletePressed(false)}>
                                            <Text style={{...styles.deleteQuestionText, color: "red"}}>SÍ</Text>
                                        </Pressable>

                                    </View>
                                </View>

                            </View>
                        </View>
                    </Modal>
                    : null
                }
                <Pressable onPress={() => {setAddPressed(!addPressed)}}>
                    <Image style={{width: 20, height: 21.5, alignSelf:"center"}} source={require("../../../../assets/participants/add.png")}/>
                </Pressable>
                {addPressed ?
                <Modal transparent animationType="fade">
                    <View style={styles.modalBackground}>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalTextContainer}>
                                <Text style={styles.modalTitleText}>Añadir participante</Text>
                                <View style={styles.modalAnswerContainer}>
                                    <View>
                                    <TextInput style={styles.textInput} placeholder={""}></TextInput>
                                    </View>
                                    <Pressable onPress={() => setAddPressed(false)}>
                                        <View>
                                        <Text style={styles.modalButtonText}>Añadir</Text>
                                        </View>
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
        fontSize: 24,
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
        width: "90%",
        display: "flex",
        flexDirection: "column",
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
