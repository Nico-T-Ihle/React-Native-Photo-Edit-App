import { listenerCount } from 'npm';
import React from 'react';
import {AppRegistry,Image, StyleSheet, Text, View,TextInput, TouchableOpacity, TouchableHighlight, Button, ScrollView,Linking,SafeAreaView, ImageBackground } from 'react-native';

class Socialmedia extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = {
          count: 0
        };
      }

    like = () => 
    {
        console.log("you liked the image");
    };

    share = () => 
    {
        console.log("you share the image");

    };

    render()
    {
        return(
            <ScrollView>
            <View style={styles.body}>
                <Text/>
                    <TouchableHighlight onPress={() => this.setState({ count: this.state.count + 1 })}>
                        <Image style={{height: 350, width: 320, borderRadius: 5, }} source={require('./ImageGallery/a15.jpg')} />
                    </TouchableHighlight>
                <Text style={{fontSize: 25, right: 138.04,}}> {this.state.count} </Text>
                    <Text style={{fontSize: 25, right: 112,  bottom: 32,}} onPress={this.like}>♡</Text>
                    <TextInput placeholder="comment" style={{right: 115, bottom: 41, }} /> 
                <Text/>
                
                <TouchableHighlight onPress={() => this.setState({ count: this.state.count + 1 })}>
                        <Image style={{height: 350, width: 320, borderRadius: 5, }} source={require('./ImageGallery/a15.jpg')} />
                    </TouchableHighlight>
                    <Text style={{fontSize: 25, right: 138.04,}}> {this.state.count} </Text>
                    <Text style={{fontSize: 25, right: 112,  bottom: 32,}} onPress={this.like}>♡</Text>
                    <TextInput placeholder="comment" style={{right: 115, bottom: 41, }} /> 
                <Text/>

                <TouchableHighlight onPress={() => this.setState({ count: this.state.count + 1 })}>
                        <Image style={{height: 350, width: 320, borderRadius: 5, }} source={require('./ImageGallery/a15.jpg')} />
                    </TouchableHighlight>
                    <Text style={{fontSize: 25, right: 138.04,}}> {this.state.count} </Text>
                    <Text style={{fontSize: 25, right: 112,  bottom: 32,}} onPress={this.like}>♡</Text>
                    <TextInput placeholder="comment" style={{right: 115, bottom: 41, }} /> 
                <Text/>
                <Text/>
            </View>
            </ScrollView>
        );
    }
}

export default Socialmedia;

const styles = StyleSheet.create({
    
    body: 
    {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
// ___________/############ '-'############\__________
// ___________/############################\___________
// ___________/############################\___________
// ___________/############################\____________
