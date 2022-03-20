



//React-Native basic Imports 
import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  {View, Text, Button, StyleSheet, TouchableOpacity, Image,Alert, GoogleMaps} from 'react-native';
import {useState} from "react";
import Home from "../Component/Home"
import Post from "../Component/Post";
import Settings from "../Component/Setttings";
import Gallery from '../Component/Gallery';
import CountDown from '../Component/Countdown';
import Login from '../Component/Login';
import OfflineLogin from '../Component/OfflineLogin';
import Mapsforall from '../Component/map';
import Todo from '../Component/todo';
import { LinearTextGradient } from "react-native-text-gradient";
import ImgToBase64 from 'react-native-image-base64';
import axios from 'axios';
import PermissionsAndroid  from 'react-native';
import Camera from '../Component/Camera';
import { createStackNavigator } from '@react-navigation/stack';

// Database
import SQLite from 'react-native-sqlite-storage';

const Stack = createStackNavigator();

const db = SQLite.openDatabase(
    {
        name: 'MainDB',
        location: 'default',
    },
    () => {},
    error => {console.log(error)}
);

const createTable = () => 
{
    db.transaction((tx) => 
    {
        tx.executeSql(
           "CREATE TABLE IF NOT EXISTS"
           +"Users"
           +"(ID Integer PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTERGER);"
        )
    })
};

const _handleReaderLoaded = async () => 
{
  await ImgToBase64.getBase64String(this.state.imagePath)
    .then(base64String => 
    {
        this.setState({
            base64: base64String,
        })   
    })
    .catch(err => 
    {
        console.log("CONVERT BASE 64 ERR "+ err);
    })
};

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
    
    <TouchableOpacity style={{top: -30, justifyContent: 'center', alignItems: 'center', ...style.shadow}} >
        <View style={{width: 50, height: 50, borderRadius: 18, backgroundColor: '#d4d4d4', }} >
            {children}
        </View>
    </TouchableOpacity>
);

const Tabs = () => 
{
    return(
         <Tab.Navigator screenOptions={{
            "headerShown": false,
            "tabBarShowLabel": false,
            "tabBarStyle": [
              {
                'backgroundColor' : 'black',
                'position' : 'absolute',
                'left' : 0,
                'right' : 0,
                'elevation' : 0,
                'backgroundColor' : '#ffffff',
                'height' : 60,
                'bottom' : 0,
                //with ... you can use your StyleSheet
                ...style.shadow,
              },
              null
            ] }} >

            <Tab.Screen name="OfflineLogin" component={OfflineLogin} options={{tabBarIcon: ({focused}) => 
            (
                <View>
                    <Image source={require('../Component/ImageGallery/Peepo.png')} style={{width: 28, height: 30, top: 5,   }} resizeMethod="scale"  />
                    <Text  style={{fontSize: 12,}} >Login</Text>
                </View>
            ), }} />

            <Tab.Screen headerShow name="Squid" component={Home} options={{tabBarIcon: ({focused}) => 
            (
                    <View>
                        <Image source={require('./AppHomeIcon.png')} style={{width: 25, height:25, left: 2,  }} resizeMethod="scale"  />
                        <LinearTextGradient style={{ fontWeight: "bold", fontSize: 12 }} locations={[0, 1]}colors={["grey", "black", ]}start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                            <Text>Home</Text>
                        </LinearTextGradient>
                    </View>
            ), }} />
           
            <Tab.Screen name="Squid-Camera" component={Camera} options={{tabBarIcon: ({focused}) => (
                    <View>
                        <Image source={require('./kamera.png')} style={{width: 25, height:25, left: 8, }} resizeMethod="scale"  />
                        <LinearTextGradient style={{ fontWeight: "bold", fontSize: 12 }} locations={[0, 1]}colors={["grey", "black", ]}start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}>
                            <Text>Camera</Text>
                        </LinearTextGradient>
                    </View>
            ), }} />

            <Tab.Screen name="Squid-Todo" component={Todo} options={{tabBarIcon: ({focused}) => (
                <View>
                    <Image source={require('./folder.png')} style={{width: 25, height:25, left: 2,  }} resizeMethod="scale"  />
                        <LinearTextGradient style={{ fontWeight: "bold", fontSize: 12 }} locations={[0, 1]}colors={["grey", "black", ]}start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                        <Text>Todo</Text>
                    </LinearTextGradient>
                </View>
            ), }} />

           <Tab.Screen name="Squid-Settings ⚙️" component={Settings} options={{tabBarIcon: ({focused}) => (
                <View>
                    <Image source={require('./Settings.png')} style={{width: 25, height:25, left: 8,  }} resizeMethod="scale"  />
                    <LinearTextGradient style={{ fontWeight: "bold", fontSize: 12 }} locations={[0, 1]}colors={["grey", "black", ]}start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                        <Text>Settings</Text>
                    </LinearTextGradient>
                </View>
            ), }} />

            <Tab.Screen name="CountDown" component={CountDown} options={{tabBarIcon: ({focused}) => 
            (
                <View>
                    <Image source={require('./clock.png')} style={{width: 25, height:25,   }} resizeMethod="scale"  />
                    <Text  style={{fontSize: 12,}} >Clock</Text>
                </View>
            ), }} />

        <Tab.Screen name="Login" component={Login} options={{tabBarIcon: ({focused}) => 
            (
                <View>
                    <Image source={require('../Component/ImageGallery/Peepo.png')} style={{width: 28, height: 30, top: 5,   }} resizeMethod="scale"  />
                    <Text  style={{fontSize: 12,}} >Login</Text>
                </View>
            ), }} />

        </Tab.Navigator>
    );
}

export default Tabs; 

const style = StyleSheet.create({

    container: 
    {
        
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
// ___________/############################\____________
// ___________/############################\____________
// ___________/############################\_____________
// ___________/############################\_____________