import {Image, View, Text, Pressable, StyleSheet, Modal} from "react-native";
import {useState} from "react";

// interface IParticipantItemProps{
//     username: string
// }

interface Props{
    name: string,
    email: string,
    phone: string,
    userImage: any,
}

export const ParticipantItem = ({name, email, phone, userImage}: Props) => {

    const [pressed, setPressed] = useState(false);
    const [deletePressed, setDeletePressed] = useState(false);

    return(
        <View style={styles.container}>
            <View style={styles.userImgContainer}>
                <Image source={userImage}
                style={styles.userImg}/>
                <Text style={styles.usernameText}>{name}</Text>
                <Text style={styles.usernameText}>{email}</Text>
                <Text style={styles.usernameText}>{phone}</Text>
            </View>
            <Text style={styles.textEnd}></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: 90,
        alignSelf: "center",
        marginBottom: 26,
    },
    userImgContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    userImg:{
        width: 70,
        height: 70,
        marginRight: 15,
    },
    usernameText:{
      fontSize: 24,
    },
    textEnd:{
        fontSize: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
})