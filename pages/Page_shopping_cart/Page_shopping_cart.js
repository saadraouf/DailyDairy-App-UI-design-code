import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from 'axios';
import SwitchSZ from "../../customComponents/SwitchSZ.js";
import Checkbox from "../../customComponents/Checkbox.js";
import InPageNavigator from "../../customComponents/InPageNavigator.js";
import {Select} from "../../customComponents/Select.js";
import {AccordionItem} from "../../customComponents/AccordionItem.js";
import {Map} from "../../customComponents/Map.js";
const Page_shopping_cart  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page4}    >
			<View style = {noneModeStyles.style1}    >
				<View style = {noneModeStyles.style2}   >
					<Svg style={{height: 4, width: 4}} viewBox = "0 0 4 4">
						<Path fill = {"none"}   stroke = {"black"} strokeWidth = {2} d = "M2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3Z"/>
					</Svg>
				</View>
			</View>
			<View style = {noneModeStyles.style3}    >
				<View style = {noneModeStyles.style4}   >
					<Svg style={{height: 4, width: 4}} viewBox = "0 0 4 4">
						<Path fill = {"none"}   stroke = {"black"} strokeWidth = {2} d = "M2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3Z"/>
					</Svg>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_shopping_cart

const noneModeStyles = StyleSheet.create({
_page4: {
	height: 24,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgba(0, 0, 0, 0)",
	},
style1: {
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 20},
	],
	},
style2: {
	},
style3: {
	position: "absolute",
	transform: [
		{translateX: 19},
		{translateY: 20},
	],
	},
style4: {
	},
})

