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
import {image_megumi_nachev_xhOUnxVVb6s_unsplash_1_link} from './assets/imageLinks.js'
const Page_iPhone_11_Pro_Max___7  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page15}    >
			<View style = {noneModeStyles._Group_49}    >
				<View style = {noneModeStyles._Rectangle_11}    >
				</View>
				<View style = {noneModeStyles._bi_credit_card_2_front_fill}    >
					<View style = {noneModeStyles._Group}    >
						<View style = {noneModeStyles._layer_8d2598}    >
							<View style = {noneModeStyles._layer_091e96}   >
								<Svg style={{height: 12, width: 16}} viewBox = "0 0 16 12">
									<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H14C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V10C16 10.5304 15.7893 11.0391 15.4142 11.4142C15.0391 11.7893 14.5304 12 14 12H2C1.46957 12 0.960859 11.7893 0.585786 11.4142C0.210714 11.0391 0 10.5304 0 10V2ZM2.5 3C2.36739 3 2.24021 3.05268 2.14645 3.14645C2.05268 3.24021 2 3.36739 2 3.5V4.5C2 4.63261 2.05268 4.75979 2.14645 4.85355C2.24021 4.94732 2.36739 5 2.5 5H4.5C4.63261 5 4.75979 4.94732 4.85355 4.85355C4.94732 4.75979 5 4.63261 5 4.5V3.5C5 3.36739 4.94732 3.24021 4.85355 3.14645C4.75979 3.05268 4.63261 3 4.5 3H2.5ZM2.5 6C2.36739 6 2.24021 6.05268 2.14645 6.14645C2.05268 6.24021 2 6.36739 2 6.5C2 6.63261 2.05268 6.75979 2.14645 6.85355C2.24021 6.94732 2.36739 7 2.5 7H7.5C7.63261 7 7.75979 6.94732 7.85355 6.85355C7.94732 6.75979 8 6.63261 8 6.5C8 6.36739 7.94732 6.24021 7.85355 6.14645C7.75979 6.05268 7.63261 6 7.5 6H2.5ZM2.5 8C2.36739 8 2.24021 8.05268 2.14645 8.14645C2.05268 8.24021 2 8.36739 2 8.5C2 8.63261 2.05268 8.75979 2.14645 8.85355C2.24021 8.94732 2.36739 9 2.5 9H3.5C3.63261 9 3.75979 8.94732 3.85355 8.85355C3.94732 8.75979 4 8.63261 4 8.5C4 8.36739 3.94732 8.24021 3.85355 8.14645C3.75979 8.05268 3.63261 8 3.5 8H2.5ZM5.5 8C5.36739 8 5.24021 8.05268 5.14645 8.14645C5.05268 8.24021 5 8.36739 5 8.5C5 8.63261 5.05268 8.75979 5.14645 8.85355C5.24021 8.94732 5.36739 9 5.5 9H6.5C6.63261 9 6.75979 8.94732 6.85355 8.85355C6.94732 8.75979 7 8.63261 7 8.5C7 8.36739 6.94732 8.24021 6.85355 8.14645C6.75979 8.05268 6.63261 8 6.5 8H5.5ZM8.5 8C8.36739 8 8.24021 8.05268 8.14645 8.14645C8.05268 8.24021 8 8.36739 8 8.5C8 8.63261 8.05268 8.75979 8.14645 8.85355C8.24021 8.94732 8.36739 9 8.5 9H9.5C9.63261 9 9.75979 8.94732 9.85355 8.85355C9.94732 8.75979 10 8.63261 10 8.5C10 8.36739 9.94732 8.24021 9.85355 8.14645C9.75979 8.05268 9.63261 8 9.5 8H8.5ZM11.5 8C11.3674 8 11.2402 8.05268 11.1464 8.14645C11.0527 8.24021 11 8.36739 11 8.5C11 8.63261 11.0527 8.75979 11.1464 8.85355C11.2402 8.94732 11.3674 9 11.5 9H12.5C12.6326 9 12.7598 8.94732 12.8536 8.85355C12.9473 8.75979 13 8.63261 13 8.5C13 8.36739 12.9473 8.24021 12.8536 8.14645C12.7598 8.05268 12.6326 8 12.5 8H11.5Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<Text style = {noneModeStyles._Milk_Fresh}   >
					Milk Fresh
				</Text>
				<Text style = {noneModeStyles._140_PKR}   >
					140 PKR
				</Text>
				<View style = {noneModeStyles._megumi_nachev_qkQR_OrvZic_unsplash_1_container}    >
					<View style = {noneModeStyles._megumi_nachev_qkQR_OrvZic_unsplash_1}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_megumi_nachev_qkQR_OrvZic_unsplash_1_link}}/>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Group_48}    >
				<View style = {noneModeStyles._Rectangle_12}    >
				</View>
				<View style = {noneModeStyles._bi_credit_card_2_front_fill_2}    >
					<View style = {noneModeStyles._Group_2}    >
						<View style = {noneModeStyles._layer_66fd6d}    >
							<View style = {noneModeStyles._layer_9a35cc}   >
								<Svg style={{height: 12, width: 16}} viewBox = "0 0 16 12">
									<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H14C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V10C16 10.5304 15.7893 11.0391 15.4142 11.4142C15.0391 11.7893 14.5304 12 14 12H2C1.46957 12 0.960859 11.7893 0.585786 11.4142C0.210714 11.0391 0 10.5304 0 10V2ZM2.5 3C2.36739 3 2.24021 3.05268 2.14645 3.14645C2.05268 3.24021 2 3.36739 2 3.5V4.5C2 4.63261 2.05268 4.75979 2.14645 4.85355C2.24021 4.94732 2.36739 5 2.5 5H4.5C4.63261 5 4.75979 4.94732 4.85355 4.85355C4.94732 4.75979 5 4.63261 5 4.5V3.5C5 3.36739 4.94732 3.24021 4.85355 3.14645C4.75979 3.05268 4.63261 3 4.5 3H2.5ZM2.5 6C2.36739 6 2.24021 6.05268 2.14645 6.14645C2.05268 6.24021 2 6.36739 2 6.5C2 6.63261 2.05268 6.75979 2.14645 6.85355C2.24021 6.94732 2.36739 7 2.5 7H7.5C7.63261 7 7.75979 6.94732 7.85355 6.85355C7.94732 6.75979 8 6.63261 8 6.5C8 6.36739 7.94732 6.24021 7.85355 6.14645C7.75979 6.05268 7.63261 6 7.5 6H2.5ZM2.5 8C2.36739 8 2.24021 8.05268 2.14645 8.14645C2.05268 8.24021 2 8.36739 2 8.5C2 8.63261 2.05268 8.75979 2.14645 8.85355C2.24021 8.94732 2.36739 9 2.5 9H3.5C3.63261 9 3.75979 8.94732 3.85355 8.85355C3.94732 8.75979 4 8.63261 4 8.5C4 8.36739 3.94732 8.24021 3.85355 8.14645C3.75979 8.05268 3.63261 8 3.5 8H2.5ZM5.5 8C5.36739 8 5.24021 8.05268 5.14645 8.14645C5.05268 8.24021 5 8.36739 5 8.5C5 8.63261 5.05268 8.75979 5.14645 8.85355C5.24021 8.94732 5.36739 9 5.5 9H6.5C6.63261 9 6.75979 8.94732 6.85355 8.85355C6.94732 8.75979 7 8.63261 7 8.5C7 8.36739 6.94732 8.24021 6.85355 8.14645C6.75979 8.05268 6.63261 8 6.5 8H5.5ZM8.5 8C8.36739 8 8.24021 8.05268 8.14645 8.14645C8.05268 8.24021 8 8.36739 8 8.5C8 8.63261 8.05268 8.75979 8.14645 8.85355C8.24021 8.94732 8.36739 9 8.5 9H9.5C9.63261 9 9.75979 8.94732 9.85355 8.85355C9.94732 8.75979 10 8.63261 10 8.5C10 8.36739 9.94732 8.24021 9.85355 8.14645C9.75979 8.05268 9.63261 8 9.5 8H8.5ZM11.5 8C11.3674 8 11.2402 8.05268 11.1464 8.14645C11.0527 8.24021 11 8.36739 11 8.5C11 8.63261 11.0527 8.75979 11.1464 8.85355C11.2402 8.94732 11.3674 9 11.5 9H12.5C12.6326 9 12.7598 8.94732 12.8536 8.85355C12.9473 8.75979 13 8.63261 13 8.5C13 8.36739 12.9473 8.24021 12.8536 8.14645C12.7598 8.05268 12.6326 8 12.5 8H11.5Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<Text style = {noneModeStyles._Fresh_Butter}   >
					Fresh Butter
				</Text>
				<Text style = {noneModeStyles._750_PKR}   >
					750 PKR
				</Text>
				<View style = {noneModeStyles._Group_45}    >
					<View style = {noneModeStyles._Rectangle_46}    >
					</View>
					<Text style = {noneModeStyles._1}   >
						1
					</Text>
					<Text style = {noneModeStyles.__}   >
						-
					</Text>
					<Text style = {noneModeStyles.___2}   >
						+
					</Text>
				</View>
				<View style = {noneModeStyles._Group_46}    >
					<View style = {noneModeStyles._Rectangle_46_2}    >
					</View>
					<Text style = {noneModeStyles._1_2}   >
						1
					</Text>
					<Text style = {noneModeStyles.___3}   >
						-
					</Text>
					<Text style = {noneModeStyles.___4}   >
						+
					</Text>
				</View>
				<View style = {noneModeStyles._megumi_nachev_xhOUnxVVb6s_unsplash_1_container}    >
					<View style = {noneModeStyles._megumi_nachev_xhOUnxVVb6s_unsplash_1}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_megumi_nachev_xhOUnxVVb6s_unsplash_1_link}}/>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_2}    >
			</View>
			<Text style = {noneModeStyles._Complete_order}   >
				Complete order
			</Text>
			<View style = {noneModeStyles._Group_44}    >
				<Text style = {noneModeStyles._swipe_on_an_item_to_delete}   >
					swipe on an item to delete
				</Text>
				<View style = {noneModeStyles._iwwa_swipe}    >
					<View style = {noneModeStyles._layer_d43dd4}    >
						<View style = {noneModeStyles._layer_bfd831}   >
							<Svg style={{height: 2, width: 8}} viewBox = "0 0 8 2">
								<Path fill = {"black"}     d = "M7.77641 1.6993C7.75462 1.68841 5.59571 0.663175 3.87783 0.532427C2.07226 0.39182 0.263053 1.35012 0.244375 1.3605L0 0.902361C0.078864 0.860335 1.96122 -0.131173 3.91726 0.0146221C5.73269 0.153672 7.90819 1.18772 8.00003 1.23131L7.77641 1.6993Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_1e5635}    >
						<View style = {noneModeStyles._layer_9bf52b}   >
							<Svg style={{height: 4, width: 3}} viewBox = "0 0 3 4">
								<Path fill = {"black"}     d = "M0.265996 3.76766L0 3.2217L2.08302 2.2063L0.737256 0.357089L1.22856 0L3.00004 2.43404L0.265996 3.76766Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._Group_3}    >
						<View style = {noneModeStyles._layer_514581}    >
							<View style = {noneModeStyles._layer_0ca90d}   >
								<Svg style={{height: 2, width: 8}} viewBox = "0 0 8 2">
									<Path fill = {"black"}     d = "M0.223621 1.69866L0 1.23067C0.0918351 1.18708 2.26734 0.153031 4.08329 0.0139808C6.0331 -0.128182 7.92116 0.859694 8.00003 0.90172L7.75565 1.35986C7.73749 1.35 5.92258 0.391179 4.12272 0.531785C2.40483 0.662534 0.245412 1.68828 0.223621 1.69866Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._layer_9ff43d}    >
							<View style = {noneModeStyles._layer_d5ebe3}   >
								<Svg style={{height: 4, width: 3}} viewBox = "0 0 3 4">
									<Path fill = {"black"}     d = "M2.73465 3.76766L0 2.43404L1.77148 0L2.26278 0.357089L0.917015 2.2063L3.00004 3.2217L2.73465 3.76766Z"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_4}    >
						<View style = {noneModeStyles._layer_24170d}    >
							<View style = {noneModeStyles._layer_6a524c}   >
								<Svg style={{height: 15, width: 14}} viewBox = "0 0 14 15">
									<Path fill = {"black"}     d = "M8.32059 15.0001C7.67431 15.0001 7.01889 14.93 6.42591 14.798C5.4141 14.5726 3.28537 12.9485 2.83506 12.4819C2.42789 12.0601 1.33739 10.4405 1.17747 9.12309C1.10741 8.54941 1.54757 6.84004 2.08622 6.23183C2.19233 6.11252 2.30351 6.03231 2.41723 5.99271C2.39435 5.94045 2.37117 5.88833 2.34768 5.83634C1.99738 5.0738 1.47852 4.19297 1.02059 3.41519C0.245357 2.09826 -0.0435155 1.5723 0.00522222 1.27277C0.0869595 0.765081 0.503261 0.179213 1.05765 0.0766604L1.15564 0.0568604C1.29856 0.0224085 1.44476 0.00334667 1.59174 0C2.07556 0 2.51877 0.27618 2.98736 0.868648C3.393 1.38192 4.04995 2.79887 4.60281 4.08077C4.57743 3.75788 4.58708 3.4883 4.65511 3.33092C4.92926 2.69479 5.69383 2.4445 5.92686 2.42978L5.98422 2.42826C6.13196 2.42826 6.8879 2.46532 7.23821 3.20044C7.29405 3.31823 7.34736 3.44515 7.3966 3.57359C7.45956 3.35529 7.54891 3.16491 7.67634 3.05626C8.06827 2.72322 8.60489 2.55061 8.96992 2.65316C9.36236 2.76333 9.69286 3.17861 9.81217 3.71321C9.86344 3.59745 9.92538 3.50353 9.99849 3.4487C10.3534 3.18267 10.9707 3.15424 11.3616 3.42535C11.8388 3.75636 12.9365 5.73938 13.1294 7.47363C13.2873 8.89921 13.4655 11.4468 12.8771 12.4967C12.2658 13.5856 11.0154 14.4314 10.1122 14.7559C9.67255 14.9127 9.03642 15.0001 8.32059 15.0001ZM2.59898 6.4811C2.26188 6.51461 1.60138 8.4032 1.68109 9.06065C1.82426 10.2425 2.83912 11.7544 3.20059 12.1291C3.6306 12.5748 5.66641 14.108 6.53557 14.3015C7.09352 14.4259 7.70985 14.4919 8.32008 14.4919C8.96941 14.4919 9.55934 14.4132 9.93909 14.2761C10.6219 14.0309 11.8485 13.2881 12.4328 12.2459C12.8126 11.5701 12.8821 9.8501 12.6237 7.52846C12.4405 5.87442 11.3708 4.04879 11.0717 3.84063C10.8316 3.67462 10.4315 3.75585 10.3021 3.85333C10.2305 3.93506 10.1244 4.4133 10.0833 4.8687L9.95584 6.27346L9.58574 4.91236C9.58574 4.91236 9.42125 4.30821 9.31768 3.82947C9.22935 3.42484 9.00393 3.18826 8.83183 3.14054C8.64246 3.08672 8.26221 3.22227 8.00481 3.44159C7.86469 3.5609 7.76061 4.25034 7.75604 4.79356L7.73675 6.904L7.25496 4.8489C7.25293 4.83976 7.05138 3.98431 6.77977 3.41723C6.56045 2.95726 6.07815 2.93391 5.98422 2.93391C5.83649 2.94406 5.2958 3.12581 5.12116 3.53044C4.99932 3.81424 5.2755 5.29515 5.60092 6.50395L5.11964 6.66235C5.10288 6.61818 3.3336 2.12263 2.58985 1.18189C2.11161 0.57673 1.79176 0.506669 1.59275 0.506669C1.48106 0.506669 1.37343 0.529007 1.26022 0.552868L1.15107 0.574699C0.865748 0.627498 0.565706 0.991508 0.506307 1.35349C0.510876 1.54742 1.03633 2.43993 1.45872 3.15729C1.92224 3.94522 2.4482 4.83823 2.80917 5.62362C2.90106 5.82314 2.98635 6.03079 3.06504 6.243L3.06605 6.24655C3.61689 7.00554 3.89104 9.50183 3.92099 9.78867L3.41686 9.84705C3.41483 9.82928 3.18231 8.05137 2.61878 6.49989C2.61262 6.49318 2.606 6.48691 2.59898 6.4811Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._layer_75215a}    >
				<View style = {noneModeStyles._layer_4a5c06}   >
					<Svg style={{height: 16, width: 18}} viewBox = "0 0 18 16">
						<Path fill = {"none"}   stroke = {"white"} strokeWidth = {2} d = "M15.7663 2.2377C15.3753 1.84531 14.9111 1.53404 14.4002 1.32168C13.8893 1.10931 13.3417 1 12.7887 1C12.2357 1 11.6881 1.10931 11.1772 1.32168C10.6663 1.53404 10.2021 1.84531 9.81116 2.2377L8.9998 3.05166L8.18843 2.2377C7.39874 1.44548 6.32768 1.00041 5.21089 1.00041C4.09409 1.00041 3.02303 1.44548 2.23334 2.2377C1.44365 3.02993 1 4.10441 1 5.22479C1 6.34516 1.44365 7.41965 2.23334 8.21187L3.0447 9.02583L8.9998 15L14.9549 9.02583L15.7663 8.21187C16.1574 7.81967 16.4677 7.354 16.6794 6.84146C16.891 6.32893 17 5.77958 17 5.22479C17 4.67 16.891 4.12064 16.6794 3.60811C16.4677 3.09558 16.1574 2.6299 15.7663 2.2377V2.2377Z"/>
					</Svg>
				</View>
			</View>
			<View style = {noneModeStyles._layer_63d190}    >
				<View style = {noneModeStyles._layer_799f17}   >
					<Svg style={{height: 69, width: 413}} viewBox = "0 0 413 69">
						<Path fill = {"#A94425"}     d = "M0 0H413V69H0V0Z"/>
					</Svg>
				</View>
			</View>
			<Text style = {noneModeStyles._Cart}   >
				Cart
			</Text>
			<View style = {noneModeStyles._layer_83924c}    >
				<View style = {noneModeStyles._layer_0711cf}   >
					<Svg style={{height: 14, width: 8}} viewBox = "0 0 8 14">
						<Path fill = {"none"}   stroke = {"black"} strokeWidth = {2} d = "M7 13L1 7L7 1"/>
					</Svg>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_iPhone_11_Pro_Max___7

