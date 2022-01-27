import React, { useState } from "react";
import {
	SafeAreaView,
	StyleSheet,
	Modal,
	Platform,
	ModalProps,
	TouchableWithoutFeedback,
	View
} from "react-native";
import CustomBtn from "./CustomButton";

interface IProps extends ModalProps {
	handleCityChange: Function;
	setModalVisible: Function
}

const CityButtonsModal = ({ handleCityChange, visible, setModalVisible }: IProps) => {
	const cityButtonPressHandler = async (city: string) => {
		await handleCityChange(city);
		setModalVisible(false);
	}

	return (
		<SafeAreaView style={styles.citySelection}>
			<Modal
				visible={visible}
				transparent={true}
				animationType="slide"
			>
				<TouchableWithoutFeedback onPress={() => setModalVisible(false)} >
					<View style={{ flex: 1 }}></View>
				</TouchableWithoutFeedback>

				<View style={styles.modalContent}>
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
				</View>
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
});
export default CityButtonsModal;
