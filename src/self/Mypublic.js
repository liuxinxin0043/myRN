import React, { Component } from 'react'
import {
    View, 
    Text, 
    SafeAreaView,
    StyleSheet,
    ToastAndroid,
    ScrollView,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
const styles = StyleSheet.create({
    top:{
        backgroundColor:'#f23030',
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        width:'100%'
    },
    topText:{
        color:'white',
        fontSize:15,
        justifyContent:'center',
        marginTop:10,
        fontWeight:'bold'
    },
    topRight:{
        color:'white',
        fontSize:30,
        position:'absolute',
        right:10,
        top:-10

    },
    list:{
        backgroundColor:'#fff',
        flexDirection:'row',
        paddingBottom:10
    },
    listTitle:{
        marginLeft:10,
        width:300,
        marginTop:10
    },
    date:{
        position:'absolute',
        right:100
    },
    replys:{
        position:'absolute',
        right:10
    },
    bottom:{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'center',
        width:'100%',
        height:100
    },
    leftb:{
        backgroundColor:'#f23030',
        color:'white',
        borderRadius:20,
        width:80,
        marginRight:50
    },
    rightb:{
        backgroundColor:'#f23030',
        color:'white',
        borderRadius:20,
        width:80,
        marginLeft:50
    },
    // page:{
    //     marginLeft:90,
    // }

})
export default class Mypublic extends Component {
    constructor(){
        super()
        this.state={
            data:[],
            pages:1,
            reply:'已回复',
            unreply:'未回复'
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?limit=15&page='+this.state.pages)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                data:res.data
            })
        })
        
    }
    componentDidUpdate(preProps,prevState){
        if(this.state.pages != prevState.pages){
            fetch('https://cnodejs.org/api/v1/topics?limit=15&page='+this.state.pages)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data:res.data
                })
            })
        }
    }
    leftPage = ()=>{
        var flag = this.state.pages;
        if(flag>1){
            flag --;
            this.setState({
                pages:flag
            })
        }else{
            ToastAndroid.show('已经是最前方了！', ToastAndroid.TOP);
        }

    }
    rightPage = ()=>{
        var flag = this.state.pages;
        flag ++;
        this.setState({
            pages:flag
        })
    }
    render() {
        return (
            <>
            <SafeAreaView />
            <ScrollView>
                {
                    this.state.isloading
                    ?<View><Text>正在加载。。。</Text></View>
                    :null
                }
                <View style={styles.top}>
               
                    <Icon 
                          name='chevron-left'
                          color={'white'}
                          size={25}
                          style={{position:'absolute',left:5,top:5}}
                          onPress={()=>Actions.my()}
                    />
                    <Text style={styles.topText}>我的发布</Text>
                    <Text style={styles.topRight}>...</Text>
                </View>
               
                {
                    this.state.data.map((item)=>(
                        <View style={styles.list}>
                            <Text style={styles.listTitle}>{item.title.length<15?item.title:item.title.substr(0,16)+'...'}</Text>
                            <Text style={styles.date}>{item.create_at.substr(0,10)}</Text>
                            <Text style={styles.replys}>{Math.round(Math.random())==1?this.state.unreply:this.state.reply}</Text>
                        </View>
                    ))
                }
                <View style={styles.bottom}>
                    <Button style={styles.leftb} onPress={()=>this.leftPage()}>上一页</Button>
                    <Text style={styles.page}>第{this.state.pages}页</Text>
                    <Button style={styles.rightb} onPress={()=>this.rightPage()}>下一页</Button>
                </View>
            </ScrollView>     
            </>
        )
    }
}
