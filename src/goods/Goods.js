import React, { Component } from 'react'
import {
    SafeAreaView,
	StyleSheet,
	Image,
	View,
	Text,
    ScrollView,
    TextInput
}
from 'react-native';
const styles = StyleSheet.create({
    search:{
      height: 40,
      borderWidth: 1,
      borderRadius: 8,
      borderColor: 'rgb(212, 212, 212)',
      backgroundColor: '#eeeeee',
      marginTop: 15,
      marginLeft: 30,
      marginRight: 30,
      marginBottom:5,
      paddingLeft:15
    },
    searchImg:{
      width: 25,
      height: 25,
      position: "absolute",
      top: 20,
      right: 40
    },
    topBar:{
      flexDirection:'row',
      justifyContent:'space-around',
      backgroundColor:'white',
      borderBottomWidth:1,
      borderBottomColor:'#eee',
      height:50,
      paddingTop: 15,
    },
    barText:{
      color:'#666666'
    },
    body:{
      backgroundColor:'#eee',
      paddingBottom:40
    },
    lineBox:{
      flexDirection:'row',
      paddingTop:10
    },
    litBox:{
      width:'45%',
      height:310,
      backgroundColor:'white',
      marginLeft:17,
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingLeft:20,
      paddingBottom:20
    },
    foodImg:{
      width: '80%',
      height:'70%',
      resizeMode: 'contain',
      marginTop:-30,
      marginLeft:15
    },
    text0:{
      color:'#8c8c8c'
    },
    text1:{
      color:'red'
    }
});
export default class Goods extends Component {
    render() {
        return (
            <View>
            <SafeAreaView />
            <ScrollView>
              <View style={{
                backgroundColor:'white',
                borderBottomColor: '#eeeeee',
                borderBottomWidth: 1,
              }}>
                <TextInput
                    style={styles.search}
                    placeholder="请输入商品名称"
                    placeholderTextColor="#c9c9c9"
                />
                <Image style={styles.searchImg} source={require('../assets/search.png')} />
              </View>
              <View style={styles.topBar}>
                  {
                      ["综合", "销量", "新品", "价格", "信用"].map((item) => <Text style={styles.barText}>{item}</Text>)
                  }
              </View>
              <View style={styles.body}>
                  <View style={styles.lineBox}>
                      <View style={styles.litBox} >
                          <Image source={require('../assets/hao.png')} style={styles.foodImg} />
                          <Text style={styles.text0} >Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                          <Text style={styles.text1} >36.00</Text>
                      </View>
                      <View style={styles.litBox} >
                          <Image source={require('../assets/han.png')} style={styles.foodImg} />
                          <Text style={styles.text0} >Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                          <Text style={styles.text1} >36.00</Text>
                      </View>
                  </View>
                  <View style={styles.lineBox}>
                      <View style={styles.litBox} >
                          <Image source={require('../assets/hao.png')} style={styles.foodImg} />
                          <Text style={styles.text0} >Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                          <Text style={styles.text1} >36.00</Text>
                      </View>
                      <View style={styles.litBox} >
                          <Image source={require('../assets/han.png')} style={styles.foodImg} />
                          <Text style={styles.text0} >Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                          <Text style={styles.text1} >36.00</Text>
                      </View>
                  </View>
                  <View style={styles.lineBox}>
                      <View style={styles.litBox} >
                          <Image source={require('../assets/hao.png')} style={styles.foodImg} />
                          <Text style={styles.text0} >Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                          <Text style={styles.text1} >36.00</Text>
                      </View>
                      <View style={styles.litBox} >
                          <Image source={require('../assets/han.png')} style={styles.foodImg} />
                          <Text style={styles.text0} >Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                          <Text style={styles.text1} >36.00</Text>
                      </View>
                  </View>
              </View>
            </ScrollView>
          </View>
        )
    }
}
