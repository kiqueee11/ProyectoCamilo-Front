import React, {useState, useCallback, useEffect} from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import stylesAsistencia from "./styleAsistencia";

export function AsistenciaView() {
    const [asistentes, setAsistentes] = useState([
        { id: "1", nombre: "Axel", checked: true },
        { id: "2", nombre: "Alex", checked: true },
        { id: "3", nombre: "Daniel", checked: true },
        { id: "4", nombre: "Emily", checked: true },
        { id: "5", nombre: "Enrique", checked: true },
        { id: "6", nombre: "Antonio", checked: true },
        { id: "7", nombre: "sihao", checked: true },
    ]);

    const [personasAnotadas, setPersonasAnotadas] = useState(
        asistentes.filter(item => item.checked).length
    );

    const toggleCheckbox = useCallback((id: string) => {
        setAsistentes((prevAsistentes) =>
            prevAsistentes.map(item =>
                item.id === id ? { ...item, checked: !item.checked } : item
            )
        );
    }, []);

    useEffect(() =>{
        setPersonasAnotadas(asistentes.filter(item => item.checked).length);
    }, [asistentes]);

    return (
        <View style={stylesAsistencia.container}>
            <Text style={stylesAsistencia.titulo}>Asistencias</Text>
            <View style={stylesAsistencia.formContainer}>
                <Text style={stylesAsistencia.text}>*Nombre del evento*</Text>
                <Text style={stylesAsistencia.textDetails}>*Fecha evento*</Text>
                <Text style={stylesAsistencia.textDetails}>*Ubicación evento*</Text>
                <Text style={stylesAsistencia.textEvent}>Personas anotadas al evento *Nombre del evento* : {personasAnotadas}</Text>

                <FlatList
                    data={asistentes}
                    keyExtractor={(item) => item.id.toString()}
                    style={stylesAsistencia.contentContainer}
                    renderItem={({ item }) => (
                        <View style={stylesAsistencia.listItems}>
                            <Text style={stylesAsistencia.listText}>{item.nombre}</Text>
                            <TouchableOpacity onPress={() => toggleCheckbox(item.id)}>
                                <Ionicons
                                    name={item.checked ? "checkbox" : "square-outline"}
                                    size={25}
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}


