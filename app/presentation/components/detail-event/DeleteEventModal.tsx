import React from "react";
import { Modal, Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import {styles} from "../../views/detail-event/StylesDetailEvent";

interface DeleteEventModalProps {
    visible: boolean;
    onClose: () => void;
    onDelete: () => void;
    loading: boolean;
}

export const DeleteEventModal = ({ visible, onClose, onDelete, loading }: DeleteEventModalProps) => {
    return (
        <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalText}>¿Seguro que deseas eliminar el evento?</Text>
                    <View style={styles.modalButtons}>
                        <TouchableOpacity onPress={onClose} style={styles.modalButton}>
                            <Text style={styles.modalButtonText}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onDelete} style={styles.modalButtonDelete} disabled={loading}>
                            <Text style={styles.modalButtonText}>Eliminar</Text>
                        </TouchableOpacity>
                    </View>
                    {loading && <ActivityIndicator size="large" color="#0000ff" />}
                </View>
            </View>
        </Modal>
    );
};
