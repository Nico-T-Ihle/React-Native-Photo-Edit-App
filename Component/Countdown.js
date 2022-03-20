import React, { Component } from 'react';
import { Text, View, StyleSheet,TouchableOpacity, Alert, SafeAreaView,ScrollView  } from 'react-native';
import { Image,Button } from 'react-native';
import  Countdown  from '@freakycoder/react-native-countdown';
import moment from "moment";
import CountDown from 'react-native-countdown-component';
import {BoxShadow} from 'react-native-shadow'
import AsyncStorage from '@react-native-async-storage/async-storage';
import YouTube from 'react-native-youtube';
import YoutubeIframe from 'react-native-youtube-iframe';

class Homepage extends Component 
{   

   constructor(props) 
    {
      super(props);
      this.state = {
        start: moment(1578240964000),
        end: moment(1578240964000),
         show: false,
         time: 4,
      };
    };

    stopcountdown = async(text) => 
    {
    await Alert.alert(
          "Do you want to stop the countdown",
          "Yes or No",
          [
            {text: "No", onPress: () => {if (text ="No")
              {
                console.log("Es wird kein video abgespielt!"); 
              };
          }},
          
            {text: "Yes", onPress: () => {if (text ="yes")
              {
                  this.setState((previousState) => 
                  {
                    return ({show: !previousState.show,}) });
                    console.log("Das Video wird abgespielt!");
                  };
            }  },
          ]
        );
    };
    
  restartCountdown = () => 
  {
    this.setState({
    });
    //this Function is for restarting or it should be 
    console.log("We start with a classic console.log");
  };  

  render() 
  {
  var v = this. state. show ? <YoutubeIframe style={styles.VideoStyle} height={300} width={300} videoId={'L_jWHffIx5E'} loop/>: null; //menu
  return (
    <ScrollView  >
      <View >
        <Text/> 
        <View >
          <CountDown until={this.state.time} style="black" onFinish={this.stopcountdown}  size={19} />
        </View>
        <Text/>
          {/* <Image source={{uri: 'https://i.ytimg.com/vi/4lhJllc9jNc/maxresdefault.jpg'}} style={{width: 200, height: 200, }} /> */}
        <Text/>  
        <SafeAreaView style={styles.VideoStyle}>
            <View>
              <TouchableOpacity onPress={() => this.stopcountdown()}>
                <View>
                    {/* <Text style={styles.button} > Click me </Text > */}
                </View>
              </TouchableOpacity>
                  {v}
            </View>
                {/* <Image source={require('./Icon.jpg')} /> */}
        </SafeAreaView>
      </View>
    </ScrollView >
      );
    }
  }

export default Homepage;

const styles = StyleSheet.create({

  countdown: 
  {
    color: 'black',
    fontSize: 25,
  },

  VideoStyle:
  {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    top: 40,
   
  },

  button: 
  {
    color: 'white',
    width: 100,
    height: 40,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center', 
  },

  countdown:
  {
    marginHorizontal: "20%",
    minWidth: "0%",
  }, 
  
  constainer: 
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a3acf3',
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
// ___________/############################\____________