const noneModeStyles = StyleSheet.create({
_page15: {
	height: 896,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(245, 245, 248)",
	},
_Group_49: {
	width: 324,
	height: 102,
	position: "absolute",
	left: 39,
	top: 191,
	},
_Rectangle_11: {
	width: 315,
	height: 102,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 9,
	top: 0,
	borderRadius: 20,
	shadowOffset: {
		width: 0,
		height: 10
	},
	shadowColor: "rgba(0,0,0,0.03)",
	shadowRadius: 40,
	},
_bi_credit_card_2_front_fill: {
	width: 16,
	height: 16,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 73,
	top: 43,
	},
_Group: {
	width: 16,
	height: 12,
	position: "absolute",
	transform: [
		{translateY: 2},
	],
	},
_layer_8d2598: {
	position: "absolute",
	},
_layer_091e96: {
	},
_Milk_Fresh: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 109,
	top: 15,
	color: "rgb(0, 0, 0)",
	fontSize: 17,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "center",
	},
_140_PKR: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 102,
	top: 57,
	color: "rgb(250, 74, 12)",
	fontSize: 15,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "center",
	},
_megumi_nachev_qkQR_OrvZic_unsplash_1_container: {
	width: 56,
	height: 53,
	position: "absolute",
	left: 0,
	top: 20,
	},
