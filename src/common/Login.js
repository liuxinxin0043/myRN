import React, {Component} from 'react';
import {View, Text, Image, TextInput, AsyncStorage, TouchableOpacity, ImageBackground,ToastAndroid, BackHandler} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils'
export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            isloading:false
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    login = ()=>{
        if(this.state.username != '' && this.state.pwd != ''){
            this.setState({isloading:true})
            myFetch.post('/login',{
                username:this.state.username,
                pwd:this.state.pwd}
            ).then(res=>{
                AsyncStorage.setItem('user',JSON.stringify(res.data))
                    .then(()=>{
                        this.setState({isloading:false})
                        Actions.homePage();
                    })
            })
        }
        else{
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
    <ImageBackground source={require('../assets/login.png')} style={{ flex: 1,opacity:0.8 }}>
      <View style={{flex: 1,justifyContent: 'center'}}>
        <View style={{ alignItems: 'center'}}>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
                <Icon name="user-circle" color="red" size={30} style={{marginRight:10}}/>
                <TextInput placeholder="用户名" 
                    onChangeText={this.userhandle}
                />
          </View>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
                <Icon name="send" color="red" size={25} style={{marginRight:10}}/>
                <TextInput 
                    onChangeText={this.pwdhandle}
                    placeholder="密码" 
                    secureTextEntry={true}
                />
          </View>
            <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: '#eef058',
                    marginTop: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={this.login}>
                <Text>登录</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: '#eef058',
                    marginTop: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={()=>Actions.register()}>
                <Text>还没有账号？点我注册</Text>
            </TouchableOpacity>
        </View>
        {
            this.state.isloading
            ?<View><Text style={{color:'#3a86cc',marginLeft:200}}>正在登录。。。</Text></View>
            :null
        }
      </View>
      </ImageBackground>
    );
  }
}

