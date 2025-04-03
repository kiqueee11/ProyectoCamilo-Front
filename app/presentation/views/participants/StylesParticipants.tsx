import {StyleSheet} from "react-native";
import {AppColors} from "../../theme/AppTheme";


const stylesParticipants = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 30,
        paddingVertical: 30,
        backgroundColor: AppColors.backgroundColor,
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
        marginBottom: 10,
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
        height: 550,
        elevation: 1
    },
    textBotonAdd: {
        backgroundColor: '#f0f0f0',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 20,
    },
    textBotonAddText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'semibold',
    },

})

export default stylesParticipants;