_megumi_nachev_qkQR_OrvZic_unsplash_1: {
	width: "100%",
	height: "100%",
	borderRadius: 30,
	},
_Group_48: {
	width: 316,
	height: 154,
	position: "absolute",
	left: 39,
	top: 242,
	},
_Rectangle_12: {
	width: 315,
	height: 102,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 1,
	top: 52,
	borderRadius: 20,
	shadowOffset: {
		width: 0,
		height: 10
	},
	shadowColor: "rgba(0,0,0,0.03)",
	shadowRadius: 40,
	},
_bi_credit_card_2_front_fill_2: {
	width: 16,
	height: 16,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 65,
	top: 95,
	},
_Group_2: {
	width: 16,
	height: 12,
	position: "absolute",
	transform: [
		{translateY: 2},
	],
	},
_layer_66fd6d: {
	position: "absolute",
	},
_layer_9a35cc: {
	},
_Fresh_Butter: {
	width: 175,
	height: 44,
	position: "absolute",
	left: 109,
	top: 73,
	color: "rgb(0, 0, 0)",
	fontSize: 17,
	fontWeight: "400",
	lineHeight: 19.9219,
	fontFamily: "Changa",
	textAlign: "left",
	},
_750_PKR: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 102,
	top: 110,
	color: "rgb(250, 74, 12)",
	fontSize: 15,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "center",
	},
