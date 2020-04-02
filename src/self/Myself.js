import React, { Component } from 'react'
import {
    SafeAreaView,
	StyleSheet,
	Image,
	View,
	Text,
    FlatList,
    Scene,
    ScrollView,
    AsyncStorage,
    BackHandler
}
from 'react-native';
import {Actions} from 'react-native-router-flux'
import Button from 'react-native-button';
const styles = StyleSheet.create({
    topr:{
        backgroundColor:'#f23030',
        alignItems:'center',
        height:280,
        width:'100%',
        paddingTop:30
    },
    self:{
        width:'100%',
        height:350,
        backgroundColor:'#fff',
    },
    liNav:{
        height:50,
        borderBottomColor:'#eeeeee',
        borderBottomWidth:2,
        paddingTop:10,
        paddingLeft:20
    },
    navText:{
        position:'absolute',
        left:60  ,
        marginTop:10,
        color:'#5b5a5a' 
    },
    box:{
        width:'30%',
        height:60,
        alignItems:'center',
        marginLeft:10,
        marginTop:30
    },
    activity:{
        width:'100%',
        height:260,
        backgroundColor:'#fff',
        marginTop:5
    },
    myPic:{
        height:200,
        width:200,
        borderRadius:100
    },
    bottom:{
        color:'#fefefe',
        fontSize:15,
        marginTop:15,
        width:150,
        height:50,
        backgroundColor:'#f23030',
        justifyContent: 'center',
        borderRadius:60,
        alignItems:'center',
        paddingTop:10,
        marginLeft:'30%'
    }
})

const box1=[
    {
        img:require('../assets/9.jpg'),
        title:'账户管理'
    },
    {
        img:require('../assets/9.jpg'),
        title:'收货地址'
    },
    {
        img:require('../assets/9.jpg'),
        title:'我的信息'
    },
    {
        img:require('../assets/9.jpg'),
        title:'我的订单'
    },
    {
        img:require('../assets/9.jpg'),
        title:'我的二维码'
    },
    {
        img:require('../assets/9.jpg'),
        title:'我的积分'
    },
    {
        img:require('../assets/9.jpg'),
        title:'我的收藏'
    }
]

const box2=[  
    {
        img:require('../assets/10.jpg'),
        title:'居家维修保养',
        go:'1'
    },
    {
        img:require('../assets/10.jpg'),
        title:'出行接送',
        go:'2'
    },
    {
        img:require('../assets/10.jpg'),
        title:'我的受赠人',
        go:'3'
    },
    {
        img:require('../assets/10.jpg'),
        title:'我的住宿优惠',
        go:'4'
    },
    {
        img:require('../assets/10.jpg'),
        title:'我的活动',
        go:'5'
    },
    {
        img:require('../assets/10.jpg'),
        title:'我的发布',
        go:'mypublic'
    },
]
export default class Myself extends Component {
    constructor(){
        super();
        this.state={
            imgUrl:''
        }
    }
    // headPic=()=>{
    //     ImageCropPicker.openCamera({
    //         width:200,
    //         height:300,
    //         cropping:true,
    //     }).then(image=>{
    //         console.log(image.path)
    //         AsyncStorage.setItem('image', image.path);
    //         AsyncStorage.getItem('image').then((res)=>{
    //             this.setState({ imgUrl:{uri:res}})
    //         })          
    //     });
    // }
    exit=()=>{
        AsyncStorage.clear()
        Actions.login()
    }
    render() {
        return (
            <>
            <SafeAreaView/>
            <ScrollView>
            <View  style={{ flex: 1, justifyContent: 'center' }}>
                <View style={styles.topr}>
                    <Image source={require('../assets/head.jpg')} style={styles.myPic} />
                    <Text style={{color:'#fff',fontSize:20}}>BINNU DHILLON</Text>
                </View>
                <View style={styles.self}>
                    <View style={styles.liNav}>
                        <Image source={require('../assets/1.jpg')} style={{width:20,height:20}} />
                        <Text style={styles.navText}>我的个人中心</Text>
                    </View>
                    <View style={{ justifyContent:'center',alignItems:'center'}}>
                        <FlatList 
                            data={box1}
                            numColumns={3}
                            renderItem={({item})=>(
                                <View style={styles.box}>
                                    <Image 
                                        resizeMode="contain"
                                        source={item.img}
                                        style={{width:30,height:30}}
                                    />
                                    <Text
                                     style={{color:'#4f4e4e',marginTop:10}}
                                    >{item.title}</Text>
                                </View>
                            )}
                        />
                    </View>    
                </View>
                <View style={styles.activity}>
                    <View style={styles.liNav}>
                        <Image source={require('../assets/1.jpg')} style={{width:20,height:20}} />
                        <Text style={styles.navText}>E族活动</Text>
                    </View>
                    <View style={{ justifyContent:'center',alignItems:'center'}}>
                        <FlatList 
                            data={box2}
                            numColumns={3}
                            renderItem={({item})=>(
                                <View style={styles.box}>
                                    <Image 
                                        resizeMode="contain"
                                        source={item.img}
                                        style={{width:30,height:30}}
                                    />
                                    <Text
                                    style={{color:'#4f4e4e',marginTop:10}}
                                    onPress={()=>Actions.mypublic()}
                                    >{item.title}</Text>
                                </View>
                            )}
                        />
                    </View>    
                </View>
                <View>
                    <Button 
                        backAndroidHandler={()=>{
                            if(Actions.currentScene != 'personal'){
                                Actions.pop();
                                return true;
                            }else{
                                if(new Date().getTime()-now<2000){
                                    BackHandler.exitApp();
                                }else{
                                    ToastAndroid.show('确定要退出吗',100);
                                    now = new Date().getTime();
                                    return true;
                                }
                            }
                            
                        }}
                        style={styles.bottom}
                        onPress={this.exit}>
                    退出登录</Button>
                </View>  
                
            </View>
            </ScrollView>
            </>
        )
    }
}
