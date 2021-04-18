import { StatusBar } from "expo-status-bar";
import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
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
	// return <WelcomeScreen  />;
	return <ViewImageScreen />;
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
