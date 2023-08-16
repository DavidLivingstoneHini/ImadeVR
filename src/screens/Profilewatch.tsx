import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Pressable,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import React from "react";
import { AppButton } from "../components/Buttons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {BottomNav} from "../components/BottomNav"

export default function Profilewatch({ navigation, route }: any) {
	return (
		<View style={{ backgroundColor: "white", flex: 1 }}>
			<SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16 }}>
				<Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
					<FontAwesome name={"arrow-left"} size={22} color="black" />
				</Pressable>
			</SafeAreaView>
			<ScrollView>
				<View
					style={{
						// backgroundColor: "red",
						height: 300,
						width: 300,
						position: "absolute",
						top: -150,
						// marginBottom: 130,
					}}
				>
				</View>
				<View style={{justifyContent: "center", alignItems: "center", marginTop: 18}}>
				<Text style={{ marginTop: 1, marginVertical: 15, fontSize: 15 }}>
					PROFILE WATCH
				</Text>
				<Image
                  style={{height: 150, width: 150}}
                  source={require('../assets/images/pic1.png')}
                />
				<Text style={{ marginTop: 15, fontSize: 18, fontWeight: "bold" }}>
					Michael Mammon
				</Text>

				<Text style={{ marginTop: 6, fontSize: 15, fontWeight: "bold", color: "#db2165" }}>
					Painter
				</Text>

				<Text style={{ marginTop: 2, fontSize: 14, color: "#a8a7a7" }}>
					Joined June 2023
				</Text>
				</View>

				<View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 100, alignItems: "center", marginTop: 10}}>
				<FontAwesome name={"map-pin"} size={18} color="#db1438" />
				
				<Text style={{ fontSize: 16}}>
					Weija, Accra
				</Text>
				</View>

				<View style={{justifyContent: "center", alignItems: "center", marginTop: 18}}>
				<TouchableOpacity
              onPress={() => navigation.navigate()}
            >
				<FontAwesome name={"envelope"} size={30} color="#1286b0" />
            </TouchableOpacity>
				</View>

				<View style={{ }}>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								marginTop: 16,
								paddingHorizontal: 40
							}}
						>
							<View
								style={{
									backgroundColor: "rgba(135, 206, 235, 0.8)",
									// paddingHorizontal: 16,
									paddingVertical: 26,
									borderRadius: 25,
									alignItems: "center",
									width: 110,
									// marginHorizontal: 24,
								}}
							>
								<FontAwesome name={"heart"} size={20} color="black" style={{marginLeft: -70, marginTop: -15}} />
								<Text style={{ fontSize: 30, textAlign: "center", fontWeight: "bold" }}>56%</Text>
								<Text style={{ fontSize: 11, textAlign: "center", marginTop: 2, color: "red" }}>Success Rate</Text>
							</View>
							<View
								style={{
									backgroundColor: "rgba(135, 206, 235, 0.8)",
									// paddingHorizontal: 16,
									paddingVertical: 26,
									borderRadius: 25,
									alignItems: "center",
									width: 110,
								}}
							>
								<FontAwesome name={"check"} size={20} color="black" style={{marginLeft: -60, marginTop: -15}} />
								<Text style={{ fontSize: 30, textAlign: "center", fontWeight: "bold" }}>40</Text>
								<Text style={{ fontSize: 11, textAlign: "center", marginTop: 2, color: "red" }}>Jobs completed</Text>
							</View>
						</View>
						<View style={styles.btnContainer}>
                        <AppButton
                         primary
                         onPress={() => navigation.navigate()}
						 extraStyles={{borderRadius: 30}}
                         >
                           	View Portfolio
                        </AppButton>
        </View>
				</View>
				</ScrollView>
				<BottomNav navigation={navigation}/>
		</View>
	);
};

const styles = StyleSheet.create({
	btnContainer: {
		marginTop: 15,
		marginVertical: 10,
		marginHorizontal: 20,
	  }
});