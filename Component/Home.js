import React from 'react';
import { Dimensions } from 'react-native';
import {AppRegistry,Image, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, Button, ScrollView,Linking,SafeAreaView, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import { LinearTextGradient } from "react-native-text-gradient";
import Camera from './Camera';
import Todo from '../Component/todo';
import Settings from "../Component/Setttings";
import Login from '../Component/Login';
import CountDown from '../Component/Countdown';
import Socialmedia from './Socialmedia';
import Maps from './Maps';

class Home extends React.Component 
{
  constructor(props) 
  {
    super(props);
  }; 
  CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity onPress={this.openCamera } style={{top: -30, justifyContent: 'center', alignItems: 'center'}} >     
        <View style={{width: 65, height: 65, borderRadius: 30, backgroundColor: 'black', }} >
            {children}
        </View>
    </TouchableOpacity>
);

  render() 
  {
    const Tab = createBottomTabNavigator();

    return (
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
            // 'backgroundColor' : 'black',
            'height' : 70,
            'width' :330,
            'bottom' : 15,
            'left' : 40,
            'borderRadius' : 10,
            // with ... you can use your StyleSheet
            // ...style.shadow,
          },
          null
        ] }} >
          <Tab.Screen name="Socialmedia" component={Socialmedia} options={{tabBarIcon: ({focused}) => (
              <View>
                  <Image source={require('../navigation/finalHome.png')} style={{width: 30, height: 30, top: 2, left: 1, }} resizeMethod="scale"  />
                  <LinearTextGradient style={{ fontWeight: "bold", fontSize: 12, top: 2, }} locations={[0, 1]}colors={["white", "white", ]}start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                      <Text>Home</Text>
                </LinearTextGradient>
              </View>
              ), }} />

          <Tab.Screen  name="Squid" component={Camera} options={{tabBarIcon: ({focused}) => (
                  <View>
                        <Image source={require('../navigation/kamera.png')} style={{width: 30, height: 30, top: 2, left: 4, }} resizeMethod="scale"  />
                      <LinearTextGradient style={{ fontWeight: "bold", fontSize: 12, top: 2, }} locations={[0, 1]}colors={["white", "white", ]}start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}>
                          <Text>Camera</Text>
                      </LinearTextGradient>
                  </View>
              ), }} />

            <Tab.Screen name="ToDo" component={Todo} options={{tabBarIcon: ({focused}) => (
                  <View >
                        <Image source={require('../navigation/folder.png')} style={{width: 30, height: 30, top: 2, }} resizeMethod="scale"  />
                      <LinearTextGradient style={{ fontWeight: "bold", fontSize: 12, top: 2, }} locations={[0, 1]}colors={["white", "white", ]}start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}>
                          <Text>ToDo</Text>
                      </LinearTextGradient>
                  </View>
                ), }}  />
                  
                <Tab.Screen name="Watermelondb" component={Maps} options={{tabBarIcon: ({focused}) => 
                  (
                <View>
                    <Image source={require('../Component/ImageGallery/watermelon.png')} style={{width: 30, height: 30, top: 2, }} resizeMethod="scale"  />
                    <LinearTextGradient style={{ fontWeight: "bold", fontSize: 12, top: 2, }} locations={[0, 1]}colors={["white", "white", ]}start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                      <Text>DB</Text>
                  </LinearTextGradient>
                </View>
                  ), }} />

              <Tab.Screen name="CountDown" component={CountDown} options={{tabBarIcon: ({focused}) => 
                (
                  <View>
                    <Image source={require('../navigation/time.png')}  style={{width: 30, height: 30, top: 2, right: 1, }} resizeMethod="scale"  />
                    <LinearTextGradient style={{ fontWeight: "bold", fontSize: 12, top: 2, }} locations={[0, 1]}colors={["white", "white", ]}start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}>
                          <Text>clock</Text>
                      </LinearTextGradient>
                </View>
                    ), }} />

            <Tab.Screen name="Squid-Settings ⚙️" component={Settings} options={{tabBarIcon: ({focused}) => (
              <View>
                  <Image source={require('../navigation/settings.png')} style={{width: 30, height: 30, top: 3, left: 4, }} resizeMethod="scale"  />
                  <LinearTextGradient style={{ fontWeight: "bold", fontSize: 11, top: 3, }} locations={[0, 1]}colors={["white", "white", ]}start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                      <Text>Settings</Text>
                  </LinearTextGradient>
              </View>
                ), }} />

            <Tab.Screen name="Login" component={Login} options={{tabBarIcon: ({focused}) => 
              (
                <View>
                    <Image source={require('../navigation/icon.png')} style={{width: 30, height: 30, top: 2, }} resizeMethod="scale"  />
                    <LinearTextGradient style={{ fontWeight: "bold", fontSize: 12, top: 2, }} locations={[0, 1]}colors={["white", "white", ]}start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                      <Text>Login</Text>
                  </LinearTextGradient>
                </View>
                  ), }} />

            </Tab.Navigator>
          );
        }
  }

class ContainerView extends React.Component 
{
  constructor(props) 
  {
    super(props);
  }

render() 
{
    return(
      <ScrollView style={styles.scrollViewStyle}>
          <View>
            <Text/>
            <Text/>
          </View>
      </ScrollView>
    );
  }
}

export default Home;
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
// __________/############ '-'############\__________
// ___________/############################\__________
// __________/############################\__________

