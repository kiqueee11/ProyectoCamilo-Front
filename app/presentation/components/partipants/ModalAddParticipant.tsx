import {Image, View, Text, Pressable, StyleSheet, Modal} from "react-native";
import {useState} from "react";

interface AddParticipantModalProps {
    onClose: () => void; // Prop para manejar el cierre del modal
}

export const AddParticipantModal = ({onClose}: AddParticipantModalProps) => {
    return (
        <Modal transparent animationType="fade">
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalTextContainer}>
                        <Text style={styles.modalTitleText}>Añadir participante</Text>
                        <View style={styles.modalAnswerContainer}>
                            <Pressable onPress={onClose}>
                                <Text style={styles.modalButtonText}>Añadir</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
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
    modalTextContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
    },
    modalTitleText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    modalButtonText: {
        fontSize: 16,
        color: "blue",
    },
    modalAnswerContainer: {
        marginTop: 40,
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
});
