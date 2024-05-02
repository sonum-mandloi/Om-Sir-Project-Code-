import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Carousel, { Pagination } from 'react-native-snap-carousel'


const PostPro1 = () => {
    const photos = [
        {
            id: 1,
            image: "https://wallpaperaccess.com/full/2122995.jpg",
            index:0
        },
        {
            id: 2,
            image: "https://e1.pxfuel.com/desktop-wallpaper/274/406/desktop-wallpaper-best-times-square-%C2%B7-new-york-times-square.jpg",
            index:1
        }, 
        {
            id: 3,
            image: "https://e0.pxfuel.com/wallpapers/7/384/desktop-wallpaper-ghostwire-tokyo-samsung-galaxy-s6-s7-google-pixel-xl-nexus-6-6p-lg-g5-games-and-background-tokyo-portrait-thumbnail.jpg",
            index:2
        },
    ]

    const [activeImage,setActiveImage]=useState(1)
    return (
        <View style={styles.container}>
            <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginTop: 15, paddingHorizontal: 10, }}>
                <View style={{ flexDirection: "row" }} >
                    <Image source={{
                        uri: "https://assets.gqindia.com/photos/655f4cae4415ca05cbac6ae5/16:9/w_1920,h_1080,c_limit/brands%20Virat%20Kohli%20has%20invested%20his%20wealth%20in.jpg"
                    }}
                        style={{ width: 40, height: 40, borderRadius: 25 }} />
                    <View style={{ marginLeft: 10 }}>
                        <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                            <Text style={{ fontSize: 18, fontWeight: "600" }} >virat.kohil</Text>
                            <MaterialIcons name="verified" color="#00b8e6" style={{marginLeft:5}} />
                        </View>
                        <Text style={{ fontWeight: "500" }}>Tokyo, Japan</Text>
                    </View>
                </View>
                <View>
                    <Entypo name="dots-three-horizontal" size={20} color="#000000" />
                </View>
            </View>
            <View style={{ width: "full", height: 300, marginTop: 10,position:"relative" }} >
                <Carousel
                    data={photos}
                    renderItem={({item}) => <Image source={{ uri: item.image }} style={{ width: 410, height: 300 }} />}
                    sliderWidth={410}
                    itemWidth={400}
                    sliderStyle={{ display: "flex", alignItems: "center" }}
                />
                <View style={{position:"absolute",right:10,top:10,backgroundColor:"white",padding:5,paddingHorizontal:10,borderRadius:15}}>
                    <Text style={{color:"black",fontSize:15}}>1/3</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10,alignItems:"center" }}>
                <View style={{ flexDirection: "row" }}>
                    <AntDesign name="hearto" size={30} color="black" style={{ marginRight: 15 }} />
                    <Feather name="message-circle" size={30} color="black" style={{ marginRight: 15 }} />
                    <Feather name="send" size={30} color="black" style={{ marginRight: 15 }} />
                </View>
                <View style={{marginLeft:-85}} >
                    <Pagination
                        dotsLength={3}
                        activeDotIndex={0}
                        dotStyle={{
                            backgroundColor:"green",
                            width:10,
                            height:10,
                            borderRadius:5
                        }}
                    />
                </View>
                <View>
                    <AntDesign name="save" size={30} color="black" />
                </View>
            </View>
            <View style={{ paddingHorizontal: 10 }}>
                <View style={{ flexDirection: "row", }}>
                    <Image source={{
                        uri: "https://overlay.imageonline.co/overlay-image.jpg"
                    }}
                        style={{ width: 25, height: 25, borderRadius: 15 }} />
                    <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: "500" }}>
                        Liked by <Text style={{ fontWeight: "700" }}>craig_love</Text>  and <Text style={{ fontWeight: "700" }}> 44,686 others </Text>
                    </Text>

                </View>
                <Text style={{fontSize: 15, fontWeight: "500" }}>
                    <Text style={{ fontWeight: "700" }}> virate.kohli </Text> Onwards and Upwards
                </Text>

            </View>
        </View>
    )
}

export default PostPro1

const styles = StyleSheet.create({
    container: {
        // paddingHorizontal: 10,
        marginTop: 10,
        backgroundColor: "white"
    }
})