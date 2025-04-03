import {StyleSheet} from "react-native";
import {AppColors} from "../../theme/AppTheme";

const stylesHome = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 30,
        paddingVertical: 30,
        //backgroundColor: AppColors.backgroundColor,
    },
    textPrincipal:{
        textAlign:'center',
        fontSize: 25
    },
    containerEvent:{
        width: '100%',
        height: '100%',
        paddingBottom: 5
    }
})

export default stylesHome;