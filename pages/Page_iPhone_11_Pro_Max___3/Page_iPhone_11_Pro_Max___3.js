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
import {image_megumi_nachev_qkQR_OrvZic_unsplash_1_link} from './assets/imageLinks.js'
import {image_megumi_nachev_qkQR_OrvZic_unsplash_1_2_link} from './assets/imageLinks.js'
const Page_iPhone_11_Pro_Max___3  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page9}    >
			<Text style = {noneModeStyles._Dairy_Products_For_You}   >
				Dairy Products {'\n'}For You
			</Text>
			<View style = {noneModeStyles._Rectangle_7}    >
			</View>
			<Text style = {noneModeStyles._Search}   >
				Search
			</Text>
			<Text style = {noneModeStyles._see_more}   >
				see more
			</Text>
			<Text style = {noneModeStyles._Milk}   >
				Milk
			</Text>
			<Text style = {noneModeStyles._Yougurt}   >
				Yougurt
			</Text>
			<Text style = {noneModeStyles._Desi_Ghee}   >
				Desi Ghee
			</Text>
			<Text style = {noneModeStyles._Butter}   >
				Butter
			</Text>
			<View style = {noneModeStyles.style9}    >
				<View style = {noneModeStyles.style10}   >
					<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
						<Path fill = {"none"}   stroke = {"black"} strokeWidth = {2} d = "M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"/>
					</Svg>
				</View>
			</View>
			<View style = {noneModeStyles._Group_4}    >
				<View style = {noneModeStyles._Rectangle_9}    >
				</View>
				<Text style = {noneModeStyles._Fresh_Milk__Litre}   >
					Fresh Milk /Litre
				</Text>
				<Text style = {noneModeStyles._120_PKR}   >
					120 PKR
				</Text>
			</View>
			<View style = {noneModeStyles._Group_5}    >
				<View style = {noneModeStyles._Rectangle_8}    >
				</View>
				<Text style = {noneModeStyles._Fresh_Milk_}   >
					Fresh Milk?
				</Text>
				<Text style = {noneModeStyles._Subscribe}   >
					Subscribe
				</Text>
				<View style = {noneModeStyles._megumi_nachev_qkQR_OrvZic_unsplash_1_container}    >
					<View style = {noneModeStyles._megumi_nachev_qkQR_OrvZic_unsplash_1}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_megumi_nachev_qkQR_OrvZic_unsplash_1_link}}/>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_1}    >
			</View>
			<View style = {noneModeStyles._heroicons_solid_home}    >
				<View style = {noneModeStyles._Group}    >
					<View style = {noneModeStyles.style24}    >
						<View style = {noneModeStyles.style25}   >
							<Svg style={{height: 25, width: 25}} viewBox = "0 0 25 25">
								<Path fill = {"#FA4A0C"}     d = "M13.5857 0.457485C13.2926 0.164557 12.8953 0 12.481 0C12.0666 0 11.6693 0.164557 11.3763 0.457485L0.438618 11.3951C0.153992 11.6898 -0.00350101 12.0845 5.90674e-05 12.4942C0.00361914 12.9039 0.167948 13.2958 0.457652 13.5855C0.747356 13.8752 1.13925 14.0395 1.54894 14.0431C1.95863 14.0466 2.35333 13.8892 2.64802 13.6045L3.10584 13.1467V23.4375C3.10584 23.8519 3.27046 24.2493 3.56349 24.5423C3.85652 24.8354 4.25395 25 4.66836 25H7.7934C8.20781 25 8.60524 24.8354 8.89827 24.5423C9.1913 24.2493 9.35592 23.8519 9.35592 23.4375V20.3124C9.35592 19.898 9.52054 19.5006 9.81357 19.2076C10.1066 18.9145 10.504 18.7499 10.9184 18.7499H14.0435C14.4579 18.7499 14.8553 18.9145 15.1483 19.2076C15.4414 19.5006 15.606 19.898 15.606 20.3124V23.4375C15.606 23.8519 15.7706 24.2493 16.0637 24.5423C16.3567 24.8354 16.7541 25 17.1685 25H20.2936C20.708 25 21.1054 24.8354 21.3984 24.5423C21.6915 24.2493 21.8561 23.8519 21.8561 23.4375V13.1467L22.3139 13.6045C22.6086 13.8892 23.0033 14.0466 23.413 14.0431C23.8227 14.0395 24.2146 13.8752 24.5043 13.5855C24.794 13.2958 24.9583 12.9039 24.9619 12.4942C24.9654 12.0845 24.8079 11.6898 24.5233 11.3951L13.5857 0.457485Z"/>
							</Svg>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._ic_sharp_history}    >
				<View style = {noneModeStyles.style27}    >
					<View style = {noneModeStyles.style28}   >
						<Svg style={{height: 22, width: 26}} viewBox = "0 0 26 22">
							<Path fill = {"black"}     d = "M14.6667 0C11.7493 0 8.95139 1.15893 6.88849 3.22183C4.82559 5.28473 3.66667 8.08262 3.66667 11H0L4.75444 15.7544L4.84 15.9256L9.77778 11H6.11111C6.11111 6.27 9.93667 2.44444 14.6667 2.44444C19.3967 2.44444 23.2222 6.27 23.2222 11C23.2222 15.73 19.3967 19.5556 14.6667 19.5556C12.3078 19.5556 10.1689 18.59 8.62889 17.0378L6.89333 18.7733C7.91195 19.7976 9.12326 20.61 10.4574 21.1638C11.7916 21.7176 13.2221 22.0018 14.6667 22C17.584 22 20.3819 20.8411 22.4448 18.7782C24.5077 16.7153 25.6667 13.9174 25.6667 11C25.6667 8.08262 24.5077 5.28473 22.4448 3.22183C20.3819 1.15893 17.584 4.34724e-08 14.6667 0ZM13.4444 6.11111V12.2222L18.6389 15.3022L19.58 13.7256L15.2778 11.1711V6.11111H13.4444Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._user}    >
				<View style = {noneModeStyles.style30}    >
					<View style = {noneModeStyles.style31}   >
						<Svg style={{height: 8, width: 18}} viewBox = "0 0 18 8">
							<Path fill = {"none"}   stroke = {"#ADADAF"} strokeWidth = {2} d = "M17 7V5C17 3.93913 16.5786 2.92172 15.8284 2.17157C15.0783 1.42143 14.0609 1 13 1H5C3.93913 1 2.92172 1.42143 2.17157 2.17157C1.42143 2.92172 1 3.93913 1 5V7"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style32}    >
					<View style = {noneModeStyles.style33}   >
						<Svg style={{height: 10, width: 10}} viewBox = "0 0 10 10">
							<Path fill = {"none"}   stroke = {"#ADADAF"} strokeWidth = {2} d = "M5 9C7.20914 9 9 7.20914 9 5C9 2.79086 7.20914 1 5 1C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._heart}    >
				<View style = {noneModeStyles.style35}    >
					<View style = {noneModeStyles.style36}   >
						<Svg style={{height: 21, width: 23}} viewBox = "0 0 23 21">
							<Path fill = {"none"}   stroke = {"#ADADAF"} strokeWidth = {2} d = "M20.3772 2.62288C19.8642 2.10972 19.2552 1.70265 18.585 1.42491C17.9147 1.14718 17.1962 1.00423 16.4707 1.00423C15.7452 1.00423 15.0267 1.14718 14.3564 1.42491C13.6862 1.70265 13.0772 2.10972 12.5642 2.62288L11.4998 3.68736L10.4353 2.62288C9.39921 1.58682 7.99401 1.00477 6.5288 1.00477C5.0636 1.00477 3.6584 1.58682 2.62234 2.62288C1.58628 3.65894 1.00423 5.06413 1.00423 6.52934C1.00423 7.99455 1.58628 9.39974 2.62234 10.4358L3.68683 11.5003L11.4998 19.3132L19.3127 11.5003L20.3772 10.4358C20.8903 9.92289 21.2974 9.31389 21.5751 8.64361C21.8529 7.97332 21.9958 7.25489 21.9958 6.52934C21.9958 5.8038 21.8529 5.08536 21.5751 4.41508C21.2974 3.74479 20.8903 3.1358 20.3772 2.62288V2.62288Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_69}    >
			</View>
			<View style = {noneModeStyles.style38}    >
				<View style = {noneModeStyles.style39}   >
					<Svg style={{height: 17, width: 24}} viewBox = "0 0 24 17">
						<Path fill = {"none"}   stroke = {"black"} strokeWidth = {2} d = "M1 8.33333H12.9014M1 1H23M1 15.6667H23"/>
					</Svg>
				</View>
			</View>
			<View style = {noneModeStyles.style40}    >
				<View style = {noneModeStyles.style41}   >
					<Svg style={{height: 17, width: 24}} viewBox = "0 0 24 17">
						<Path fill = {"none"}   stroke = {"black"} strokeWidth = {2} d = "M0.999971 0.999971H4.99986L7.67978 14.3896C7.77122 14.85 8.02168 15.2635 8.3873 15.5579C8.75293 15.8522 9.21043 16.0085 9.67972 15.9995H19.3994C19.8687 16.0085 20.3262 15.8522 20.6919 15.5579C21.0575 15.2635 21.3079 14.85 21.3994 14.3896L22.9993 5.99983H5.99983"/>
					</Svg>
				</View>
			</View>
			<View style = {noneModeStyles._megumi_nachev_qkQR_OrvZic_unsplash_1_container_2}    >
				<View style = {noneModeStyles._megumi_nachev_qkQR_OrvZic_unsplash_1_2}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_megumi_nachev_qkQR_OrvZic_unsplash_1_2_link}}/>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_iPhone_11_Pro_Max___3

