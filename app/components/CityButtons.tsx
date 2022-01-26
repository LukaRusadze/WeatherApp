import React, { useState } from "react";
import {
	SafeAreaView,
	StyleSheet,
	Modal,
	Platform
} from "react-native";
import CustomBtn from "../components/CustomButton";
import { useAppSelector } from "../config/hooks";

interface IProps {
	handleCityChange: Function;
}

const CityButtons = ({ handleCityChange }: IProps) => {

	const currentCity = useAppSelector((state) => state.weather.value.city)
	const [modalVisible, setModalVisible] = useState(currentCity === "Select City");

	const cityButtonPressHandler = async (city: string) => {
		handleCityChange(city);
		setModalVisible(false);
	}

	return (
		<SafeAreaView style={styles.citySelection}>
			<CustomBtn text="Change City" style={styles.cityChangeButton} onPress={() => setModalVisible(true)} />
			<Modal
				visible={modalVisible}
				transparent={true}
				animationType="slide"
			>
				<SafeAreaView style={styles.modalContent}>
					<CustomBtn
						text="Tbilisi"
						style={styles.cityButton}
						textStyle={styles.cityButtonText}
						onPress={() => cityButtonPressHandler("Tbilisi")} />

					<CustomBtn
						text="Kutaisi"
						style={styles.cityButton}
						textStyle={styles.cityButtonText}
						onPress={() => cityButtonPressHandler("Kutaisi")} />

					<CustomBtn
						text="Batumi"
						style={styles.cityButton}
						textStyle={styles.cityButtonText}
						onPress={() => cityButtonPressHandler("Batumi")} />
				</SafeAreaView>
			</Modal>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	citySelection: {
		marginBottom: 0,
	},
	modalContent: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
		alignSelf: "center",
		backgroundColor: Platform.OS === "ios" ? "white" : "black",
		position: "absolute",
		width: Platform.OS === "android" ? "100%" : "90%",
		borderRadius: 20,
		borderBottomRightRadius: Platform.OS === "ios" ? 20 : 0,
		borderBottomLeftRadius: Platform.OS === "ios" ? 20 : 0,
		bottom: 0,
		marginBottom: Platform.OS === "ios" ? 30 : 0,
	},
	cityButton: {
		margin: Platform.OS === "ios" ? 5 : 10,
		backgroundColor: Platform.OS === "ios" ? "transparent" : "white"
	},
	cityButtonText: {
		color: Platform.OS === "ios" ? "rgb(0,130,160)" : "black",
		fontWeight: "500",
		fontSize: Platform.OS === "ios" ? 17 : 15
	},
	cityChangeButton: {
		marginBottom: Platform.OS == "ios" ? 0 : 10
	}
});
export default CityButtons;
