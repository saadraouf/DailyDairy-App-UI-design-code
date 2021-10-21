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
import {image_logo_1_link} from './assets/imageLinks.js'
const Page_iPhone_11_Pro_Max___2  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page13}    >
			<View style = {noneModeStyles._Rectangle_3}    >
			</View>
			<Text style = {noneModeStyles._Login}   >
				Login
			</Text>
			<Text style = {noneModeStyles._Sign_up}   >
				Sign-up
			</Text>
			<View style = {noneModeStyles._Rectangle_1}    >
			</View>
			<View style = {noneModeStyles._Group_1}    >
				<Text style = {noneModeStyles._Email_address}   >
					Email address
				</Text>
				<Text style = {noneModeStyles._fa18_bse_071_cuilahore_edu_pk}   >
					fa18-bse-071@cuilahore.edu.pk{'\n'}
				</Text>
				<View style = {noneModeStyles._Line_1}    >
				</View>
			</View>
			<View style = {noneModeStyles._Group_2}    >
				<Text style = {noneModeStyles._Password}   >
					Password
				</Text>
				<Text style = {noneModeStyles.________________}   >
					* * * * * * * * 
				</Text>
				<View style = {noneModeStyles._Line_1_2}    >
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_2}    >
			</View>
			<Text style = {noneModeStyles._Login_2}   >
				Login
			</Text>
			<Text style = {noneModeStyles._Forgot_passcode_}   >
				Forgot passcode?
			</Text>
			<View style = {noneModeStyles.style16}    >
				<View style = {noneModeStyles.style17}   >
					<Svg style={{height: 108, width: 121}} viewBox = "0 0 121 108">
						<Path fill = {"white"}     d = "M121 54C121 83.8234 93.9132 108 60.5 108C27.0868 108 0 83.8234 0 54C0 24.1766 27.0868 0 60.5 0C93.9132 0 121 24.1766 121 54Z"/>
					</Svg>
				</View>
			</View>
			<View style = {noneModeStyles._logo_1_container}    >
				<View style = {noneModeStyles._logo_1}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_logo_1_link}}/>
				</View>
			</View>
			<Text style = {noneModeStyles._daily_dairy}   >
				daily dairy
			</Text>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_iPhone_11_Pro_Max___2

const noneModeStyles = StyleSheet.create({
_page13: {
	height: 896,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(242, 242, 242)",
	},
_Rectangle_3: {
	width: 414,
	height: 382,
	backgroundColor: "rgb(169, 68, 37)",
	position: "absolute",
	left: 2,
	top: 0,
	borderRadius: 30,
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(0, 0, 0, 0.06)",
	shadowRadius: 30,
	},
_Login: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 89,
	top: 330,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
_Sign_up: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 263,
	top: 330,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
_Rectangle_1: {
	width: 134,
	height: 3,
	backgroundColor: "rgb(250, 74, 12)",
	position: "absolute",
	left: 50,
	top: 366,
	borderRadius: 40,
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(195.5, 63.0162, 21.1792, 0.1)",
	shadowRadius: 4,
	},
_Group_1: {
	width: 314,
	height: 71,
	position: "absolute",
	left: 50,
	top: 431,
	},
_Email_address: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 15,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
_fa18_bse_071_cuilahore_edu_pk: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 27,
	color: "rgb(0, 0, 0)",
	fontSize: 17,
	fontWeight: "400",
	fontFamily: "Abel",
	textAlign: "left",
	},
_Line_1: {
	width: 314,
	height: 0,
	position: "absolute",
	left: 0,
	top: 59,
	borderTopWidth: 0.5,
	borderRightWidth: 0.5,
	borderBottomWidth: 0.5,
	borderLeftWidth: 0.5,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Group_2: {
	width: 314,
	height: 59,
	position: "absolute",
	left: 50,
	top: 536,
	},
_Password: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 15,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
________________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 26,
	color: "rgb(0, 0, 0)",
	fontSize: 17,
	fontWeight: "400",
	fontFamily: "Abel",
	textAlign: "left",
	},
_Line_1_2: {
	width: 314,
	height: 0,
	position: "absolute",
	left: 0,
	top: 59,
	borderTopWidth: 0.5,
	borderRightWidth: 0.5,
	borderBottomWidth: 0.5,
	borderLeftWidth: 0.5,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Rectangle_2: {
	width: 314,
	height: 70,
	backgroundColor: "rgb(250, 74, 12)",
	position: "absolute",
	left: 50,
	top: 799,
	borderRadius: 30,
	},
_Login_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 178,
	top: 814,
	color: "rgb(246, 246, 249)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Changa",
	textAlign: "left",
	},
_Forgot_passcode_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 50,
	top: 629,
	color: "rgb(250, 74, 12)",
	fontSize: 17,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
style16: {
	width: 121,
	height: 108,
	position: "absolute",
	left: 18,
	top: 32,
	},
style17: {
	},
_logo_1_container: {
	width: 61,
	height: 84,
	position: "absolute",
	left: 50,
	top: 44,
	},
_logo_1: {
	width: "100%",
	height: "100%",
	},
_daily_dairy: {
	width: 233,
	height: 82,
	position: "absolute",
	left: 18,
	top: 162,
	color: "rgb(255, 255, 255)",
	fontSize: 65,
	fontWeight: "400",
	lineHeight: 56.4434,
	fontFamily: "Suez One",
	textAlign: "left",
	},
})

