
import React, { Component } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { LinearTextGradient } from "react-native-text-gradient";

export default class Camera extends Component 
{
  constructor() 
  {
    super();
    this.state = {
      image: null,
      images: null,
    };
  }

  pickSingleWithCamera(cropping, mediaType = 'photo') 
  {
    ImagePicker.openCamera({
      cropping: cropping,
      width: 500,
      height: 500,
      includeExif: true,
      mediaType,
    })
      .then((image) => 
      {
        console.log('received image', image);
        this.setState({
          image: 
          {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime,
          },
          images: null,
        });
      })
      .catch((e) => alert(e));
  }

  pickSingleBase64(cropit) 
  {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: cropit,
      includeBase64: true,
      includeExif: true,
    })
      .then((image) => 
      {
        console.log('received base64 image');
        this.setState({
          image: 
          {
            uri: `data:${image.mime};base64,` + image.data,
            width: image.width,
            height: image.height,
          },
          images: null,
        });
      })
      .catch((e) => alert(e));
  }

  cleanupImages() 
  {
    ImagePicker.clean()
      .then(() => 
      {
        console.log('removed tmp images from tmp directory');
      })
      .catch((e) => 
      {
        alert(e);
      });
  }

  pickSingle(cropit, circular = false, mediaType) 
  {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: cropit,
      cropperCircleOverlay: circular,
      sortOrder: 'none',
      compressImageMaxWidth: 1000,
      compressImageMaxHeight: 1000,
      compressImageQuality: 1,
      compressVideoPreset: 'MediumQuality',
      includeExif: true,
      cropperStatusBarColor: 'white',
      cropperToolbarColor: 'white',
      cropperActiveWidgetColor: 'white',
      cropperToolbarWidgetColor: '#3498DB',
    })
      .then((image) => 
      {
        console.log('received image', image);
        this.setState({
          image: 
          {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime,
          },
          images: null,
        });
      })
      .catch((e) => {
        console.log(e);
        Alert.alert(e.message ? e.message : e);
      });
  }

  scaledHeight(oldW, oldH, newW) 
  {
    return (oldH / oldW) * newW;
  }

  renderImage(image) 
  {
    return (
      <Image
        style={{ width: 300, height: 300, resizeMode: 'contain' }}
        source={image}
      />
    );
  }

  renderAsset(image) 
  {
    if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
      return this.renderVideo(image);
    }

    return this.renderImage(image);
  }

  render() 
  {
    return (
      <View style={styles.container}>
          
          {/* Display Image */}
          <ScrollView>
            {this.state.image ? this.renderAsset(this.state.image) : null}
            {this.state.images? this.state.images.map((i) => (<View key={i.uri}>{this.renderAsset(i)}</View> )): null}
          </ScrollView>

        <ScrollView>
          <TouchableOpacity onPress={() => this.pickSingle(true)} style={styles.button}>
            <LinearTextGradient style={{ fontWeight: "bold",  fontSize: 20, textAlign: 'center',  justifyContent: 'center',top: 10, }} locations={[0, 1]}colors={["#ae07d8", "#a3acf3", ]}start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                <Text>Bild bearbeiten</Text>
            </LinearTextGradient>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => this.pickSingleWithCamera(false)}  style={styles.button} >
            <Text style={styles.text}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pickSingle(false)} style={styles.button} >
            <LinearTextGradient style={{ fontWeight: "bold",  fontSize: 20, textAlign: 'center',  justifyContent: 'center', top: 10, }} locations={[0, 1]}colors={["#ae07d8", "#a3acf3", ]}start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                <Text>Display-Image</Text>
            </LinearTextGradient>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  button: 
  {
    backgroundColor: 'black',
    marginBottom: 10,
    height: 49,
    borderRadius: 8,
    width: 230,
  },

  text: 
  {
    color: 'white',
    fontSize: 21,
    textAlign: 'center',
    justifyContent: 'center',
    top: 10,
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
