import React from 'react';
import {AppRegistry,Image, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, Button, ScrollView,Linking,SafeAreaView, ImageBackground, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import {useState} from "react";
import { Value } from 'react-native-reanimated';
import { Alert } from 'react-native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearTextGradient } from "react-native-text-gradient";
import { MaterialIcons } from '@expo/vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';
//Components--------------------------------------------
import Home from '../Component/Home';

//Bilder-------------------------------------------------
import LoginImage from '../Component/ImageGallery/LoginImage.png';
import HeaderImage from './ImageGallery/undraw_Mobile_login_re_9ntv.png';
import { Stack } from 'react-native-router-flux';
import NavigationContainer from '@react-navigation/native/lib/commonjs/NavigationContainer';


function SplashScreen({navigation}) 
{

    const Continue = () =>
    {
        Alert.alert("Getting Started")
        console.log("continue")
    }

    return(
        <View style={styles.container} >
            <View style={styles.header} >
                <Animatable.Image 
                animation="fadeInUpBig"
                source={LoginImage} 
                style={styles.logo} 
                resizeMethod="auto" />
            </View>
            <Animatable.View  animation="bounceInUp" style={styles.footer} >
                <Text style={styles.titel} >Stay connected with everyone!</Text>
                <Text style={styles.text} >Sign in with account</Text>
            <Text/>
                <TouchableOpacity onPress={()=> navigation.navigate("SignInScreen")} style={{backgroundColor: 'white', width: 150, borderRadius: 17, height: 40,}} >
                <Text style={styles.text1} >Get Started ▶ </Text>
            </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

export default SplashScreen;


const styles = StyleSheet.create({

    container:{
    flex: 1,
    backgroundColor: '#fff',
    },  
    
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  footer:{
    flex: 1,
    top: 0,
    backgroundColor: '#3F3D56',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
// 3F3D56
  logo:
  {
    height: 310,
    width: 380,
  },

  titel: {
    color: '#FF6584',
    fontSize: 30,
    fontWeight: 'bold',
  },

  text: 
  {
    color: 'white',
    marginTop: 5,
    left: 10,
    top: 5,
    fontWeight: '600'
  },

  text1:{
    color: '#3F3D56',
    marginTop: 5,
    left: 10,
    top: 5,
    fontWeight: 'bold'
  },

  button: {
      alignItems: 'flex-end',
      marginTop: 30,
      backgroundColor: 'blue'
  },

  signIN: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      flexDirection: 'row',
      backgroundColor: 'white'
  },

  textSingIn:{
      color: 'black',
      fontWeight: 'bold',
      fontSize: 20,
      paddingLeft: 20,
      marginLeft: 20,
  }

})

//                        .-.
//                       |_:_|
//                      /(_Y_)\
// .                   ( \/M\/ )
//  '.               _.'-/'-'\-'._
//    ':           _/.--'[[[[]'--.\_
//      ':        /_'  : |::"| :  '.\
//        ':     //   ./ |oUU| \.'  :\
//          ':  _:'..' \_|___|_/ :   :|
//            ':.  .'  |_[___]_|  :.':\
//             [::\ |  :  | |  :   ; : \
//              '-'   \/'.| |.' \  .;.' |
//              |\_    \  '-'   :       |
//              |  \    \ .:    :   |   |
//              |   \    | '.   :    \  |
//              /       \   :. .;       |
//             /     |   |  :__/     :  \\
//            |  |   |    \:   | \   |   ||
//           /    \  : :  |:   /  |__|   /|
//       N.I |     : : :_/_|  /'._\  '--|_\
//___________/___.-/_|-'###\  \############\__________
// ___________/############ '-'############\__________
// ___________/############################\___________
// ___________/############################\___________
