import {Image, View, Text, Pressable, StyleSheet, Modal} from "react-native";
import {useState} from "react";

// interface IParticipantItemProps{
//     username: string
// }

interface Props{
    name: string,
    email: string,
    phone: string,
    userImage: any,
}

export const ParticipantItem = ({name, email, phone, userImage}: Props) => {

    const [pressed, setPressed] = useState(false);
    const [deletePressed, setDeletePressed] = useState(false);

    return(
        <View style={styles.container}>
            <View style={styles.userImgContainer}>
                <Image source={userImage}
                style={styles.userImg}/>
                <Text style={styles.usernameText}>{name}</Text>
                <Text style={styles.usernameText}>{email}</Text>
                <Text style={styles.usernameText}>{phone}</Text>
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
        width: "20%",
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
        flexDirection: "row",
        justifyContent: "space-evenly",
    }
})