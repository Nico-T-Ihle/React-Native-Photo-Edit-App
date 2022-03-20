import React from 'react';
import  {View, Text, Button, StyleSheet, TouchableOpacity, Image, Switch,} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  { useState } from 'react';

function Profile({ navigation }) 
{
    return (
    <ScrollView >
      <View >
            <Text/>
                <TouchableOpacity  >
                    <Text ></Text>
                </TouchableOpacity>
            <Text/>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')} >
                    <Text style={styles.ListButtons} >Profile</Text>
                </TouchableOpacity>
            <Text/>
                <TouchableOpacity onPress={() => navigation.navigate('Theme')} >
                    <Text style={styles.ListButtons}>Theme</Text>
                </TouchableOpacity>
            <Text />
                <TouchableOpacity onPress={() => navigation.navigate('Passwort')} >
                    <Text style={styles.ListButtons}>Passwort</Text>
                </TouchableOpacity>
            <Text />
            <TouchableOpacity onPress={() => navigation.navigate('Abo')} >
                    <Text style={styles.ListButtons}>Abo</Text>
                </TouchableOpacity>
            <Text />
        </View>
    </ScrollView>
    );
  };
  //Children (Unterseite von den buttons oben)
  function DetailsScreen({ navigation }) 
  {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
        <Image style={{height: 150, width: 150, borderRadius: 100, bottom: 60, }} source={require('./ImageGallery/a15.jpg')} />
    <Text/>
        <Text onPress={ChnageProfile} style={{fontSize: 18, color: 'black', bottom: 57, }} >Change Profile</Text>
    <Text/>
        <Text onPress={ChangeName} style={{fontSize: 18, color: 'black', bottom: 69,}} >Change name</Text>   
    <Text/>
        <Text onPress={ChangeBio} style={{fontSize: 18, color: 'black', bottom: 84, }} >Change Bio</Text>
      </View>
    );
  };

  function Theme({ navigation }) 
  {
    return (
      <View style={{ flex: 1, justifyContent: 'center',  }}>
        <Text  style={{fontSize: 15, color: 'black', left: 120, color: 'white'}}> Dark mode </Text>
        <Switch  style={{ right: 110, bottom: 25 }} />
      </View>
    );
  };

  function Abo({ navigation }) 
  {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <TouchableOpacity>
            <Text style={{fontSize: 16, color: 'white'}} >Abo</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  function Passwort({ navigation }) 
  {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  }}>
        <Text style={{ fontSize: 15, color: 'white', }} >Change Passwort</Text>
      </View>
    );
  };

  //Database localstorage 
    const ChnageProfile = () => 
    {
      console.log("You still need a Database to create a Profile");
    };

    const ChangeName = () => 
    {
        console.log("Change name");
    };

    const ChangeBio = () => 
    {
        console.log("Change Bio");
    };

    const SwitchFunction = (darkmode) => 
    {
        if(darkmode !== 'true') 
        { 
            console.log("Dark mode is on")
        }
        else 
        {
            console.log("yoyo just do nothing")
        }
    };

const Stack = createStackNavigator();

    const Bilder = ({}) => 
    {    
        return(
            <Stack.Navigator   initialRouteName="Home">
              <Stack.Screen  options={{headerShown: false}} name="Logout" component={Profile} />
              <Stack.Screen name="Profile" component={DetailsScreen} />
              <Stack.Screen name="Theme" component={Theme} />
              <Stack.Screen name="Passwort" component={Passwort} />
              <Stack.Screen name="Abo" component={Abo} />
            </Stack.Navigator>
        );
    }
    export default Bilder;

    const styles = StyleSheet.create({

    constainer: 
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#a3acf3',
    },
    
    ListButtons: 
    {
      backgroundColor: '#2C2B2B', width: 300, height: 50,
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: 18,
      borderRadius: 7,
      color: 'white',
      left: 57,
      justifyContent: 'center',
      marginBottom: 13,
      height: 40,
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