_Group_45: {
	width: 52,
	height: 20,
	position: "absolute",
	left: 240,
	top: 117,
	},
_Rectangle_46: {
	width: 52,
	height: 20,
	backgroundColor: "rgb(250, 74, 12)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 30,
	},
_1: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 24,
	top: 2,
	color: "rgb(255, 255, 255)",
	fontSize: 13,
	fontWeight: "400",
	fontFamily: "Abel",
	textAlign: "center",
	},
__: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 10,
	top: 1,
	color: "rgb(244, 244, 247)",
	fontSize: 15,
	fontWeight: "400",
	fontFamily: "Abel",
	textAlign: "center",
	},
___2: {
	width: 5,
	height: 12,
	position: "absolute",
	left: 39,
	top: 4,
	color: "rgb(244, 244, 247)",
	fontSize: 10,
	fontWeight: "400",
	lineHeight: 11.7188,
	fontFamily: "Abel",
	textAlign: "center",
	},
_Group_46: {
	width: 52,
	height: 20,
	position: "absolute",
	left: 240,
	top: 0,
	},
_Rectangle_46_2: {
	width: 52,
	height: 20,
	backgroundColor: "rgb(250, 74, 12)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 30,
	},
_1_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 24,
	top: 2,
	color: "rgb(255, 255, 255)",
	fontSize: 13,
	fontWeight: "400",
	fontFamily: "Abel",
	textAlign: "center",
	},
