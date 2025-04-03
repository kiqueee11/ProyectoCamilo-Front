import {StyleSheet} from "react-native";


const stylesAsistencia = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
    },

    titulo: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
        marginBottom: 20,
    },

    text: {
        fontSize: 25,
        color: '#333',
        fontWeight: 'bold',
        lineHeight: 30,
    },

    textDetails: {
        marginBottom: 8,
        fontSize: 15,
        color: '#555',
        fontWeight: '300',
    },

    textEvent: {
        fontSize: 14,
        color: 'black',
        fontWeight: 500,
    },

    formContainer: {
        width: '90%',
        backgroundColor: '#F9F9F9',
        padding: 20,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 6,
        marginHorizontal: 10,
    },

    listItems: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomColor: '#ccc',
    },

    listText: {
        fontSize: 16,
        color: '#444',
        fontStyle: 'italic'
    },

    contentContainer: {
        paddingTop: 12,
        paddingBottom: 20,
    }

});

export default stylesAsistencia;