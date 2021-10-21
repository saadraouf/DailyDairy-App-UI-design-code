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
import {image_jonas_kakaroto_mjRwhvqEC0U_unsplash_1_link} from './assets/imageLinks.js'
const Page_iPhone_11_Pro_Max___6  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page12}    >
			<Text style = {noneModeStyles._Payment_Method}   >
				Payment Method
			</Text>
			<Text style = {noneModeStyles._Information}   >
				Information
			</Text>
			<View style = {noneModeStyles._Rectangle_10}    >
			</View>
			<View style = {noneModeStyles._Rectangle_11}    >
			</View>
			<Text style = {noneModeStyles._Saad}   >
				Saad
			</Text>
			<Text style = {noneModeStyles._fa18_bse_071_cuilahore_edu_pk}   >
				fa18-bse-071@cuilahore.edu.pk
			</Text>
			<Text style = {noneModeStyles._Comsats_Lhr}   >
				Comsats Lhr
			</Text>
			<View style = {noneModeStyles._Rectangle_2}    >
			</View>
			<Text style = {noneModeStyles._Updatet}   >
				Updatet
			</Text>
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
				<View style = {noneModeStyles._Line_3_2}    >
				</View>
				<View style = {noneModeStyles._Ellipse_7_2}    >
				</View>
			</View>
			<View style = {noneModeStyles._Group_11}    >
				<Text style = {noneModeStyles._Paypal}   >
					Paypal
				</Text>
				<View style = {noneModeStyles._Rectangle_12_3}    >
				</View>
				<View style = {noneModeStyles._Ellipse_7_3}    >
				</View>
			</View>
			<View style = {noneModeStyles._bi_credit_card_2_front_fill}    >
				<View style = {noneModeStyles._Group}    >
					<View style = {noneModeStyles.style27}    >
						<View style = {noneModeStyles.style28}   >
							<Svg style={{height: 12, width: 16}} viewBox = "0 0 16 12">
								<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H14C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V10C16 10.5304 15.7893 11.0391 15.4142 11.4142C15.0391 11.7893 14.5304 12 14 12H2C1.46957 12 0.960859 11.7893 0.585786 11.4142C0.210714 11.0391 0 10.5304 0 10V2ZM2.5 3C2.36739 3 2.24021 3.05268 2.14645 3.14645C2.05268 3.24021 2 3.36739 2 3.5V4.5C2 4.63261 2.05268 4.75979 2.14645 4.85355C2.24021 4.94732 2.36739 5 2.5 5H4.5C4.63261 5 4.75979 4.94732 4.85355 4.85355C4.94732 4.75979 5 4.63261 5 4.5V3.5C5 3.36739 4.94732 3.24021 4.85355 3.14645C4.75979 3.05268 4.63261 3 4.5 3H2.5ZM2.5 6C2.36739 6 2.24021 6.05268 2.14645 6.14645C2.05268 6.24021 2 6.36739 2 6.5C2 6.63261 2.05268 6.75979 2.14645 6.85355C2.24021 6.94732 2.36739 7 2.5 7H7.5C7.63261 7 7.75979 6.94732 7.85355 6.85355C7.94732 6.75979 8 6.63261 8 6.5C8 6.36739 7.94732 6.24021 7.85355 6.14645C7.75979 6.05268 7.63261 6 7.5 6H2.5ZM2.5 8C2.36739 8 2.24021 8.05268 2.14645 8.14645C2.05268 8.24021 2 8.36739 2 8.5C2 8.63261 2.05268 8.75979 2.14645 8.85355C2.24021 8.94732 2.36739 9 2.5 9H3.5C3.63261 9 3.75979 8.94732 3.85355 8.85355C3.94732 8.75979 4 8.63261 4 8.5C4 8.36739 3.94732 8.24021 3.85355 8.14645C3.75979 8.05268 3.63261 8 3.5 8H2.5ZM5.5 8C5.36739 8 5.24021 8.05268 5.14645 8.14645C5.05268 8.24021 5 8.36739 5 8.5C5 8.63261 5.05268 8.75979 5.14645 8.85355C5.24021 8.94732 5.36739 9 5.5 9H6.5C6.63261 9 6.75979 8.94732 6.85355 8.85355C6.94732 8.75979 7 8.63261 7 8.5C7 8.36739 6.94732 8.24021 6.85355 8.14645C6.75979 8.05268 6.63261 8 6.5 8H5.5ZM8.5 8C8.36739 8 8.24021 8.05268 8.14645 8.14645C8.05268 8.24021 8 8.36739 8 8.5C8 8.63261 8.05268 8.75979 8.14645 8.85355C8.24021 8.94732 8.36739 9 8.5 9H9.5C9.63261 9 9.75979 8.94732 9.85355 8.85355C9.94732 8.75979 10 8.63261 10 8.5C10 8.36739 9.94732 8.24021 9.85355 8.14645C9.75979 8.05268 9.63261 8 9.5 8H8.5ZM11.5 8C11.3674 8 11.2402 8.05268 11.1464 8.14645C11.0527 8.24021 11 8.36739 11 8.5C11 8.63261 11.0527 8.75979 11.1464 8.85355C11.2402 8.94732 11.3674 9 11.5 9H12.5C12.6326 9 12.7598 8.94732 12.8536 8.85355C12.9473 8.75979 13 8.63261 13 8.5C13 8.36739 12.9473 8.24021 12.8536 8.14645C12.7598 8.05268 12.6326 8 12.5 8H11.5Z"/>
							</Svg>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._dashicons_bank}    >
				<View style = {noneModeStyles.style30}    >
					<View style = {noneModeStyles.style31}   >
						<Svg style={{height: 16, width: 14}} viewBox = "0 0 14 16">
							<Path fill = {"white"}     d = "M7 0L0 4V5H14V4L7 0ZM2 6L1.8 13H4.3L4 6H2ZM6 6L5.8 13H8.3L8 6H6ZM10 6L9.8 13H12.3L12 6H10ZM0 16H14V14H0V16Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._cib_paypal}    >
				<View style = {noneModeStyles.style33}    >
					<View style = {noneModeStyles.style34}   >
						<Svg style={{height: 15, width: 12}} viewBox = "0 0 12 15">
							<Path fill = {"white"}     d = "M3.47967 8.33305C3.37015 8.93317 2.93607 11.7307 2.80754 12.5214C2.79804 12.5779 2.77604 12.5994 2.71352 12.5994H0.382081C0.327374 12.5997 0.273236 12.5883 0.223375 12.5657C0.173514 12.5432 0.129109 12.5102 0.0932015 12.4689C0.0572942 12.4277 0.0307334 12.3791 0.0153386 12.3266C-5.62793e-05 12.2741 -0.00392118 12.2189 0.00400866 12.1648L1.83586 0.540574C1.86109 0.392984 1.93765 0.259054 2.05203 0.162427C2.16641 0.0658001 2.31125 0.0126902 2.46098 0.0124732C7.22138 0.0124732 7.62146 -0.103049 8.83719 0.369041C10.7155 1.09718 10.8876 2.85401 10.2124 4.75437C9.54032 6.71125 7.94652 7.55191 5.83362 7.57691C4.47736 7.59892 3.6612 7.35787 3.48017 8.33305H3.47967ZM11.1596 3.8352C11.1031 3.79469 11.0816 3.77869 11.0656 3.87571C11 4.23208 10.908 4.5831 10.7906 4.92591C9.54332 8.48308 6.08666 8.17352 4.39884 8.17352C4.20831 8.17352 4.08328 8.27654 4.05828 8.46708C3.35215 12.8554 3.21112 13.7711 3.21112 13.7711C3.17961 13.9931 3.32064 14.1742 3.54218 14.1742H5.52706C5.79611 14.1742 6.01765 13.9771 6.07116 13.7086C6.09317 13.54 6.03666 13.8991 6.52125 10.855C6.66528 10.1674 6.96833 10.2394 7.43692 10.2394C9.65634 10.2394 11.3877 9.33925 11.9033 6.72925C12.1063 5.64154 12.0473 4.49733 11.1596 3.8347V3.8352Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles.style35}    >
				<View style = {noneModeStyles.style36}   >
					<Svg style={{height: 69, width: 413}} viewBox = "0 0 413 69">
						<Path fill = {"#A94425"}     d = "M0 0H413V69H0V0Z"/>
					</Svg>
				</View>
			</View>
			<Text style = {noneModeStyles._My_profile}   >
				My profile
			</Text>
			<View style = {noneModeStyles._chevron_left}    >
				<View style = {noneModeStyles.style39}    >
					<View style = {noneModeStyles.style40}   >
						<Svg style={{height: 14, width: 8}} viewBox = "0 0 8 14">
							<Path fill = {"none"}   stroke = {"black"} strokeWidth = {2} d = "M7 13L1 7L7 1"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._jonas_kakaroto_mjRwhvqEC0U_unsplash_1_container}    >
				<View style = {noneModeStyles._jonas_kakaroto_mjRwhvqEC0U_unsplash_1}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_jonas_kakaroto_mjRwhvqEC0U_unsplash_1_link}}/>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_iPhone_11_Pro_Max___6

