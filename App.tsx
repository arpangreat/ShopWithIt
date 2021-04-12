import { StatusBar } from "expo-status-bar";
import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	TouchableOpacity,
	Alert,
} from "react-native";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.White}> Hello World</Text>
			<TouchableOpacity
				onPress={() =>
					Alert.alert("Wow!!", "Image pressed", [
						{
							text: "Yes",
							onPress: () =>
								console.log(
									"Yes"
								),
						},
						{
							text: "No",
							onPress: () =>
								console.log(
									"No"
								),
						},
					])
				}
			>
				<Image
					fadeDuration={1000}
					source={{
						width: 200,
						height: 300,
						uri:
							"https://i.picsum.photos/id/365/200/300.jpg?hmac=n_4DxqK0o938eabBZRnEywWtPwgF2MKoTfnRmJ7vlKQ",
					}}
				/>
			</TouchableOpacity>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "grey",
		alignItems: "center",
		justifyContent: "center",
	},
	White: {
		color: "#fff",
	},
});