___3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 10,
	top: 1,
	color: "rgb(244, 244, 247)",
	fontSize: 15,
	fontWeight: "400",
	fontFamily: "Abel",
	textAlign: "center",
	},
___4: {
	width: 5,
	height: 12,
	position: "absolute",
	left: 39,
	top: 4,
	color: "rgb(244, 244, 247)",
	fontSize: 10,
	fontWeight: "400",
	lineHeight: 11.7188,
	fontFamily: "Abel",
	textAlign: "center",
	},
_megumi_nachev_xhOUnxVVb6s_unsplash_1_container: {
	width: 44,
	height: 55,
	position: "absolute",
	left: 0,
	top: 68,
	},
_megumi_nachev_xhOUnxVVb6s_unsplash_1: {
	width: "100%",
	height: "100%",
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
_Complete_order: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 150,
	top: 810,
	color: "rgb(246, 246, 249)",
	fontSize: 17,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "center",
	},
_Group_44: {
	width: 144,
	height: 22,
	position: "absolute",
	left: 133,
	top: 139,
	},
_swipe_on_an_item_to_delete: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 25,
	top: 4,
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
_iwwa_swipe: {
	width: 20,
	height: 20,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 0,
	},
_layer_d43dd4: {
	position: "absolute",
	transform: [
		{translateX: 3.24353},
		{translateY: 1.02734},
	],
	},
