import React, { useState, useEffect } from 'react';
import {AppRegistry,Image, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, Button, ScrollView,Linking,SafeAreaView, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Input } from 'react-native-elements/dist/input/Input';
import Tts from 'react-native-tts';
import { TextInput } from 'react-native-gesture-handler';
import HeaderImage from './ImageGallery/undraw_Mobile_login_re_9ntv.png';
import { tSExportAssignment } from '@babel/types';


const Login = () => 
{
  
  const save = async() => {
    try {
      await AsyncStorage.setItem("MyName", name);
    }
    catch(err)
    {
      alert(err);
    }
  };

  const load = async () => {
    try{
      let name = await AsyncStorage.getItem("MyName");
      if(name !== null){
        setname(name);
      }
    } catch(err) {
      alert(err);
    }
  };

  const remove = async() => 
  {
    try{

      await AsyncStorage.removeItem("MyName")

    }catch(err){
      alert(err)
    } finally{
      setname("");
    }
  }

  useEffect(()=>{
    load();
  }, []);

  const [name, setname] = useState();

    return(        
    <View style={styles.container} >

      <Image source={HeaderImage} style={{height: 260, width: "95%"}} />

      <Text style={{height: 30}} > {name} </Text>
      <Text style={styles.name}>What's your name?</Text>

      <TextInput style={styles.input}  placeholder="Name" onChangeText={(text) => setname(text)} />

      <TouchableOpacity style={styles.button} onPress={save} >
        <Text style={{color: "white"}} >Save my Name</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={()=> remove()} >
        <Text style={{color: "white"}} >Remove my Name</Text>
      </TouchableOpacity>
    </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    
  container: 
  {
    flex:1,
    backgroundColor: "#fff",
    alignItems: 'center',
  },

  name: {
    fontSize: 24,
    fontWeight: "300",
  },

  input: 
  {
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: "stretch",
    margin: 51,
    height: 54, 
    borderRadius: 6,
    paddingHorizontal: 16,
    fontSize: 20,
    fontWeight: "300",
  },
  button: {
    backgroundColor: "#575DD9",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 32,
    marginHorizontal: 52,
    borderRadius: 6,
  }

});

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
