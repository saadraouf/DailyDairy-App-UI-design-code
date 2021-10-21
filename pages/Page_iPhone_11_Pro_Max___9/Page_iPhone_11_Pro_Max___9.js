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
const Page_iPhone_11_Pro_Max___9  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page6}    >
			<Text style = {noneModeStyles._Payment}   >
				Payment
			</Text>
			<View style = {noneModeStyles._Rectangle_2}    >
			</View>
			<Text style = {noneModeStyles._Proceed_to_payment}   >
				Proceed to payment
			</Text>
			<View style = {noneModeStyles._Group_51}    >
				<Text style = {noneModeStyles._Total}   >
					Total
				</Text>
				<Text style = {noneModeStyles._890_PKR}   >
					890 PKR
				</Text>
			</View>
			<View style = {noneModeStyles._Group_50}    >
				<Text style = {noneModeStyles._Payment_method}   >
					Payment method
				</Text>
				<View style = {noneModeStyles._Rectangle_11}    >
				</View>
				<View style = {noneModeStyles._Group_9}    >
					<Text style = {noneModeStyles._Card}   >
						Card
					</Text>
					<View style = {noneModeStyles._Rectangle_12}    >
					</View>
					<View style = {noneModeStyles._Line_3}    >
					</View>
					<View style = {noneModeStyles._Ellipse_7}    >
					</View>
					<View style = {noneModeStyles._Ellipse_8}    >
					</View>
				</View>
				<View style = {noneModeStyles._Group_10}    >
					<Text style = {noneModeStyles._Bank_account}   >
						Bank account
					</Text>
					<View style = {noneModeStyles._Rectangle_12_2}    >
					</View>
					<View style = {noneModeStyles._Ellipse_7_2}    >
					</View>
				</View>
				<View style = {noneModeStyles._bi_credit_card_2_front_fill}    >
					<View style = {noneModeStyles._Group}    >
						<View style = {noneModeStyles.style22}    >
							<View style = {noneModeStyles.style23}   >
								<Svg style={{height: 12, width: 16}} viewBox = "0 0 16 12">
									<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H14C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V10C16 10.5304 15.7893 11.0391 15.4142 11.4142C15.0391 11.7893 14.5304 12 14 12H2C1.46957 12 0.960859 11.7893 0.585786 11.4142C0.210714 11.0391 0 10.5304 0 10V2ZM2.5 3C2.36739 3 2.24021 3.05268 2.14645 3.14645C2.05268 3.24021 2 3.36739 2 3.5V4.5C2 4.63261 2.05268 4.75979 2.14645 4.85355C2.24021 4.94732 2.36739 5 2.5 5H4.5C4.63261 5 4.75979 4.94732 4.85355 4.85355C4.94732 4.75979 5 4.63261 5 4.5V3.5C5 3.36739 4.94732 3.24021 4.85355 3.14645C4.75979 3.05268 4.63261 3 4.5 3H2.5ZM2.5 6C2.36739 6 2.24021 6.05268 2.14645 6.14645C2.05268 6.24021 2 6.36739 2 6.5C2 6.63261 2.05268 6.75979 2.14645 6.85355C2.24021 6.94732 2.36739 7 2.5 7H7.5C7.63261 7 7.75979 6.94732 7.85355 6.85355C7.94732 6.75979 8 6.63261 8 6.5C8 6.36739 7.94732 6.24021 7.85355 6.14645C7.75979 6.05268 7.63261 6 7.5 6H2.5ZM2.5 8C2.36739 8 2.24021 8.05268 2.14645 8.14645C2.05268 8.24021 2 8.36739 2 8.5C2 8.63261 2.05268 8.75979 2.14645 8.85355C2.24021 8.94732 2.36739 9 2.5 9H3.5C3.63261 9 3.75979 8.94732 3.85355 8.85355C3.94732 8.75979 4 8.63261 4 8.5C4 8.36739 3.94732 8.24021 3.85355 8.14645C3.75979 8.05268 3.63261 8 3.5 8H2.5ZM5.5 8C5.36739 8 5.24021 8.05268 5.14645 8.14645C5.05268 8.24021 5 8.36739 5 8.5C5 8.63261 5.05268 8.75979 5.14645 8.85355C5.24021 8.94732 5.36739 9 5.5 9H6.5C6.63261 9 6.75979 8.94732 6.85355 8.85355C6.94732 8.75979 7 8.63261 7 8.5C7 8.36739 6.94732 8.24021 6.85355 8.14645C6.75979 8.05268 6.63261 8 6.5 8H5.5ZM8.5 8C8.36739 8 8.24021 8.05268 8.14645 8.14645C8.05268 8.24021 8 8.36739 8 8.5C8 8.63261 8.05268 8.75979 8.14645 8.85355C8.24021 8.94732 8.36739 9 8.5 9H9.5C9.63261 9 9.75979 8.94732 9.85355 8.85355C9.94732 8.75979 10 8.63261 10 8.5C10 8.36739 9.94732 8.24021 9.85355 8.14645C9.75979 8.05268 9.63261 8 9.5 8H8.5ZM11.5 8C11.3674 8 11.2402 8.05268 11.1464 8.14645C11.0527 8.24021 11 8.36739 11 8.5C11 8.63261 11.0527 8.75979 11.1464 8.85355C11.2402 8.94732 11.3674 9 11.5 9H12.5C12.6326 9 12.7598 8.94732 12.8536 8.85355C12.9473 8.75979 13 8.63261 13 8.5C13 8.36739 12.9473 8.24021 12.8536 8.14645C12.7598 8.05268 12.6326 8 12.5 8H11.5Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._dashicons_bank}    >
					<View style = {noneModeStyles.style25}    >
						<View style = {noneModeStyles.style26}   >
							<Svg style={{height: 16, width: 14}} viewBox = "0 0 14 16">
								<Path fill = {"white"}     d = "M7 0L0 4V5H14V4L7 0ZM2 6L1.8 13H4.3L4 6H2ZM6 6L5.8 13H8.3L8 6H6ZM10 6L9.8 13H12.3L12 6H10ZM0 16H14V14H0V16Z"/>
							</Svg>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Group_52}    >
				<Text style = {noneModeStyles._Delivery_method_}   >
					Delivery method.
				</Text>
				<View style = {noneModeStyles._Rectangle_11_2}    >
				</View>
				<View style = {noneModeStyles._Group_9_2}    >
					<Text style = {noneModeStyles._Door_delivery}   >
						Door delivery
					</Text>
					<View style = {noneModeStyles._Line_3_2}    >
					</View>
					<View style = {noneModeStyles._Ellipse_7_3}    >
					</View>
					<View style = {noneModeStyles._Ellipse_8_2}    >
					</View>
				</View>
				<View style = {noneModeStyles._Group_10_2}    >
					<Text style = {noneModeStyles._Pick_up}   >
						Pick up
					</Text>
					<View style = {noneModeStyles._Ellipse_7_4}    >
					</View>
				</View>
			</View>
			<View style = {noneModeStyles.style38}    >
				<View style = {noneModeStyles.style39}   >
					<Svg style={{height: 69, width: 413}} viewBox = "0 0 413 69">
						<Path fill = {"#A94425"}     d = "M0 0H413V69H0V0Z"/>
					</Svg>
				</View>
			</View>
			<Text style = {noneModeStyles._Checkout}   >
				Checkout
			</Text>
			<View style = {noneModeStyles.style41}    >
				<View style = {noneModeStyles.style42}   >
					<Svg style={{height: 14, width: 8}} viewBox = "0 0 8 14">
						<Path fill = {"none"}   stroke = {"black"} strokeWidth = {2} d = "M7 13L1 7L7 1"/>
					</Svg>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_iPhone_11_Pro_Max___9

