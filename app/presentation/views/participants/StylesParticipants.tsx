import {StyleSheet} from "react-native";
import {AppColors} from "../../theme/AppTheme";

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
        height: "81%",
    }
})

export default stylesParticipants;