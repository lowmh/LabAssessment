import React, { useState, useEffect} from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen({navigation}){
    
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');

    useEffect(()=>{
        getData();
    }, []);

    const getData= async()=>{
        try{
            AsyncStorage.getItem('Username')
            .then(value=>{
                if(value != null){
                    setUsername(value);
                }
            });
            AsyncStorage.getItem('Password')
            .then(value=>{
                if(value != null){
                    setPassword(value);
                }
            });
        }catch(error){
            console.log(errorS)
        }
    }

    const setData = async() =>{
        if(username!='utar'|| password!='1234'){
            alert('Error')
        }else{
            alert('Successful Login')
            try{
                await AsyncStorage.setItem('Username',username);
                await AsyncStorage.setItem('Password',password);
            }catch(error){
                console.log(error)
            }
        }
    }

    const clearStorage = async () => {
        try {
          await AsyncStorage.removeItem('Username')
          await AsyncStorage.removeItem('Password')
          alert('Successfully cleared!')
        } catch (e) {
          alert('Failed to clear')
        }
      }
   
    return (
        <View style={{ flex: 1, blackgroundColor: 'gray', alignItems: 'center', marginTop:35 }}>
            <Image source={require("./NecessaryItems/utar-logo.png")}/>
            <TextInput style={{heigh:40, width:'90%',borderRadius:20, borderColor:'black', borderWidth:2, padding:10, margin:10}}
            placeholder="Enter Username"
            placeholderTextColor="#003f5c"
            onChangeText={(value)=>setUsername(value)}
            autoCapitalize="none">{username}
            </TextInput>

            <TextInput style={{heigh:40, width:'90%',borderRadius:20, borderColor:'black', borderWidth:2, padding:10, margin:10}}
            placeholder="Enter Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(value)=>setPassword(value)}>{password}
            </TextInput>

        <TouchableOpacity
        style={{width:200, height:50, blackgroundColor:'deepskyblue', textAlign:'center', borderRadius:40, alignItems: 'center', justifyContent: 'center', marginTop:10}}
        onPress={setData} style={{margin: 10, padding: 10, backgroundColor: 'deepskyblue'}}>
        <Text style={{fontSize: 18, color: '#444'}}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={{width:200, height:50, blackgroundColor:'deepskyblue', textAlign:'center', borderRadius:40, alignItems: 'center', justifyContent: 'center', marginTop:10}}
        onPress={clearStorage} style={{margin: 10, padding: 10, backgroundColor: 'deepskyblue'}}>
        <Text style={{fontSize: 18, color: '#444'}}>Clear cache</Text>
        </TouchableOpacity>
        </View>
    );
    
};
