import { StyleSheet } from "react-native";

import { AppText, SafeAreaScreen } from "../components";
import {BottomNav} from "../components/BottomNav"

export default function Settings({ navigation }: any) {
  return (
    <SafeAreaScreen>
      <AppText>Settings</AppText>
      <BottomNav navigation={navigation}/>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({});
