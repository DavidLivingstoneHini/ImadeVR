import React from 'react';
import { StyleSheet,View,TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { COLORS, routes } from "../utils";
import { AppButton } from "./Buttons";

export const BottomNav1 = ({navigation}) => {
  return (
      <View style={styles.container}>
        <View style={styles.loginBtn}>
          <AppButton
            outline
            onPress={() => navigation.navigate()}
          >
            Go Premium
          </AppButton>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: "100%",
    alignSelf: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 0,
    marginBottom: 60,
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
