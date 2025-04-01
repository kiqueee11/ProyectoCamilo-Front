import {StyleSheet} from "react-native";
import {AppColors} from "../../theme/AppTheme";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        flex: 1,
    },
    back:{
        width: '100%',
        top: 50,
        left: 30,
    },
    containerDetailEvent:{
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "80%",
        backgroundColor: AppColors.backgroundColor,
        justifyContent: "flex-start",
        borderTopLeftRadius: 75,
        padding: 30
    },
    containerTop:{
        width: '100%',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    containerInfo:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        margin: 5
    },
    imageUser:{
        width:50,
        height:50,
        marginRight: 15
    },
    imageIcons:{
        width:25,
        height:25,
    },
    textUsuario:{
        fontSize: 16,
        fontWeight: "bold",
    },
    textTitulo:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    text: {
        fontSize: 16,
    },
    containerParticipantes:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative'
    },
    imageUser1:{
        width: 40,
        height: 40,
        borderRadius: 20,
        left: 50
    },
    imageUser2:{
        width: 40,
        height: 40,
        borderRadius: 20,
        left: 25
    },
    botonAdd:{
        backgroundColor: AppColors.primary,
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBotonAdd:{
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute',
    },
    containerDescripcion:{
        marginTop: 15
    },
    descripcion:{
        fontSize: 16
    },
    containerButton:{
        bottom: 0,
    }
})
