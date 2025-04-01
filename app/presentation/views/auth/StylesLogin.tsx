import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',

    },
    title: {
        textAlign: 'center',
        fontSize: 40,

    },
    subTitle: {
        textAlign: "center",
        color: "grey",
        fontWeight: 'bold',
    },
    logoContainer: {
        alignSelf: 'center',
        marginTop: 130,
    },
    formContainer: {
        width: "95%",
        paddingVertical: 25,
        paddingHorizontal: 20,
        marginHorizontal: "auto",
        marginTop: 80,
        borderRadius: 10,
    },
    logo: {
        width: 125,
        height: 125,
        borderRadius: 25,
    },
    buttonContainer: {
        alignSelf: "center",
        paddingVertical: 20,
        elevation: 40,
        width: "100%",
        height: "40%",
    }

});
export default styles;