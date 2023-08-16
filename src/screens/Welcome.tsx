import { StyleSheet, View, Image } from "react-native";

import { AppText, SafeAreaScreen } from "../components";
import { AppButton } from "../components/Buttons";
import { COLORS, routes } from "../utils";

export default function Welcome({ navigation }: any) {
  return (
    <SafeAreaScreen styles={styles.container}>
      <View style={styles.textContainer}>
      <Image source={require('../assets/images/logo.png')} style={{marginTop: -200}} />
        {/* <AppText style={[styles.text]}>deli</AppText>
        <AppText style={[styles.text, styles.btyText]}>VR</AppText> */}
      </View>
      <View>
        <AppText style={styles.label}>Imade</AppText>
      </View>
      <View style={styles.introContainer}>
        <AppText style={styles.introText}>
          Discover skilled professionals to get your job done easily at your convenience.
        </AppText>
      </View>

      {/* Auth Buttons  */}
      <View style={styles.authBtnsContainer}>
        <View style={styles.btnContainer}>
          <AppButton
            primary
            onPress={() => navigation.navigate(routes.LOGIN_SCREEN)}
          >
            Login
          </AppButton>
        </View>
        <View style={styles.btnContainer}>
          <AppButton
            outline
            onPress={() => navigation.navigate(routes.SIGNUP_SCREEN)}
          >
            Create an Account
          </AppButton>
        </View>
      </View>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  authBtnsContainer: {
    bottom: "10%",
    marginHorizontal: "auto",
    position: "absolute",
    width: "90%",
  },
  btnContainer: {
    marginVertical: 10,
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },
  btyText: {
    color: COLORS.primary,
  },
  introContainer: {
    alignItems: "center",
    marginHorizontal: "auto",
    marginTop: 15,
    width: "90%",
  },
  introText: {
    fontWeight: "400",
  },
  label: {
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "bold"
  },
  text: {
    fontSize: 25,
    fontWeight: "600",
  },
  textContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 5,
  },
});