const noneModeStyles = StyleSheet.create({
_page9: {
	height: 896,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(242, 242, 242)",
	},
_Dairy_Products_For_You: {
	width: 220,
	height: 81,
	position: "absolute",
	left: 50,
	top: 132,
	color: "rgb(0, 0, 0)",
	fontSize: 28,
	fontWeight: "500",
	lineHeight: 32.8125,
	fontFamily: "Changa",
	textAlign: "left",
	},
_Rectangle_7: {
	width: 314,
	height: 60,
	backgroundColor: "rgb(239, 238, 238)",
	position: "absolute",
	left: 50,
	top: 242,
	borderRadius: 30,
	},
_Search: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 119,
	top: 262,
	color: "rgb(0, 0, 0)",
	fontSize: 17,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
_see_more: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 315,
	top: 426,
	color: "rgb(250, 74, 12)",
	fontSize: 15,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
_Milk: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 74,
	top: 350,
	color: "rgb(250, 74, 12)",
	fontSize: 17,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
_Yougurt: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 150,
	top: 350,
	color: "rgb(154, 154, 157)",
	fontSize: 17,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
_Desi_Ghee: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 246,
	top: 350,
	color: "rgb(154, 154, 157)",
	fontSize: 17,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
_Butter: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 349,
	top: 350,
	color: "rgb(154, 154, 157)",
	fontSize: 17,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
style9: {
	width: 18,
	height: 18,
	position: "absolute",
	left: 85,
	top: 263,
	},
style10: {
	},
_Group_4: {
	width: 220,
	height: 270,
	position: "absolute",
	left: 50,
	top: 496,
	},
_Rectangle_9: {
	width: 220,
	height: 270,
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
_Fresh_Milk__Litre: {
	width: 125,
	height: 52,
	position: "absolute",
	left: 45,
	top: 145,
	color: "rgb(0, 0, 0)",
	fontSize: 22,
	fontWeight: "400",
	lineHeight: 22.2939,
	fontFamily: "Changa",
	textAlign: "center",
	},
_120_PKR: {
	width: 172,
	height: 19,
	position: "absolute",
	left: 24,
	top: 212,
	color: "rgb(250, 74, 12)",
	fontSize: 17,
	fontWeight: "400",
	lineHeight: 19.9219,
	fontFamily: "Changa",
	textAlign: "center",
	},
_Group_5: {
	width: 220,
	height: 270,
	position: "absolute",
	left: 304,
	top: 496,
	},
_Rectangle_8: {
	width: 220,
	height: 270,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 30,
	shadowOffset: {
		width: 0,
		height: 20
	},
	shadowColor: "rgba(57.375, 57.375, 57.375, 0.1)",
	shadowRadius: 50,
	},
_Fresh_Milk_: {
	width: 136,
	height: 52,
	position: "absolute",
	left: 24,
	top: 145,
	color: "rgb(0, 0, 0)",
	fontSize: 22,
	fontWeight: "400",
	lineHeight: 22.2939,
	fontFamily: "Changa",
	textAlign: "center",
	},
_Subscribe: {
	width: 172,
	height: 19,
	position: "absolute",
	left: 24,
	top: 212,
	color: "rgb(250, 74, 12)",
	fontSize: 17,
	fontWeight: "400",
	lineHeight: 19.9219,
	fontFamily: "Changa",
	textAlign: "center",
	},
_megumi_nachev_qkQR_OrvZic_unsplash_1_container: {
	width: 160,
	height: 111,
	position: "absolute",
	left: 37,
	top: 24,
	},
_megumi_nachev_qkQR_OrvZic_unsplash_1: {
	width: "100%",
	height: "100%",
	borderRadius: 30,
	},
_Rectangle_1: {
	width: 83,
	height: 2,
	backgroundColor: "rgb(250, 74, 12)",
	position: "absolute",
	left: 53,
	top: 379,
	borderRadius: 40,
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(195.5, 63.0162, 21.1792, 0.1)",
	shadowRadius: 4,
	},
_heroicons_solid_home: {
	width: 31,
	height: 31,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 50,
	top: 818,
	shadowOffset: {
		width: 0,
		height: 6
	},
	shadowColor: "rgba(214.625, 55.9107, 0, 0.4)",
	shadowRadius: 20,
	},
_Group: {
	width: 24.762,
	height: 24.7997,
	position: "absolute",
	transform: [
		{translateX: 3.11902},
		{translateY: 3.10034},
	],
	},
style24: {
	position: "absolute",
	},
style25: {
	},
_ic_sharp_history: {
	width: 29,
	height: 29,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 333,
	top: 819,
	},
style27: {
	position: "absolute",
	transform: [
		{translateX: 1.20837},
		{translateY: 3.625},
	],
	},
style28: {
	},
_user: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 241,
	top: 822,
	},
style30: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 15},
	],
	},
style31: {
	},
style32: {
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 3},
	],
	},
style33: {
	},
_heart: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 149,
	top: 822,
	},
style35: {
	position: "absolute",
	transform: [
		{translateX: 1.54871},
		{translateY: 2.99817},
	],
	},
style36: {
	},
_Rectangle_69: {
	width: 413,
	height: 69,
	backgroundColor: "rgb(169, 68, 37)",
	position: "absolute",
	left: 1,
	top: 21,
	},
style38: {
	width: 22,
	height: 14.6667,
	position: "absolute",
	left: 19,
	top: 45,
	},
style39: {
	},
style40: {
	position: "absolute",
	transform: [
		{translateX: 385},
		{translateY: 44},
	],
	},
style41: {
	},
_megumi_nachev_qkQR_OrvZic_unsplash_1_container_2: {
	width: 160,
	height: 111,
	position: "absolute",
	left: 81,
	top: 520,
	},
_megumi_nachev_qkQR_OrvZic_unsplash_1_2: {
	width: "100%",
	height: "100%",
	borderRadius: 30,
	},
})

