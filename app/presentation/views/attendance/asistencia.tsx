import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export function AsistenciaView() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Asistencias</Text>
            <ScrollView style={styles.containerScroll} horizontal={false}>
                <View>
                    <Text style={styles.text}>kufhiweu</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        marginTop: 30,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    containerScroll: {
        width: '90%',
        marginTop: 10,
    },
    text: {
        fontSize: 18,
        color: 'white',
    }
});
