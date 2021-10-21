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
import {image_jean_carlo_emer_G_oWb_hcfx8_unsplash_1_link} from './assets/imageLinks.js'
import {image_mae_mu_ru4jyDiLHsI_unsplash_1_link} from './assets/imageLinks.js'
import {image_logo_1_link} from './assets/imageLinks.js'
const Page_iPhone_11_Pro_Max___1  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page14}    >
			<View style = {noneModeStyles._viewport}    >
				<View style = {noneModeStyles._Ellipse_1}    >
				</View>
				<View style = {noneModeStyles._Rectangle_2}    >
				</View>
				<Text style = {noneModeStyles._Get_Started}   >
					Get Started{'\n'}
				</Text>
				<Text style = {noneModeStyles._daily_dairy}   >
					daily dairy
				</Text>
				<View style = {noneModeStyles._jean_carlo_emer_G_oWb_hcfx8_unsplash_1_container}    >
					<View style = {noneModeStyles._jean_carlo_emer_G_oWb_hcfx8_unsplash_1}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_jean_carlo_emer_G_oWb_hcfx8_unsplash_1_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._mae_mu_ru4jyDiLHsI_unsplash_1_container}    >
					<View style = {noneModeStyles._mae_mu_ru4jyDiLHsI_unsplash_1}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_mae_mu_ru4jyDiLHsI_unsplash_1_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_68}    >
				</View>
				<Text style = {noneModeStyles._Pure_Dairy_Products_At_Your_Door_Step}   >
					Pure Dairy Products At Your Door Step 
				</Text>
				<View style = {noneModeStyles._logo_1_container}    >
					<View style = {noneModeStyles._logo_1}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_logo_1_link}}/>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_iPhone_11_Pro_Max___1

const noneModeStyles = StyleSheet.create({
_page14: {
	height: 896,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(169, 68, 37)",
	},
_viewport: {
	height: 896,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(169, 68, 37)",
	},
_Ellipse_1: {
	width: 121,
	height: 108,
	position: "absolute",
	left: 18,
	top: 32,
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
_Get_Started: {
	width: 140,
	height: 51,
	position: "absolute",
	left: 139,
	top: 818,
	color: "rgb(255, 224, 187)",
	fontSize: 24,
	fontWeight: "700",
	lineHeight: 28.125,
	fontFamily: "Changa",
	textAlign: "center",
	},
_daily_dairy: {
	width: 233,
	height: 82,
	position: "absolute",
	left: 220,
	top: 36,
	color: "rgb(255, 255, 255)",
	fontSize: 65,
	fontWeight: "400",
	lineHeight: 56.4434,
	fontFamily: "Suez One",
	textAlign: "left",
	},
_jean_carlo_emer_G_oWb_hcfx8_unsplash_1_container: {
	width: 331,
	height: 309,
	position: "absolute",
	left: -26,
	top: 394,
	},
_jean_carlo_emer_G_oWb_hcfx8_unsplash_1: {
	width: "100%",
	height: "100%",
	borderRadius: 113,
	},
_mae_mu_ru4jyDiLHsI_unsplash_1_container: {
	width: 210,
	height: 240,
	position: "absolute",
	left: 183,
	top: 526,
	},
_mae_mu_ru4jyDiLHsI_unsplash_1: {
	width: "100%",
	height: "100%",
	borderRadius: 74,
	},
_Rectangle_68: {
	width: 375,
	height: 168,
	backgroundColor: "rgb(169, 68, 37)",
	position: "absolute",
	left: 18,
	top: 178,
	},
_Pure_Dairy_Products_At_Your_Door_Step: {
	width: 384,
	height: 128,
	position: "absolute",
	left: 39,
	top: 282,
	color: "rgb(255, 255, 255)",
	fontSize: 20,
	fontWeight: "600",
	lineHeight: 17.3672,
	fontFamily: "Changa",
	textAlign: "left",
	},
_logo_1_container: {
	width: 61,
	height: 84,
	position: "absolute",
	left: 48,
	top: 44,
	},
_logo_1: {
	width: "100%",
	height: "100%",
	},
})

