import {StyleSheet} from "react-native";


const stylesParticipants = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 30,
        paddingVertical: 30,
        //backgroundColor: AppColors.backgroundColor,
    },
    icon: {
        width: 23,
        height: 23,
    },
    topSection: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 33,
        marginBottom: 15,
    },
    textPrincipal:{
        textAlign:'center',
        fontSize: 25,
        alignSelf: 'center',
    },
    containerText: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 80,
    },
    participantContainer: {
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        padding: 20,
        borderWidth: 1,
        borderColor: "#d3d3d3",
        borderRadius: 10,
        height: "80%",
    },
})

export default stylesParticipants;