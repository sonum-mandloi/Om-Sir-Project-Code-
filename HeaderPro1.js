import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'

const HeaderPro1 = () => {
    return (
        <View style={styles.container} >
            <View style={styles.login}>
                <View style={styles.image}>
                    <Image source={{
                        uri: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg"
                    }}
                        style={{ width: 45, height: 45, borderRadius: 25 }} />
                </View>
                <View style={styles.online}></View>
            </View>
            <View style={styles.text}>
                <Text style={{ fontWeight: "bold", fontSize: 23, color: "black" }}>Hello,Champ !</Text>
                <Text style={{ color: "#EDC81F", fontWeight: "700" }}>5 Centuries,Highest Run scorer</Text>
            </View>
            <View style={styles.icons}>
                <View style={styles.icon} >
                    <AntDesign name="search1" size={25} color="black" style={{fontWeight:"bold"}} />
                </View>
                <View style={styles.icon}>
                    <EvilIcons name="bell" size={30} color="black"  style={{fontWeight:"bold"}}/>

                </View>
                <View style={styles.icon}>
                    <Feather name="send" size={20} color="black"  style={{fontWeight:"bold"}}/>
                </View>
            </View>
        </View>
    )
}

export default HeaderPro1

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        marginTop: 20
    },
    login: {

    },
    image: {
        position: "relative"
    },
    online: {
        width: 14,
        height: 14,
        backgroundColor: "#4acf76",
        borderRadius: 10,
        position: "absolute",
        bottom: 7,
        right: 0,
        borderWidth: 2,
        borderColor: "white"
    },
    text: {
        marginLeft: 20
    },
    icons: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    icon: {
        // borderWidth:1,
        marginHorizontal: 5,
        padding: 3,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        width: 35,
        height: 35,
        backgroundColor: "white",
        elevation: 20,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 90
        },
        shadowOpacity: 0.9,
        shadowRadius: 20,
        }
})