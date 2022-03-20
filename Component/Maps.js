

import {AppRegistry,Image, StyleSheet, Text, View,TextInput, TouchableOpacity, TouchableHighlight, Button, ScrollView,Linking,SafeAreaView, ImageBackground } from 'react-native';
import React, { useState } from 'react';


export default function Maps() 
{
    const [count, Setcount] = useState(100);
    const [shouldShow, setShouldShow] = useState(false);


        return(
            <View>
              <Text style={styles.watermelon}>WatermelonDB</Text>
              <Text>you clicked {count}</Text>
              <Button title="count" onPress={()=> Setcount(count- 1)} >click me </Button>
              <Button title="count" onPress={()=> Setcount(count+ 1)} >click me </Button>
                {shouldShow ? (<Text>IDK just a show and hide function</Text>) : null}
              <Button title="Hide/Show Component" onPress={() => setShouldShow(!shouldShow)}/>
            </View>
         );         
     }
    
    const styles = StyleSheet.create({

        watermelon: 
        {
          color: 'green',
          fontSize: 30,
          justifyContent: 'center',
          textAlign: 'center',
          top: 20,
        },
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
// __________/############ '-'############\__________
// ___________/############################\__________
// __________/############################\__________