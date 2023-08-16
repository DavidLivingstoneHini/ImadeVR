import { useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import { AppButton } from "../components/Buttons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {BottomNav} from "../components/BottomNav"

import { AppText, AppTextInput, SafeAreaScreen } from "../components";
import { EmployeeCard } from "../components/Cards";
import { COLORS, routes } from "../utils";

export default function Topprof({ navigation }: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen((prev) => !prev);

  return (
    <SafeAreaScreen>
      <ScrollView style={styles.container}>

        <View style={styles.popularResContainer}>
          {/* Heading  */}
          <View style={styles.popularResHeading}>
            <AppText>Top Home Repairs Tradesmen</AppText>
          </View>

          {/* cards  */}
          <View style={styles.scrollContainer2}>
            <TouchableOpacity  onPress={() => navigation.navigate(routes.PROFILEWATCH_SCREEN)}>
          <EmployeeCard
            name="Michael Mammon"
            location=""
            img={require("../assets/images/pic1.png")}
            ratings={4.9}
          />
          </TouchableOpacity>
          <EmployeeCard
            name="Eric"
            location="Masaki"
            img={require("../assets/images/pic2.png")}
            ratings={4.7}
          />
          </View>

          <View style={styles.scrollContainer3}>
            <TouchableOpacity  onPress={() => navigation.navigate(routes.PROFILEWATCH_SCREEN)}>
          <EmployeeCard
            name="Eric"
            location=""
            img={require("../assets/images/pic3.png")}
            ratings={4.9}
          />
          </TouchableOpacity>
          <EmployeeCard
            name="Eric "
            location="Masaki"
            img={require("../assets/images/pic4.png")}
            ratings={4.7}
          />
          </View>
        </View>
      </ScrollView>
      <BottomNav navigation={navigation}/>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  cartContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    marginBottom: 15,
    width: "100%",
  },
  loginBtn: {
    marginVertical: 10,
    width: "90%",
  },
  container: {
    marginHorizontal: "auto",
    width: "95%",
    marginTop: 25,
  },

  deliverText: {
    color: COLORS.mediumGray,
    fontWeight: "400",
  },
  greetingText: {
    fontSize: 20,
    fontWeight: "300",
  },
  img: {
    borderRadius: 10,
    height: 100,
    width: 100,
  },
  imgContainer: {
    alignItems: "center",
    marginRight: 10,
  },
  locationContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  locationText: {
    fontWeight: "500",
    marginRight: 10,
  },
  popularResContainer: {
    marginTop: 10,
  },
  popularResHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  primaryText: {
    color: COLORS.primary,
  },
  searchBar: {
    marginVertical: 10,
  },
  scrollContainer: {
    marginVertical: 15,
  },
  scrollContainer2: {
    marginVertical: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  scrollContainer3: {
    marginVertical: -15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
});