const noneModeStyles = StyleSheet.create({
_page12: {
	height: 896,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(245, 245, 248)",
	},
_Payment_Method: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 53,
	top: 351,
	color: "rgb(0, 0, 0)",
	fontSize: 17,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
_Information: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 53,
	top: 138,
	color: "rgb(0, 0, 0)",
	fontSize: 17,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
_Rectangle_10: {
	width: 315,
	height: 133,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 50,
	top: 170,
	borderRadius: 20,
	shadowOffset: {
		width: 0,
		height: 10
	},
	shadowColor: "rgba(0, 0, 0, 0.03)",
	shadowRadius: 40,
	},
_Rectangle_11: {
	width: 315,
	height: 231,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 50,
	top: 392,
	borderRadius: 20,
	shadowOffset: {
		width: 0,
		height: 10
	},
	shadowColor: "rgba(0, 0, 0, 0.03)",
	shadowRadius: 40,
	},
_Saad: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 141,
	top: 190,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
_fa18_bse_071_cuilahore_edu_pk: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 141,
	top: 223,
	color: "rgb(0, 0, 0)",
	fontSize: 13,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
_Comsats_Lhr: {
	width: 191,
	height: "auto",
	position: "absolute",
	left: 141,
	top: 245,
	color: "rgb(0, 0, 0)",
	fontSize: 13,
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
_Updatet: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 177,
	top: 810,
	color: "rgb(246, 246, 249)",
	fontSize: 17,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "center",
	},
_Group_9: {
	width: 262,
	height: 55,
	position: "absolute",
	left: 71,
	top: 412,
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
	width: 262,
	height: 55,
	position: "absolute",
	left: 71,
	top: 482,
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
_Line_3_2: {
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
_Group_11: {
	width: 131,
	height: 41,
	position: "absolute",
	left: 71,
	top: 552,
	},
_Paypal: {
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
_Rectangle_12_3: {
	width: 40,
	height: 40,
	backgroundColor: "rgb(196, 196, 196)",
	position: "absolute",
	left: 30,
	top: 0,
	borderRadius: 10,
	},
_Ellipse_7_3: {
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
	left: 114,
	top: 423,
	},
_Group: {
	width: 16,
	height: 12,
	position: "absolute",
	transform: [
		{translateY: 2},
	],
	},
style27: {
	position: "absolute",
	},
style28: {
	},
_dashicons_bank: {
	width: 20,
	height: 20,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 111,
	top: 491,
	},
style30: {
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 2},
	],
	},
style31: {
	},
_cib_paypal: {
	width: 16,
	height: 16,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 113,
	top: 564,
	},
style33: {
	position: "absolute",
	transform: [
		{translateX: 2.00199},
		{translateY: 0.915527},
	],
	},
style34: {
	},
style35: {
	width: 413,
	height: 69,
	position: "absolute",
	left: 1,
	top: 22,
	},
style36: {
	},
_My_profile: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 175,
	top: 50,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
_chevron_left: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 1,
	top: 44,
	},
style39: {
	position: "absolute",
	transform: [
		{translateX: 9},
		{translateY: 6},
	],
	},
style40: {
	},
_jonas_kakaroto_mjRwhvqEC0U_unsplash_1_container: {
	width: 43,
	height: 48,
	position: "absolute",
	left: 58,
	top: 206,
	},
_jonas_kakaroto_mjRwhvqEC0U_unsplash_1: {
	width: "100%",
	height: "100%",
	},
})

