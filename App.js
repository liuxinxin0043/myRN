import React,{useState,useEffect} from 'react';
import {AsyncStorage,View,ToastAndroid,BackHandler} from 'react-native';
import {Router,Scene,Tabs,Lightbox,Modal,Overlay,Actions}from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import SplashScreen from 'react-native-splash-screen';
import Service from './src/home/Service'
import Myself from './src/self/Myself'
import Mypublic from './src/self/Mypublic'
import Goods from './src/goods/Goods'
import Login from './src/common/Login'
import Reg from './src/common/Register'
import SwiperPage from './src/common/SwiperPage'
const App = () => {
  let [isLogin,setLogin] = useState(false);
	let [isInstall,setInstall] = useState(true);
	let now = 0;
	let init = ()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall',res)
			if(res){
				setInstall(false);
			}
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				setLogin(true);
				SplashScreen.hide();
			}
		})
	}
	useEffect(()=>{
		init();
	},[])
	let afterInstall = ()=>{
		console.log('after install')
		setInstall(false)
	}
	if(isInstall){
		return <View style={{flex:1}}>
			<SwiperPage afterInstall={afterInstall}/>
		</View>
	}
  return (
    <Router
      backAndroidHandler={()=>{
        if(Actions.currentScene != 'home'){
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
    >
      <Overlay>
        <Modal key="modal" hideNavBar>
        <Lightbox ker="lightbox">
            <Scene key='root'> 
              <Tabs key='tabbar'
                    hideNavBar
                    activeTintColor='red'
                    inactiveTintColor='#b2aeae'
                    tabBarStyle={{backgroundColor:'#ffffff',height:70}}
              >
                <Scene key='homePage' title='首页'
                    hideNavBar
                    icon={
                      ({focused})=><Icon 
                        color={focused?'red':'#999999'} 
                        size={25}
                        name="home"   
                      />
                    }
                >
                  <Scene key='home' component={Service}/>
                </Scene>
                <Scene key='goodPage' title='商品分类'
                  hideNavBar
                  icon={
                    ({focused})=><Icon 
                      color={focused?'red':'#999999'} 
                      size={25}
                      name="th-list"
                    />
                  }
                >
                  <Scene key='goods' component={Goods}/>
                </Scene>
                <Scene key='my' title='个人中心' hideNavBar
                    icon={({focused})=>
                    <Icon 
                      color={focused?'red':'#999999'} 
                      size={25}
                      name='user'/
                  >}
                >
                  <Scene key='mine' component={Myself}/>
                </Scene>
              </Tabs>
            </Scene>
          </Lightbox>
        <Scene initial={!isLogin} key="login" component={Login} />
        <Scene key='mypublic' component={Mypublic} />
        <Scene key='register' component={Reg} />
        </Modal>
      </Overlay>
    </Router>
  );
};


export default App;
