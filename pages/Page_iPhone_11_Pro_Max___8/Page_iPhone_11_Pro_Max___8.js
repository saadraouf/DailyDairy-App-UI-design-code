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
const Page_iPhone_11_Pro_Max___8  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page10}    >
			<Text style = {noneModeStyles._Delivery}   >
				Delivery
			</Text>
			<View style = {noneModeStyles._Rectangle_2}    >
			</View>
			<Text style = {noneModeStyles._Proceed_to_payment}   >
				Proceed to payment
			</Text>
			<View style = {noneModeStyles._Group_50}    >
				<Text style = {noneModeStyles._Address_details}   >
					Address details
				</Text>
				<Text style = {noneModeStyles._change}   >
					change
				</Text>
				<View style = {noneModeStyles._Rectangle_11}    >
				</View>
				<View style = {noneModeStyles._Group_9}    >
					<Text style = {noneModeStyles._Saad}   >
						Saad
					</Text>
					<Text style = {noneModeStyles._Comsats_Lahore}   >
						Comsats Lahore
					</Text>
					<Text style = {noneModeStyles.__923044774113}   >
						+923044774113
					</Text>
					<View style = {noneModeStyles._Line_3}    >
					</View>
					<View style = {noneModeStyles._Line_4}    >
					</View>
				</View>
				<View style = {noneModeStyles._dashicons_bank}    >
				</View>
			</View>
			<View style = {noneModeStyles._Group_51}    >
				<Text style = {noneModeStyles._Delivery_method_}   >
					Delivery method.
				</Text>
				<Text style = {noneModeStyles._Total}   >
					Total
				</Text>
				<Text style = {noneModeStyles._890_PKR}   >
					890 PKR
				</Text>
				<View style = {noneModeStyles._Rectangle_11_2}    >
				</View>
				<View style = {noneModeStyles._Group_9_2}    >
					<Text style = {noneModeStyles._Door_delivery}   >
						Door delivery
					</Text>
					<View style = {noneModeStyles._Line_3_2}    >
					</View>
					<View style = {noneModeStyles._Ellipse_7}    >
					</View>
					<View style = {noneModeStyles._Ellipse_8}    >
					</View>
				</View>
				<View style = {noneModeStyles._Group_10}    >
					<Text style = {noneModeStyles._Pick_up}   >
						Pick up
					</Text>
					<View style = {noneModeStyles._Ellipse_7_2}    >
					</View>
				</View>
			</View>
			<View style = {noneModeStyles.style28}    >
				<View style = {noneModeStyles.style29}   >
					<Svg style={{height: 69, width: 413}} viewBox = "0 0 413 69">
						<Path fill = {"#A94425"}     d = "M0 0H413V69H0V0Z"/>
					</Svg>
				</View>
			</View>
			<Text style = {noneModeStyles._Checkout}   >
				Checkout
			</Text>
			<View style = {noneModeStyles.style31}    >
				<View style = {noneModeStyles.style32}   >
					<Svg style={{height: 14, width: 8}} viewBox = "0 0 8 14">
						<Path fill = {"none"}   stroke = {"black"} strokeWidth = {2} d = "M7 13L1 7L7 1"/>
					</Svg>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_iPhone_11_Pro_Max___8

const noneModeStyles = StyleSheet.create({
_page10: {
	height: 896,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(245, 245, 248)",
	},
_Delivery: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 50,
	top: 124,
	color: "rgb(0, 0, 0)",
	fontSize: 34,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
_Rectangle_2: {
	width: 314,
	height: 70,
	backgroundColor: "rgb(250, 74, 12)",
	position: "absolute",
	left: 50,
	top: 785,
	borderRadius: 30,
	},
_Proceed_to_payment: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 132,
	top: 810,
	color: "rgb(246, 246, 249)",
	fontSize: 17,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "center",
	},
_Group_50: {
	width: 315,
	height: 196,
	position: "absolute",
	left: 50,
	top: 210,
	},
_Address_details: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 3,
	top: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 17,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
_change: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 254,
	top: 0,
	color: "rgb(244, 123, 10)",
	fontSize: 15,
	fontWeight: "400",
	fontFamily: "Abel",
	textAlign: "left",
	},
_Rectangle_11: {
	width: 315,
	height: 156,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 40,
	borderRadius: 20,
	shadowOffset: {
		width: 0,
		height: 10
	},
	shadowColor: "rgba(0, 0, 0, 0.03)",
	shadowRadius: 40,
	},
_Group_9: {
	width: 232,
	height: 116,
	position: "absolute",
	left: 30,
	top: 65,
	},
_Saad: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 17,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
_Comsats_Lahore: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 36,
	color: "rgb(0, 0, 0)",
	fontSize: 15,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
__923044774113: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 88,
	color: "rgb(0, 0, 0)",
	fontSize: 15,
	fontWeight: "400",
	fontFamily: "Abel",
	textAlign: "left",
	},
_Line_3: {
	width: 232,
	height: 0,
	position: "absolute",
	left: 0,
	top: 28,
	borderTopWidth: 0.5,
	borderRightWidth: 0.5,
	borderBottomWidth: 0.5,
	borderLeftWidth: 0.5,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Line_4: {
	width: 232,
	height: 0,
	position: "absolute",
	left: 0,
	top: 80,
	borderTopWidth: 0.5,
	borderRightWidth: 0.5,
	borderBottomWidth: 0.5,
	borderLeftWidth: 0.5,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_dashicons_bank: {
	width: 20,
	height: 20,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 61,
	top: 139,
	},
_Group_51: {
	width: 318,
	height: 303,
	position: "absolute",
	left: 50,
	top: 448,
	},
_Delivery_method_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 6,
	top: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 17,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
_Total: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 266,
	color: "rgb(0, 0, 0)",
	fontSize: 17,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
_890_PKR: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 237,
	top: 263,
	color: "rgb(0, 0, 0)",
	fontSize: 22,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
_Rectangle_11_2: {
	width: 315,
	height: 156,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 3,
	top: 40,
	borderRadius: 20,
	shadowOffset: {
		width: 0,
		height: 10
	},
	shadowColor: "rgba(0, 0, 0, 0.03)",
	shadowRadius: 40,
	},
_Group_9_2: {
	width: 262,
	height: 45,
	position: "absolute",
	left: 24,
	top: 70,
	},
_Door_delivery: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 31,
	top: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 17,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
_Line_3_2: {
	width: 232,
	height: 0,
	position: "absolute",
	left: 30,
	top: 45,
	borderTopWidth: 0.5,
	borderRightWidth: 0.5,
	borderBottomWidth: 0.5,
	borderLeftWidth: 0.5,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Ellipse_7: {
	width: 15,
	height: 15,
	position: "absolute",
	left: 0,
	top: 1,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(250, 74, 12)",
	},
_Ellipse_8: {
	width: 7,
	height: 7,
	position: "absolute",
	left: 4,
	top: 5,
	},
_Group_10: {
	width: 85,
	height: 31,
	position: "absolute",
	left: 24,
	top: 140,
	},
_Pick_up: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 31,
	top: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 17,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
_Ellipse_7_2: {
	width: 15,
	height: 15,
	position: "absolute",
	left: 0,
	top: 1,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(159, 159, 159)",
	},
style28: {
	width: 413,
	height: 69,
	position: "absolute",
	left: 1,
	top: 22,
	},
style29: {
	},
_Checkout: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 170,
	top: 46,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
style31: {
	position: "absolute",
	transform: [
		{translateX: 23},
		{translateY: 50},
	],
	},
style32: {
	},
})

