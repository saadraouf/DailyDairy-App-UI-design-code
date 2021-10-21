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
const Page_iPhone_11_Pro_Max___4  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page2}    >
			<Text style = {noneModeStyles._Fresh_Cow_Milk___Subscribe}   >
				Fresh Cow Milk / Subscribe 
			</Text>
			<Text style = {noneModeStyles._Delivery_info}   >
				Delivery info
			</Text>
			<Text style = {noneModeStyles._Return_policy}   >
				Return policy
			</Text>
			<Text style = {noneModeStyles._Can_be_delivered_on_daily_basis_if_monthly_subscription_is_availed___you_can_also_order_for_one_time}   >
				Can be delivered on daily basis if monthly subscription is availed , you can also order for one time 
			</Text>
			<Text style = {noneModeStyles._Quality_guranteed___100___pure_without_any_contamination_otherwise_can_be_returned_on_the_spot}   >
				Quality guranteed , 100 % pure without any contamination otherwise can be returned on the spot
			</Text>
			<Text style = {noneModeStyles._120_PKR___Litre}   >
				120 PKR / Litre
			</Text>
			<View style = {noneModeStyles._Group_6}    >
				<View style = {noneModeStyles._Ellipse_3}    >
				</View>
				<View style = {noneModeStyles._Ellipse_4}    >
				</View>
				<View style = {noneModeStyles._Ellipse_5}    >
				</View>
				<View style = {noneModeStyles._Ellipse_6}    >
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_2}    >
			</View>
			<Text style = {noneModeStyles._Add_to_cart}   >
				Add to cart
			</Text>
			<View style = {noneModeStyles._megumi_nachev_qkQR_OrvZic_unsplash_1_container}    >
				<View style = {noneModeStyles._megumi_nachev_qkQR_OrvZic_unsplash_1}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_megumi_nachev_qkQR_OrvZic_unsplash_1_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_69}    >
			</View>
			<View style = {noneModeStyles.style17}    >
				<View style = {noneModeStyles.style18}   >
					<Svg style={{height: 14, width: 8}} viewBox = "0 0 8 14">
						<Path fill = {"none"}   stroke = {"black"} strokeWidth = {2} d = "M7 13L1 7L7 1"/>
					</Svg>
				</View>
			</View>
			<View style = {noneModeStyles.style19}    >
				<View style = {noneModeStyles.style20}   >
					<Svg style={{height: 18, width: 20}} viewBox = "0 0 20 18">
						<Path fill = {"none"}   stroke = {"black"} strokeWidth = {2} d = "M17.5868 2.41326C17.1484 1.9747 16.6279 1.6268 16.0551 1.38944C15.4822 1.15208 14.8682 1.02991 14.2481 1.02991C13.6281 1.02991 13.0141 1.15208 12.4412 1.38944C11.8684 1.6268 11.3479 1.9747 10.9095 2.41326L9.99978 3.32301L9.09003 2.41326C8.20457 1.52781 7.00364 1.03036 5.75142 1.03036C4.49919 1.03036 3.29826 1.52781 2.4128 2.41326C1.52735 3.29872 1.02991 4.49965 1.02991 5.75187C1.02991 7.0041 1.52735 8.20503 2.4128 9.09049L3.32255 10.0002L9.99978 16.6775L16.677 10.0002L17.5868 9.09049C18.0253 8.65213 18.3732 8.13166 18.6106 7.55881C18.8479 6.98596 18.9701 6.37195 18.9701 5.75187C18.9701 5.1318 18.8479 4.51779 18.6106 3.94494C18.3732 3.37209 18.0253 2.85162 17.5868 2.41326V2.41326Z"/>
					</Svg>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_iPhone_11_Pro_Max___4

const noneModeStyles = StyleSheet.create({
_page2: {
	height: 896,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(246, 246, 249)",
	},
_Fresh_Cow_Milk___Subscribe: {
	width: 318,
	height: 52,
	position: "absolute",
	left: 48,
	top: 426,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "400",
	lineHeight: 28.125,
	fontFamily: "Changa",
	textAlign: "center",
	},
_Delivery_info: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 53,
	top: 533,
	color: "rgb(0, 0, 0)",
	fontSize: 17,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
_Return_policy: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 53,
	top: 643,
	color: "rgb(0, 0, 0)",
	fontSize: 17,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
_Can_be_delivered_on_daily_basis_if_monthly_subscription_is_availed___you_can_also_order_for_one_time: {
	width: 297,
	height: 77,
	position: "absolute",
	left: 53,
	top: 560,
	color: "rgb(0, 0, 0)",
	fontSize: 15,
	fontWeight: "400",
	lineHeight: 20.8254,
	fontFamily: "Changa",
	textAlign: "left",
	},
_Quality_guranteed___100___pure_without_any_contamination_otherwise_can_be_returned_on_the_spot: {
	width: 297,
	height: 150,
	position: "absolute",
	left: 53,
	top: 674,
	color: "rgb(0, 0, 0)",
	fontSize: 15,
	fontWeight: "400",
	lineHeight: 20.8254,
	fontFamily: "Changa",
	textAlign: "left",
	},
_120_PKR___Litre: {
	width: 172,
	height: 19,
	position: "absolute",
	left: 121,
	top: 471,
	color: "rgb(250, 74, 12)",
	fontSize: 22,
	fontWeight: "400",
	lineHeight: 25.7812,
	fontFamily: "Changa",
	textAlign: "center",
	},
_Group_6: {
	width: 68,
	height: 8,
	position: "absolute",
	left: 172,
	top: 373,
	},
_Ellipse_3: {
	width: 8,
	height: 8,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Ellipse_4: {
	width: 8,
	height: 8,
	position: "absolute",
	left: 20,
	top: 0,
	},
_Ellipse_5: {
	width: 8,
	height: 8,
	position: "absolute",
	left: 40,
	top: 0,
	},
_Ellipse_6: {
	width: 8,
	height: 8,
	position: "absolute",
	left: 60,
	top: 0,
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
_Add_to_cart: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 160,
	top: 810,
	color: "rgb(246, 246, 249)",
	fontSize: 17,
	fontWeight: "400",
	fontFamily: "Abel",
	textAlign: "left",
	},
_megumi_nachev_qkQR_OrvZic_unsplash_1_container: {
	width: 201,
	height: 170,
	position: "absolute",
	left: 107,
	top: 140,
	},
_megumi_nachev_qkQR_OrvZic_unsplash_1: {
	width: "100%",
	height: "100%",
	borderRadius: 30,
	},
_Rectangle_69: {
	width: 413,
	height: 69,
	backgroundColor: "rgb(169, 68, 37)",
	position: "absolute",
	left: 1,
	top: 22,
	},
style17: {
	position: "absolute",
	transform: [
		{translateX: 42},
		{translateY: 44},
	],
	},
style18: {
	},
style19: {
	position: "absolute",
	transform: [
		{translateX: 366},
		{translateY: 44},
	],
	},
style20: {
	},
})

