
import {AppRegistry,Image, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, Button, ScrollView,Linking,SafeAreaView, ImageBackground, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import {useState} from "react";
import { Value } from 'react-native-reanimated';
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
//Components--------------------------------------------
import createAccountScreen from './createAccountScreen';
//Bilder-------------------------------------------------

//Navigation-------------------------------------------------
import { Stack } from 'react-native-router-flux';


function SignUpScreen({ navigation }) 
{

    return(

        <View style={styles.container} >
            <View style={styles.header} >
                <Text style={styles.text_header} >Create Account</Text>
            </View>
            <Animatable.View animation="fadeInUp" style={styles.footer} >
                <Text style={styles.textEmail}  >E-Mail</Text>
                <View >
                    <TextInput style={styles.TextInput} placeholder="E-Mail"  />
                </View>

                <Text style={styles.textPassword}  >Password</Text>
                <View >
                    <TextInput style={styles.TextInput} placeholder="E-Mail" secureTextEntry={true}/>
                    {/* <TouchableHighlight style={styles.button}>
                        <Text style={styles.text1} >Sign In</Text>
                    </TouchableHighlight> */}
                    <TouchableOpacity style={styles.buttonSignIn} onPress={()=> navigation.navigate("SignInScreen")} >
                        <Text style={styles.SignInText} >Create account</Text>
                    </TouchableOpacity>
                </View>
  
            </Animatable.View>

        </View>
    );
}

export default SignUpScreen;


const styles = StyleSheet.create({

    TextInput: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: 'white',
        marginTop: 9,
          borderWidth: 1,
          borderRadius: 5,
          paddingBottom: 5,
          borderBottomColor: 'white',
          borderColor: 'white',
          marginLeft: 10,
          marginRight: 10,
      },
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
        flex: 6.5,
        top: 0,
        backgroundColor: '#3F3D56',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 10,
        bottom: 400,
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
    
      textEmail: 
      {
        color: 'white',
        left: 10,
        top: 0,
        fontWeight: '600',
        fontSize: 16,
        marginTop: 30,
        marginLeft: 10,
      },

      textPassword:
      {
        color: 'white',
        left: 10,
        top: 0,
        fontWeight: '600',
        fontSize: 16,
        marginTop: 10,
        marginLeft: 10,
      },
    
      SignInText:{
        color: 'black',
        marginTop: 5,
        left: 10,
        top: 5,
        fontWeight: 'bold'
      },
    
          
      SignUpText:{
        color: 'white',
        marginTop: 5,
        left: 10,
        top: 5,
        fontWeight: 'bold'
      },

      buttonSignIn: {
          alignItems: 'center',
          marginTop: 20,
          backgroundColor: 'white',
          height: 40,
          paddingTop: 2,
          borderRadius: 5,
          marginRight: 10,
          marginLeft: 10,
      },

      buttonSignUP: {
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: 'black',
        height: 40,
        paddingTop: 2,
        borderRadius: 5,
        marginRight: 10,
        marginLeft: 10,
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
      },

      text_header:{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 30,
          right: 80,
          
      },
    
      action: 
      {
          flexDirection: 'row',
          marginTop: 10,
          borderWidth: 1,
          borderRadius: 5,
          paddingBottom: 5,
          borderBottomColor: 'white',
          borderColor: 'white',
          marginLeft: 10,
          marginRight: 10,
          color: 'white',
        
      },
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
