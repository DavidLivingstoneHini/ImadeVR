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

export default function Home({ navigation }: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = [
    {
      id: 1,
      name: "Painter",
      img: require("../assets/images/painter.png"),
    },
    {
      id: 2,
      name: "Mason",
      img: require("../assets/images/mason.png"),
    },
    {
      id: 3,
      name: "Carpenter",
      img: require("../assets/images/carpenter.png"),
    },
    {
      id: 4,
      name: "Electrician",
      img: require("../assets/images/electrician.png"),
    },
  ];

  const showModal = () => setIsModalOpen((prev) => !prev);

  return (
    <SafeAreaScreen>
      <ScrollView style={styles.container}>
        {/* Cart and Greeting Text  */}
        <View style={styles.cartContainer}>
          <AppText style={styles.greetingText}>Welcome!</AppText>
          <Image source={require('../assets/images/pp.png')} style={{borderRadius: 100}} />
        </View>

        {/* Delivering location section  */}
        <View>
          <AppText style={styles.deliverText}>Discover</AppText>
        </View>

        {/* Search Bar  */}
        <View style={styles.searchBar}>
          <AppTextInput
            leftIcon="search"
            onTextChange={() => console.log("Search")}
            //@ts-ignore
            placeholder="Search professionals"
          />
        </View>

        {/* Scroll Categories  */}
        <FlatList
          data={data}
          horizontal
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => (
            <View style={styles.imgContainer}>
              <Image source={item.img} style={styles.img} />
              <AppText>{item.name}</AppText>
            </View>
          )}
          style={styles.scrollContainer}
        />

        {/* Popular Restaurants  */}
        <View style={styles.popularResContainer}>
          {/* Heading  */}
          <View style={styles.popularResHeading}>
            <AppText style={{marginVertical: 10}}>Top Home Repairs Tradesmen</AppText>
            <TouchableOpacity
              onPress={() => navigation.navigate(routes.TOPPROF_SCREEN)}
            >
              <AppText style={styles.primaryText}>See All</AppText>
            </TouchableOpacity>
          </View>

          {/* Restaurants  */}
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
            location=""
            img={require("../assets/images/pic2.png")}
            ratings={4.7}
          />
          </View>

          <View style={styles.popularResHeading}>
            <AppText style={{marginVertical: 10}}>Top Contract Tradesmen</AppText>
            <TouchableOpacity
              onPress={() => navigation.navigate(routes.TOPPROF_SCREEN)}
            >
              <AppText style={styles.primaryText}>See All</AppText>
            </TouchableOpacity>
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
            name="Eric"
            location=""
            img={require("../assets/images/pic4.png")}
            ratings={4.7}
          />
          </View>
        </View>
<View style={styles.loginBtn}>
          <AppButton
            outline
            onPress={() => navigation.navigate()}
          >
            Go Premium
          </AppButton>
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
    width: "100%",
    marginBottom: 60
  },
  container: {
    marginHorizontal: "auto",
    width: "95%",
  },

  deliverText: {
    color: COLORS.mediumGray,
    fontWeight: "400",  },
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
    marginVertical: 10,
  },
  searchBar: {
    marginVertical: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#7e807f",
  },
  scrollContainer: {
    marginVertical: 15,
  },
  scrollContainer2: {
    marginVertical: 2,
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