_layer_bfd831: {
	},
_layer_1e5635: {
	position: "absolute",
	transform: [
		{translateX: 8.75952},
		{translateY: 0.546387},
	],
	},
_layer_9bf52b: {
	},
_Group_3: {
	width: 7.98602,
	height: 3.10205,
	position: "absolute",
	transform: [
		{translateX: 1.01947},
		{translateY: 2.83838},
	],
	},
_layer_514581: {
	position: "absolute",
	transform: [
		{translateX: 0.276489},
		{translateY: 0.481445},
	],
	},
_layer_0ca90d: {
	},
_layer_9ff43d: {
	position: "absolute",
	},
_layer_d5ebe3: {
	},
_Group_4: {
	width: 13.0827,
	height: 14.7729,
	position: "absolute",
	transform: [
		{translateX: 4.47437},
		{translateY: 4.94604},
	],
	},
_layer_24170d: {
	position: "absolute",
	},
_layer_6a524c: {
	},
_layer_75215a: {
	position: "absolute",
	transform: [
		{translateX: 272},
		{translateY: 456},
	],
	},
_layer_4a5c06: {
	},
_layer_63d190: {
	width: 413,
	height: 69,
	position: "absolute",
	left: 1,
	top: 22,
	},
_layer_799f17: {
	},
_Cart: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 181,
	top: 45,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
_layer_83924c: {
	position: "absolute",
	transform: [
		{translateX: 27},
		{translateY: 51},
	],
	},
_layer_0711cf: {
	},
})

