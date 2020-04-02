import React, { Component } from 'react'
import {
    SafeAreaView,
	StyleSheet,
	ImageBackground,
	ScrollView,
	Image,
	View,
	Text,
    TextInput,
    Dimensions,
    FlatList,
    Button
}
from 'react-native';
const styles = StyleSheet.create({
    topNav:{
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'#f23030',
        height:60
    },
    search:{
        width:400,
        height:40,
        borderRadius:30,
        backgroundColor:'#fbb8b8',
        marginTop:15,
        color:'white',
        paddingLeft:50,
        
    },
    searchImg:{
        width:25,
        height:25,
        marginTop:23,
        marginRight:-30,
        zIndex:5
    },
    slide:{
        width:580,
        justifyContent:'center',
        alignItems:'center'
    },
    line:{
        width:'100%',
        justifyContent:'center',
        height:100,
        backgroundColor:'#fff',
        marginTop:10
    },
    butt:{
        width:400,
        height:80,
        marginTop:20,
        marginLeft:90,
        borderRadius:15,
        justifyContent:'center'
    },

})

const line =[
    {
        img1: require('../assets/mid1.jpg'),
        title:"居家维修养护",
        img2:require('../assets/mid0.jpg')

    },
    {
        img1: require('../assets/mid2.jpg'),
        title:"住宿优惠",
        img2:require('../assets/mid0.jpg')
    },
    {
        img1: require('../assets/mid3.jpg'),
        title:"出行接送",
        img2:require('../assets/mid0.jpg')
    },
    {
        img1: require('../assets/mid4.jpg'),
        title:"E族活动",
        img2:require('../assets/mid0.jpg')
    },
    
]
export default class Service extends Component {
    render() {
        return (
            <>
            <SafeAreaView />
            <ScrollView>
            <View>
                <View style={styles.topNav}>
                    <ImageBackground source={require('../assets/s1.jpg')} style={styles.searchImg} />
                    <TextInput placeholder='请输入商品名称' style={styles.search} />
                    <Image source={require('../assets/topcar.jpg')} style={{marginTop:8,marginRight:-20,marginLeft:15}} />
                </View>
                <View>
                    <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} >
                        <View style={styles.slide} >
                            <Image source={require('../assets/bng2.jpg')} style={{width:580,height:273}} />
                        </View>
                        <View style={styles.slide} >
                            <Image source={require('../assets/bign.jpg')} style={{width:580,height:273}} />
                        </View>
                        <View style={styles.slide} >
                            <Image source={require('../assets/bign.jpg')} style={{width:580,height:273}} />
                        </View>
                    </ScrollView>
                </View>
                <View>
                    <FlatList 
                        style={{backgroundColor: '#f5f5f5'}}
                        data={line}
                        numColumns={1}
                        renderItem={({item})=>(
                            <View style={styles.line}>
                                <Image 
                                    resizeMode="contain"
                                    source={item.img1}
                                    style={{height:90,marginLeft:20}}
                                />
                                <Text
                                    style={{position:'absolute',left:150,color:'#7d7d7d',fontSize:15}}
                                >{item.title}</Text>
                                <Image
                                    resizeMode="contain"
                                    source={item.img2}
                                    style={{position:'absolute',right:10}}
                                />
                            </View>
                        )}
                    />
                    <View  style={styles.butt}>
                        <Button title='发布需求' color='#f23030'></Button>
                    </View>
                    <Text style={{marginLeft:200,marginTop:30,color:'#9e9e9e'}}>@E族之家版权所有</Text>
                </View>
            </View>
            </ScrollView> 
            </>
        )
    }
}
