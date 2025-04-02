import React from "react";
import {Image, View, Text, Pressable, StyleSheet, Modal, TextInput} from "react-native";
import {useState} from "react";
import {AppColors} from "../../theme/AppTheme";

interface FormInputProps {
    placeholder: string;
    keyboardType: "default" | "email-address" | "numeric" | "phone-pad";
    secureTextEntry?: boolean;
    text: string;
    image?: any;
    editable: boolean;
    onPressFormInterface: (value: string) => void;
}

const FormInput = ({
                       placeholder,
                       keyboardType,
                       secureTextEntry = false,
                       text,
                       image,
                       editable,
                       onPressFormInterface,
                   }: FormInputProps) => {
    return (
        <View style={styles.inputContainer}>
            {image && <Image source={image} style={styles.icon} />}
            <TextInput
                value={text}
                onChangeText={onPressFormInterface}
                placeholder={placeholder}
                editable={editable}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                style={styles.input}
            />
        </View>
    );
};

interface AddParticipantModalProps {
    onClose: () => void;
    onAdd: (email: string) => void;
}

export const AddParticipantModal = ({onClose, onAdd}: AddParticipantModalProps) => {
    const [email, setEmail] = useState("");

    const handleAdd = () => {
        onAdd(email);
        setEmail("");
        onClose();
    };

    return (
        <Modal transparent animationType="fade">
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalTextContainer}>
                        <Text style={styles.modalTitleText}>Añadir participante</Text>
                        <View style={styles.modalAnswerContainer}>
                            <FormInput
                                placeholder="Correo electrónico"
                                keyboardType="email-address"
                                secureTextEntry={false}
                                text={email}
                                image={null}
                                editable={true}
                                onPressFormInterface={(value) => setEmail(value)}
                            />
                            <View style={styles.buttonContainer}>
                                <Pressable onPress={handleAdd} style={styles.boton}>
                                    <Text style={styles.botonText}>Añadir</Text>
                                </Pressable>
                                <Pressable onPress={onClose} style={styles.boton}>
                                    <Text style={styles.botonText}>Cancelar</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        height: 40,
        marginVertical: 10,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
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
        marginBottom: 12,
    },
    modalAnswerContainer: {
        width: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    },
    boton: {
        backgroundColor: AppColors.primary,
        padding: 15,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 12,
        elevation: 2,
    },
    botonText: {
        color: "black",
        fontWeight: "semibold",
    },
});
