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
import {image_megumi_nachev_xhOUnxVVb6s_unsplash_1_link} from './assets/imageLinks.js'
import {image_patrick_perkins_kYyLSDIbfsY_unsplash_1_link} from './assets/imageLinks.js'
const Page_iPhone_11_Pro_Max___5  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page3}    >
			<View style = {noneModeStyles._Rectangle_7}    >
			</View>
			<Text style = {noneModeStyles._Found_2_results}   >
				Found  2 results
			</Text>
			<View style = {noneModeStyles._Group_4}    >
				<View style = {noneModeStyles._Rectangle_9}    >
				</View>
				<Text style = {noneModeStyles._Fresh_Butter}   >
					Fresh {'\n'}Butter
				</Text>
				<Text style = {noneModeStyles._750_PKR___KG}   >
					750 PKR / KG
				</Text>
			</View>
			<View style = {noneModeStyles._Group_5}    >
				<View style = {noneModeStyles._Rectangle_9_2}    >
				</View>
				<Text style = {noneModeStyles._Packed_Butter}   >
					Packed {'\n'}Butter
				</Text>
				<Text style = {noneModeStyles._1050_PKR_KG}   >
					1050 PKR/KG
				</Text>
			</View>
			<View style = {noneModeStyles.style11}    >
				<View style = {noneModeStyles.style12}   >
					<Svg style={{height: 69, width: 413}} viewBox = "0 0 413 69">
						<Path fill = {"#A94425"}     d = "M0 0H413V69H0V0Z"/>
					</Svg>
				</View>
			</View>
			<View style = {noneModeStyles.style13}    >
				<View style = {noneModeStyles.style14}   >
					<Svg style={{height: 14, width: 8}} viewBox = "0 0 8 14">
						<Path fill = {"none"}   stroke = {"black"} strokeWidth = {2} d = "M7 13L1 7L7 1"/>
					</Svg>
				</View>
			</View>
			<Text style = {noneModeStyles._Butter}   >
				Butter
			</Text>
			<View style = {noneModeStyles._Line_2}    >
			</View>
			<View style = {noneModeStyles._megumi_nachev_xhOUnxVVb6s_unsplash_1_container}    >
				<View style = {noneModeStyles._megumi_nachev_xhOUnxVVb6s_unsplash_1}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_megumi_nachev_xhOUnxVVb6s_unsplash_1_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._patrick_perkins_kYyLSDIbfsY_unsplash_1_container}    >
				<View style = {noneModeStyles._patrick_perkins_kYyLSDIbfsY_unsplash_1}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_patrick_perkins_kYyLSDIbfsY_unsplash_1_link}}/>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_iPhone_11_Pro_Max___5

const noneModeStyles = StyleSheet.create({
_page3: {
	height: 896,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(238, 238, 238)",
	},
_Rectangle_7: {
	width: 414,
	height: 811,
	backgroundColor: "rgb(249, 249, 249)",
	position: "absolute",
	left: 0,
	top: 129,
	borderRadius: 30,
	},
_Found_2_results: {
	width: 270,
	height: "auto",
	position: "absolute",
	left: 72,
	top: 164,
	color: "rgb(0, 0, 0)",
	fontSize: 28,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "center",
	},
_Group_4: {
	width: 156,
	height: 212.407,
	position: "absolute",
	left: 34,
	top: 281.661,
	},
_Rectangle_9: {
	width: 156,
	height: 212.407,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 30,
	shadowOffset: {
		width: 0,
		height: 30
	},
	shadowColor: "rgba(57.375, 57.375, 57.375, 0.1)",
	shadowRadius: 60,
	},
_Fresh_Butter: {
	width: 110.169,
	height: 40.5425,
	position: "absolute",
	left: 16.7458,
	top: 107.525,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "400",
	lineHeight: 18.2405,
	fontFamily: "Changa",
	textAlign: "center",
	},
_750_PKR___KG: {
	width: 135.135,
	height: 14.9277,
	position: "absolute",
	left: 7.21454,
	top: 166.969,
	color: "rgb(250, 74, 12)",
	fontSize: 17,
	fontWeight: "400",
	lineHeight: 19.9219,
	fontFamily: "Changa",
	textAlign: "center",
	},
_Group_5: {
	width: 156,
	height: 212.407,
	position: "absolute",
	left: 225,
	top: 335.661,
	},
_Rectangle_9_2: {
	width: 156,
	height: 212.407,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 30,
	shadowOffset: {
		width: 0,
		height: 30
	},
	shadowColor: "rgba(57.375, 57.375, 57.375, 0.1)",
	shadowRadius: 60,
	},
_Packed_Butter: {
	width: 110.169,
	height: 40.5425,
	position: "absolute",
	left: 16.7458,
	top: 107.525,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "400",
	lineHeight: 18.2405,
	fontFamily: "Changa",
	textAlign: "center",
	},
_1050_PKR_KG: {
	width: 135.135,
	height: 14.9277,
	position: "absolute",
	left: 7.21454,
	top: 166.969,
	color: "rgb(250, 74, 12)",
	fontSize: 17,
	fontWeight: "400",
	lineHeight: 19.9219,
	fontFamily: "Changa",
	textAlign: "center",
	},
style11: {
	width: 413,
	height: 69,
	position: "absolute",
	left: 1,
	top: 22,
	},
style12: {
	},
style13: {
	position: "absolute",
	transform: [
		{translateX: 28},
		{translateY: 44},
	],
	},
style14: {
	},
_Butter: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 58,
	top: 39,
	color: "rgb(0, 0, 0)",
	fontSize: 17,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
_Line_2: {
	width: 0,
	height: 26,
	position: "absolute",
	left: 112,
	top: 43,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_megumi_nachev_xhOUnxVVb6s_unsplash_1_container: {
	width: 64,
	height: 80,
	position: "absolute",
	left: 77,
	top: 296,
	},
_megumi_nachev_xhOUnxVVb6s_unsplash_1: {
	width: "100%",
	height: "100%",
	},
_patrick_perkins_kYyLSDIbfsY_unsplash_1_container: {
	width: 97,
	height: 99,
	position: "absolute",
	left: 255,
	top: 310,
	},
_patrick_perkins_kYyLSDIbfsY_unsplash_1: {
	width: "100%",
	height: "100%",
	},
})

