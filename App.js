import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import Home from './Component/Home';
import OfflineLogin from "./Component/OfflineLogin";
import SplashScreen from 'react-native-splash-screen';
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from './Component/SignUpScreen';
import SignInScreen from './Component/SignInScreen';
// import { Platform } from 'react-native'
// import { Database } from '@nozbe/watermelondb'
// import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs'

// import schema from './models/schema';
// import migrations from './models/migrations';
// import Post from './models/Post';

const Stack = createStackNavigator();


const App = () =>  
{
  return(
    <NavigationContainer >
      <Stack.Navigator initialRouteName="OfflineLogin" screenOptions={{headerShown: false,}} >
          <Stack.Screen name="NI" component={OfflineLogin}  />
          <Stack.Screen name="SignInScreen" component={SignUpScreen}  />
          <Stack.Screen name="SignUpScreen" component={SignInScreen}  />
          <Stack.Screen name="App" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


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
