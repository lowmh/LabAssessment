import React, {} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

export default function ShowLocationScreen(){
    return(
        <View style={styles.Container}>
                <MapView
                style={styles.maps}
                provider={PROVIDER_GOOGLE}
                region={{
                latitude: 4.3364,
                longitude: 101.142,
                latitudeDelta: 0.000,
                longitudeDelta: 0.000,
                }}>
                </MapView>
            <View style={styles.kampar}>
                <TouchableOpacity style={styles.KamparButton}  ><Text>Kampar</Text></TouchableOpacity>

            </View>
            <View style={styles.sungaiLong}>
                <TouchableOpacity style={styles.SungaiLongButton} ><Text>SungaiLong</Text></TouchableOpacity>
            </View>

        </View>
    );
};

const styles=StyleSheet.create({
  Container:{
      flex:1,
      flexDirection:"row",
      marginTop: 15,
      justifyContent:'space-around'
  },

  KamparButton:{
      alignItems: "center",
      backgroundColor: "grey",
      padding: 10
  },
  SungaiLongButton:{
      alignItems: "center",
      backgroundColor: "grey",
      padding: 10
  },

  maps:{
    ...StyleSheet.absoluteFillObject,
  },
})