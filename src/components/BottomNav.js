import React from 'react';
import { StyleSheet,View,TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { COLORS, routes } from "../utils";
import { AppButton } from "./Buttons";

export const BottomNav = ({navigation}) => {
  return (
      <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate(routes.HOME_SCREEN)}>
              <View style={styles.circle}>
              <FontAwesome name='home' size={30} color="black"/>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate()}>
              <View style={styles.circle}>
              <FontAwesome name='compass' size={30} color="black"/>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate()}>
              <View style={styles.circle}>
              <FontAwesome name='list-ul' size={30} color="black"/>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(routes.SETTINGS_SCREEN)}>
              <View style={styles.circle}>
              <FontAwesome name='gear' size={30} color="black"/>
              </View>
          </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: "row",
    width: "100%",
    alignSelf: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginVertical: 0,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    position: "absolute",
    bottom: 0,
    zIndex: 0
  },
  loginBtn: {
    marginVertical: 10,
    width: "90%",
  },
  circle: {
     width: 40,
     height: 40,
     borderRadius: 15,
     borderColor: "#ffffff",
     justifyContent: "center",
     alignItems: "center"
  },
  homeCircle: {
    width: 50,
    height: 50,
    borderColor: "black",
    borderRadius: 8,
    backgroundColor: "#51abf8",
    justifyContent: "center",
    alignItems: "center",
    bottom: 28
  },
  img: {
    width: 20,
    height: 21,
  }
});
