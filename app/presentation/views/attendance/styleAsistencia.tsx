import {StyleSheet} from "react-native";


const stylesAsistencia = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        marginBottom: 20,
    },
    text: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
    },
    textDetails: {
        fontSize: 14,
        color: 'black',
        fontWeight: '300',
    },
    textEvent: {
        marginTop: 20,
        fontSize: 17,
        color: 'black',
        fontWeight: '400',
    },
    formContainer: {
        width: '90%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    listItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomColor: 'black',
    },
    listText: {
        fontSize: 16,
        color: 'black',
    },
    contentContainer: {
        paddingTop: 87 ,
        paddingBottom: 87,
    }
});

export default stylesAsistencia;