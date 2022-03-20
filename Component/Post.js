import React from 'react';
import {AppRegistry,Image, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, Button, ScrollView, FileList, Alert,Vibration, TextInput, closeSheet, Sheet, } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImagePicker, { openPicker } from 'react-native-image-crop-picker';
import PermissionsAndroid  from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { color, set } from 'react-native-reanimated';
import ImgToBase64 from 'react-native-image-base64';
import axios from 'axios';
import { data } from 'browserslist';


export default class Camera extends React.Component 
{
  constructor(props) 
  {
    super(props);
    this.state = {
      resourcePath: {},
      base64:null,
      imagePath:null,
      cropItem: [],
      image: [],
      items: [],
      show: false,
      TheFinishedCroppedItem: [],
        crop: {
            x:null,
            y:null,
            height:null,
            width:null
        },
    };
  }

  openCamera = () => 
  {
    console.log("you should be in the camera"+ this.imagePath)
    var options = 
    {
      title: 'Take a Photo',
      customButtons: [
        { 
          name: 'customOptionKey', 
          title: 'Choose file from Custom Option' 
        },
      ], 
      storageOptions: 
      {
        skipBackup: true,
        path: './ImageGallery',
      },
    };
 
    launchCamera(options, (response) => 
    { 
      console.log('BildInformation = ', response);
      console.log('image-Path' + JSON.stringify( options ));
    
      if (response.didCancel) 
      {
      console.log('User cancelled image picker');
      } else if (response.error) 
      {
      console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) 
      {
      console.log('User tapped custom button: ', response.customButton);
      } 
      else 
      {
      console.log("Aufgenommenes Bild"+ JSON.stringify(ImagePicker))
      const source = { uri: response.uri};
      }
    });
  };

  selectImageCrop = () => 
  {
    ImagePicker.openPicker({
      width: 350,
      height: 700,
      cropping: true,
      freeStyleCropEnabled: true,
    }).then(image => {
        onFileSelected(image);
        console.log(" test test");

      }).catch(err => 
        {
          console.log("error " + err);
        });
  };

  _handleReaderLoaded = async () => 
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

  selectFile = () => 
  {
    ImagePicker.openPicker({
        width: 350,
        height: 700,
        cropping: true, 
        freeStyleCropEnabled: true,
    }).then(image => 
      {
        var data=null;
        this.setState({
            imagePath:image.path,
            crop:{
                x:image.x,
                y:image.y,
                height:image.height,
                width:image.width
            }
        }, 
        async () => 
        {
          await this._handleReaderLoaded();
          data = {ImageValue: this.state.crop, image:(this.state.base64), api:(1) };
          console.log("DATA: "+ JSON.stringify(data.image)); 
          this.setState({
            cropItem: data.image,
            show: true,
          });
          console.log("this should be the Image" + JSON.stringify(image));
        }); 
    });  
} 

render() 
  {
    const onFileSelected=(images) => 
    {
      closeSheet();
      console.log('images', images);
      console
    }

    const { cropItem } = this.setState;
    const DisplayImageAPI = this.state.show ? <Image  style={styles.NewImage} source={{uri: "data:image/jpg;base64," + cropItem}} /> : null;
    return (
          <ScrollView style={{backgroundColor: '#a3acf3'}} >
        <Text/>
            <TouchableOpacity style={styles.newButton} onPress={this.openCamera} >
               <Text style={styles.buttonText}> Camera </Text>
            </TouchableOpacity>
                <Text></Text>
            <TouchableOpacity style={styles.newButton} onPress={this.selectFile} >
               <Text style={styles.buttonText}> Crop Image </Text>
            </TouchableOpacity>
      <Text/>
            <View>
        <ScrollView horizontal={true} >
                  {DisplayImageAPI}
                </ScrollView>
            </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  input: 
  {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },

  body: 
  {
      backgroundColor: 'red',
  },

  empty: 
  {
      fontSize: 20,
      color: 'black',
  },

  button: 
  {
      borderWidth: 1,
      backgroundColor: '#15C7FD',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      marginBottom:12,
  },

  NewImage:
  {
      width: 350,
      height: 700,
      left: 10,
      backgroundColor: 'lightgrey',
  },

  croppedImageText: 
  {
      left: 100,  
  },

  CameraButtonStyle: 
  {
    backgroundColor: 'blue'
  },

  newButton: 
  {
    backgroundColor: 'black',
    height: 50,
    width: 200,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    left: 85,
  }, 

  buttonText:
  {
    color: 'white'
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
// ___________/############################\_____________
// ___________/############################\_____________