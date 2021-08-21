import * as React from 'react';
import { Image,Button, View,SafeAreaView, TouchableOpacity, TextInput, Text } from 'react-native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './LoginScreen';
import ShowInMapScreen from './ShowInMapScreen';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Drawer.Navigator 
      initialRouteName="Home" 
      drawerContent={(props) => {
        return (
          <SafeAreaView style={{ flex: 1 }}>
            <View
              style={{
                height: 200,
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              <Image
                source={require("./NecessaryItems/utar-logo.png")}
                width={50}
                height={50}
              />
            </View>
            <View style={{ blackgroundColor: 'Black', alignItems: 'center', marginBottom:10 }}><Text style={{fontSize: 18, color: '#444'}}>UTAR</Text></View>
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}>

<Drawer.Screen name="Login" component={LoginScreen} options={{
           title: 'Login',
           drawerIcon: () => (
              <Image
              source={require("./NecessaryItems/login_icon.png")}
              style={[{ height: 20, width: 20 }]}
              />
           ),
        }}/>
        <Drawer.Screen name="ShowInMap" component={ShowInMapScreen} 
        options={{
          title: 'ShowInMap',
          drawerIcon: () => (
             <Image
             source={require("./NecessaryItems/map_icon.png")}
             style={[{ height: 25, width: 20 }]}
             />
          ),
       }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}