const noneModeStyles = StyleSheet.create({
_page6: {
	height: 896,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(245, 245, 248)",
	},
_Payment: {
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
_Group_51: {
	width: 318,
	height: 40,
	position: "absolute",
	left: 50,
	top: 711,
	},
_Total: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 3,
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
	top: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 22,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
_Group_50: {
	width: 315,
	height: 245,
	position: "absolute",
	left: 46,
	top: 213,
	},
_Payment_method: {
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
_Rectangle_11: {
	width: 315,
	height: 205,
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
	width: 262,
	height: 55,
	position: "absolute",
	left: 21,
	top: 60,
	},
_Card: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 81,
	top: 10,
	color: "rgb(0, 0, 0)",
	fontSize: 17,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
_Rectangle_12: {
	width: 40,
	height: 40,
	backgroundColor: "rgb(244, 123, 10)",
	position: "absolute",
	left: 30,
	top: 0,
	borderRadius: 10,
	},
_Line_3: {
	width: 232,
	height: 0,
	position: "absolute",
	left: 30,
	top: 55,
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
	top: 11,
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
	top: 15,
	},
_Group_10: {
	width: 183,
	height: 41,
	position: "absolute",
	left: 21,
	top: 130,
	},
_Bank_account: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 81,
	top: 10,
	color: "rgb(0, 0, 0)",
	fontSize: 17,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
_Rectangle_12_2: {
	width: 40,
	height: 40,
	backgroundColor: "rgb(196, 196, 196)",
	position: "absolute",
	left: 30,
	top: 0,
	borderRadius: 10,
	},
_Ellipse_7_2: {
	width: 15,
	height: 15,
	position: "absolute",
	left: 0,
	top: 11,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(159, 159, 159)",
	},
_bi_credit_card_2_front_fill: {
	width: 16,
	height: 16,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 64,
	top: 71,
	},
_Group: {
	width: 16,
	height: 12,
	position: "absolute",
	transform: [
		{translateY: 2},
	],
	},
style22: {
	position: "absolute",
	},
style23: {
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
style25: {
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 2},
	],
	},
style26: {
	},
_Group_52: {
	width: 315,
	height: 196,
	position: "absolute",
	left: 51,
	top: 477,
	},
_Delivery_method_: {
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
_Rectangle_11_2: {
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
_Group_9_2: {
	width: 262,
	height: 45,
	position: "absolute",
	left: 21,
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
_Ellipse_7_3: {
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
_Ellipse_8_2: {
	width: 7,
	height: 7,
	position: "absolute",
	left: 4,
	top: 5,
	},
_Group_10_2: {
	width: 85,
	height: 31,
	position: "absolute",
	left: 21,
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
_Ellipse_7_4: {
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
style38: {
	width: 413,
	height: 69,
	position: "absolute",
	left: 1,
	top: 22,
	},
style39: {
	},
_Checkout: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 171,
	top: 45,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
style41: {
	position: "absolute",
	transform: [
		{translateX: 13},
		{translateY: 50},
	],
	},
style42: {
	},
})

