import React, { Component } from 'react'
import {View, Text, TextInput, TouchableOpacity, AsyncStorage,StyleSheet,ToastAndroid,BackHandler} from 'react-native';
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import {myFetch} from '../utils'


const styles = StyleSheet.create({
    style1:{
        width: '80%',
        marginRight: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
    },
    style2:{
        width: '80%',
        width: '80%',
        height: 40,
        backgroundColor: '#ccc',
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default class Register extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            pwd:'',
            phone:'',
            finish:false
        }
    }
    userinput=(text)=>{
        this.setState({username:text})
    }
    pwdinput=(text)=>{
        this.setState({pwd:text})
    }
    phoneinput=(text)=>{
        this.setState({phone:text})
    }
    finish = ()=>{
        if(this.state.username != '' && this.state.pwd != ''&& this.state.phone!=''){
            let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if(myreg.test(this.state.phone)){
                this.setState({isloading:true})
                myFetch.post('/register',{
                    username:this.state.username,
                    pwd:this.state.pwd}
                ).then(res=>{
                    // if(res.data.num == '1'){
                    //     ToastAndroid.show('账户已存在!', ToastAndroid.TOP);
                    AsyncStorage.setItem('user',JSON.stringify(res.data))
                        .then(()=>{
                            this.setState({isloading:false})
                            Actions.login();
                        })
                })
            }else{
                ToastAndroid.show('手机号格式不正确!', ToastAndroid.TOP);
            }
            
        }else{
            ToastAndroid.show('输入不能为空!', ToastAndroid.TOP);
        }
        
    } 
    render() {
        BackHandler.addEventListener('back',()=>{
            if(new Date().getTime()-this.state.now <2000){
              BackHandler.exitApp()
            }else{
              ToastAndroid.show('确定要退出吗',100);
              this.state.now =new Date().getTime();
              return true;
            }
         });
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View
                    style={{ alignItems: 'center' }}>
                    <View
                        style={styles.style1}>
                        <Icon name="user-circle" color="red" size={25} style={{marginRight:10}}/>
                        <TextInput placeholder="用户名"
                            onChangeText={this.userinput}
                        />
                    </View>
                    <View
                        style={styles.style1}>
                        <Icon name="phone" color="red" size={25} style={{marginRight:10}} />
                        <TextInput placeholder="手机号"
                            onChangeText={this.phoneinput}
                        />
                    </View>
                    <View
                        style={styles.style1}>
                        <Icon name="send" color="red" size={20} style={{marginRight:10}} />
                        <TextInput
                            onChangeText={this.pwdinput}
                            placeholder="密码"
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.style2}
                        onPress={this.finish}>
                        <Text>点击注册</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.style2}
                        onPress={() => Actions.pop()}>
                        <Text>已有账号？返回登录</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.finish
                    ?<View style={{paddingTop:50,paddingLeft:208}}><Text>注册成功</Text></View>
                    :null
                }
            </View>
        )
    }
}