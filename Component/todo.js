import React from 'react';
import { Alert, Dimensions } from 'react-native';
import {AppRegistry,Image, StyleSheet,useState, Text, View, TouchableOpacity, TouchableHighlight, Button, ScrollView,Linking,SafeAreaView, ImageBackground } from 'react-native';
import { ListItem } from 'react-native-elements/dist/list/ListItem';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearTextGradient } from "react-native-text-gradient";

const COLORS = {primary: '#1f145c', white: '#fff'}

const Todo = () => 
{
    const [textInput, setTextInput] = React.useState('');
    const [todos, setTodos] = React.useState([]);

    const ListItem = ({todo}) => 
    {
        return (
            <View style={styles.ListItem} >
                <View style={{ flex: 1, }} >
                  
                    <Text style={{fontWeight: 'bold', fontSize: 15, color: COLORS.primary, textDecorationLine: todo?.completed?"line-through" : "none"}} > {todo?.task} </Text>
                </View>
                {
                    !todo?.completed && 
                    (
                        <TouchableOpacity onPress={() => markTodoComplete(todo?.id) } style={styles.actionIcon} >
                        <Icon color="white" height="25" width="25" />
                    </TouchableOpacity>
                    )
                }
                <TouchableOpacity onPress={ () => deleteTodo(todo?.id) } style={styles.DeleteIcon} >
                  
                </TouchableOpacity>

            </View>
        );
    }

    const addTodo = () => 
    {
        try 
        {
            if(textInput == "")
        {
            Alert.alert("Error", "Pleas add a note ")
        }
        else
        {
            console.log(textInput);
             const newTodo =  {
                id:Math.random(),
                task: textInput,
                completed: false,
            };
            
            setTodos([...todos,newTodo]);
            setTextInput('');
        }

        } catch(error) {
            
            console.log(error);
        }        
    };

    const markTodoComplete = todoId => 
    {
        const newTodos = todos.map((item) => {
            if(item.id == todoId)
            {
                return{...item,completed: true};
            }
            return item;
        });
        setTodos(newTodos);
    };

    const deleteTodo = (todoId) => 
    {
        const newTodo = todos.filter(item => item.id != todoId);
        setTodos(newTodo);
    };

    return(        
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}} >
            <View style={styles.header} >
                <LinearTextGradient style={{ fontWeight: "bold", fontSize: 30 }} locations={[0, 1]}colors={["black", "#00aeff", ]}start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}>
                <Text>TODO APP </Text>
            </LinearTextGradient>
            <Text style={{right: 193, top: 30, fontSize: 11, }} >You can add notes here </Text>
                {/* <Icon name="add" size={25} color="red" /> */}
            </View>
            {/* List elemente die geaddet werden*/}
            <FlatList showsVerticalScrollIndicator={false} contentContainerStyle={{padding: 20, paddingBottom: 100,}} data={todos} renderItem={({item})=><ListItem todo={item} />} />

            <View style={styles.footer} >
                <View style={styles.inputContainer}>
                    <TextInput placeholder="Add Todo" value={textInput} onChangeText={(text)=>setTextInput(text)} />
                </View>
                <TouchableOpacity onPress={addTodo} >
                    <View style={styles.iconContainer} >
                        <Image source={require('../navigation/add-128.png')} style={{height: 25, width: 25,}}  />
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Todo;

const styles = StyleSheet.create({
    
    DeleteIcon: 
    {
        height: 24,
        width: 24, 
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        borderRadius: 3,
    },

    actionIcon: 
    {
        height: 24,
        width: 24, 
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        borderRadius: 3,
    },

    ListItem: 
    {
        padding: 20,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        elevation: 12,
        borderRadius: 7,
        marginVertical: 10,
    },

    header:
    {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    footer: 
    {
        position: 'absolute',
        bottom: 52,
        color: 'black',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        right: 3,
    },  

    inputContainer:
    {
        backgroundColor: COLORS.white,
        elevation: 40,  
        flex: 1,
        height: 50,
        marginVertical: 20,
        marginRight: 20,
        borderRadius: 30,
        paddingHorizontal: 20,
        marginLeft: 30,
     
    },

    iconContainer:
    {
        height: 50,
        width: 50,
        backgroundColor: 'black',
        borderRadius: 25,
        elevation: 40,
        justifyContent: 'center',
        alignItems: 'center',

    }
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



