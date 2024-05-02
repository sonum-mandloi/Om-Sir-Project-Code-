import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StorePro1 = () => {

    const data = [
        {
            id:1,
            image:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
        },
        {
            id:2,
            image:"https://huggingface.co/datasets/huggingfacejs/tasks/resolve/main/image-classification/image-classification-input.jpeg"
        },
        {
            id:3,
            image:"https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg"
        },
        {
            id:4,
            image:"https://www.adobe.com/acrobat/hub/media_173d13651460eb7e12c0ef4cf8410e0960a20f0ee.jpeg?width=750&format=jpeg&optimize=medium"
        },
        {
            id:5,
            image:"https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww"
        },
        {
            id:6,
            image:"https://imagekit.io/blog/content/images/2019/12/image-optimization.jpg"
        },
        {
            id:7,
            image:"https://tinyjpg.com/images/social/website.jpg"
        }
    ]

  return (
    <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={true} >
            {
                data.map((item,index)=>{
                    return(
                        <>
                          <View key={item.id} style={styles.box} >
                            <Image source={{
                                uri:item.image
                            }}
                            style={{width:55,height:55,borderRadius:20}} />
                          </View>
                        </>
                    )
                })
            }
        </ScrollView>
    </View>
  )
}

export default StorePro1

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 10,
        marginTop: 30
    },
    box:{
        borderWidth:4,
        borderColor:"#14B97A",
        borderRadius:25,
        width:70,
        height:70,
        padding:3,
        marginRight:15,
        backgroundColor:"white",
        elevation:15,
        shadowColor:"orange",
        shadowOffset:{
            width:5,
            height:5
        }
    }
})