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
const Page_iPhone_11_Pro_Max___10  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page8}    >
			<Text style = {noneModeStyles._Profile}   >
				Profile
			</Text>
			<Text style = {noneModeStyles._Security}   >
				Security
			</Text>
			<Text style = {noneModeStyles._orders}   >
				orders
			</Text>
			<Text style = {noneModeStyles._Privacy_policy}   >
				Privacy policy
			</Text>
			<Text style = {noneModeStyles._offer_and_promo}   >
				offer and promo
			</Text>
			<Text style = {noneModeStyles._Sign_out}   >
				Sign-out
			</Text>
			<View style = {noneModeStyles.style7}    >
				<View style = {noneModeStyles.style8}   >
					<Svg style={{height: 15, width: 23}} viewBox = "0 0 23 15">
						<Path fill = {"white"}     d = "M22.7071 8.07113C23.0976 7.68061 23.0976 7.04744 22.7071 6.65692L16.3431 0.292952C15.9526 -0.0975723 15.3195 -0.0975722 14.9289 0.292952C14.5384 0.683476 14.5384 1.31664 14.9289 1.70717L20.5858 7.36402L14.9289 13.0209C14.5384 13.4114 14.5384 14.0446 14.9289 14.4351C15.3195 14.8256 15.9526 14.8256 16.3431 14.4351L22.7071 8.07113ZM-3.89429e-07 8.36401L22 8.36402L22 6.36402L3.89429e-07 6.36401L-3.89429e-07 8.36401Z"/>
					</Svg>
				</View>
			</View>
			<View style = {noneModeStyles._Line_5}    >
			</View>
			<View style = {noneModeStyles._Line_6}    >
			</View>
			<View style = {noneModeStyles._Line_7}    >
			</View>
			<View style = {noneModeStyles._Line_8}    >
			</View>
			<View style = {noneModeStyles._gg_profile}    >
				<View style = {noneModeStyles._Group}    >
					<View style = {noneModeStyles.style15}    >
						<View style = {noneModeStyles.style16}   >
							<Svg style={{height: 8, width: 8}} viewBox = "0 0 8 8">
								<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M8 4C8 5.06087 7.57857 6.07828 6.82843 6.82843C6.07828 7.57857 5.06087 8 4 8C2.93913 8 1.92172 7.57857 1.17157 6.82843C0.421427 6.07828 0 5.06087 0 4C0 2.93913 0.421427 1.92172 1.17157 1.17157C1.92172 0.421427 2.93913 0 4 0C5.06087 0 6.07828 0.421427 6.82843 1.17157C7.57857 1.92172 8 2.93913 8 4ZM6 4C6 4.53043 5.78929 5.03914 5.41421 5.41421C5.03914 5.78929 4.53043 6 4 6C3.46957 6 2.96086 5.78929 2.58579 5.41421C2.21071 5.03914 2 4.53043 2 4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2C4.53043 2 5.03914 2.21071 5.41421 2.58579C5.78929 2.96086 6 3.46957 6 4Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style17}    >
						<View style = {noneModeStyles.style18}   >
							<Svg style={{height: 22, width: 22}} viewBox = "0 0 22 22">
								<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M11 0C4.925 0 0 4.925 0 11C0 17.075 4.925 22 11 22C17.075 22 22 17.075 22 11C22 4.925 17.075 0 11 0ZM2 11C2 13.09 2.713 15.014 3.908 16.542C4.74723 15.4399 5.8299 14.5467 7.07143 13.9323C8.31297 13.3179 9.67974 12.9988 11.065 13C12.4323 12.9987 13.7819 13.3095 15.0109 13.9088C16.2399 14.508 17.316 15.3799 18.157 16.458C19.0234 15.3216 19.6068 13.9952 19.8589 12.5886C20.111 11.182 20.0244 9.73553 19.6065 8.36898C19.1886 7.00243 18.4512 5.75505 17.4555 4.73004C16.4598 3.70503 15.2343 2.93186 13.8804 2.47451C12.5265 2.01716 11.0832 1.88877 9.66986 2.09997C8.25652 2.31117 6.91379 2.85589 5.75277 3.68905C4.59175 4.52222 3.64581 5.61987 2.99323 6.8912C2.34065 8.16252 2.00018 9.57097 2 11ZM11 20C8.93395 20.0031 6.93027 19.2923 5.328 17.988C5.97293 17.0647 6.83134 16.3109 7.83019 15.7907C8.82905 15.2705 9.93879 14.9992 11.065 15C12.1772 14.9991 13.2735 15.2636 14.2629 15.7714C15.2524 16.2793 16.1064 17.0159 16.754 17.92C15.1393 19.2667 13.1026 20.0029 11 20Z"/>
							</Svg>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._icons8_buy}    >
				<View style = {noneModeStyles.style20}    >
					<View style = {noneModeStyles.style21}   >
						<Svg style={{height: 17, width: 21}} viewBox = "0 0 21 17">
							<Path fill = {"white"}     d = "M0.848485 3.57818e-05C0.623453 3.57818e-05 0.407637 0.0894296 0.248515 0.248551C0.0893937 0.407673 0 0.623488 0 0.848521C0 1.07355 0.0893937 1.28937 0.248515 1.44849C0.407637 1.60761 0.623453 1.69701 0.848485 1.69701H2.73212L4.95855 10.6061C5.14776 11.3612 5.824 11.8788 6.60206 11.8788H17.1827C17.9488 11.8788 18.5996 11.3697 18.8007 10.6316L21 2.54549H19.2233L17.1818 10.1819H6.60121L4.37564 1.27276C4.2837 0.90726 4.07177 0.583181 3.77379 0.352423C3.4758 0.121665 3.109 -0.00242067 2.73212 3.57818e-05H0.848485ZM16.1212 11.8788C14.7255 11.8788 13.5758 13.0285 13.5758 14.4243C13.5758 15.82 14.7255 16.9697 16.1212 16.9697C17.517 16.9697 18.6667 15.82 18.6667 14.4243C18.6667 13.0285 17.517 11.8788 16.1212 11.8788ZM8.48485 11.8788C7.08909 11.8788 5.93939 13.0285 5.93939 14.4243C5.93939 15.82 7.08909 16.9697 8.48485 16.9697C9.88061 16.9697 11.0303 15.82 11.0303 14.4243C11.0303 13.0285 9.88061 11.8788 8.48485 11.8788ZM11.0303 3.57818e-05V4.24246H8.48485L11.8788 7.6364L15.2727 4.24246H12.7273V3.57818e-05H11.0303ZM8.48485 13.5758C8.96339 13.5758 9.33333 13.9457 9.33333 14.4243C9.33333 14.9028 8.96339 15.2728 8.48485 15.2728C8.0063 15.2728 7.63636 14.9028 7.63636 14.4243C7.63636 13.9457 8.0063 13.5758 8.48485 13.5758ZM16.1212 13.5758C16.5998 13.5758 16.9697 13.9457 16.9697 14.4243C16.9697 14.9028 16.5998 15.2728 16.1212 15.2728C15.6427 15.2728 15.2727 14.9028 15.2727 14.4243C15.2727 13.9457 15.6427 13.5758 16.1212 13.5758Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._ic_outline_local_offer}    >
				<View style = {noneModeStyles.style23}    >
					<View style = {noneModeStyles.style24}   >
						<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
							<Path fill = {"white"}     d = "M19.41 9.58L10.41 0.58C10.05 0.22 9.55 0 9 0H2C0.9 0 0 0.9 0 2V9C0 9.55 0.22 10.05 0.59 10.42L9.59 19.42C9.95 19.78 10.45 20 11 20C11.55 20 12.05 19.78 12.41 19.41L19.41 12.41C19.78 12.05 20 11.55 20 11C20 10.45 19.77 9.94 19.41 9.58ZM11 18.01L2 9V2H9V1.99L18 10.99L11 18.01Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style25}    >
					<View style = {noneModeStyles.style26}   >
						<Svg style={{height: 3, width: 3}} viewBox = "0 0 3 3">
							<Path fill = {"white"}     d = "M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._ic_outline_sticky_note_2}    >
				<View style = {noneModeStyles.style28}    >
					<View style = {noneModeStyles.style29}   >
						<Svg style={{height: 18, width: 18}} viewBox = "0 0 18 18">
							<Path fill = {"white"}     d = "M16 2V11H11V16H2V2H16ZM16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H12L18 12V2C18 0.9 17.1 0 16 0ZM9 11H4V9H9V11ZM14 7H4V5H14V7Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._whh_securityalt}    >
				<View style = {noneModeStyles.style31}    >
					<View style = {noneModeStyles.style32}   >
						<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
							<Path fill = {"white"}     d = "M10 19.2188C8.90626 18.6933 7.91668 18.1365 7.03126 17.5484C6.14584 16.9603 5.3711 16.3973 4.70704 15.8592C4.04297 15.3212 3.46029 14.6831 2.95899 13.9449C2.45769 13.2066 2.04102 12.5654 1.70899 12.0211C1.37695 11.4768 1.10026 10.7605 0.878907 9.87214C0.657553 8.98377 0.488282 8.25494 0.371094 7.68563C0.253907 7.11633 0.166016 6.2999 0.107422 5.23636C0.0488282 4.17283 0.0162761 3.34076 0.00976564 2.74018C0.00325521 2.13959 0 1.2262 0 0C0 0.325318 0.488282 0.606843 1.46485 0.844575C2.44141 1.08231 3.6198 1.20117 5.00001 1.20117C6.38022 1.20117 7.5586 1.08231 8.53517 0.844575C9.51173 0.606843 10 0.325318 10 0C10 0.325318 10.4883 0.606843 11.4649 0.844575C12.4414 1.08231 13.6198 1.20117 15 1.20117C16.3802 1.20117 17.5586 1.08231 18.5352 0.844575C19.5117 0.606843 20 0.325318 20 0C20 1.2262 19.9968 2.13959 19.9903 2.74018C19.9837 3.34076 19.9512 4.17283 19.8926 5.23636C19.834 6.2999 19.7461 7.11633 19.6289 7.68563C19.5117 8.25494 19.3425 8.98377 19.1211 9.87214C18.8998 10.7605 18.6231 11.4768 18.291 12.0211C17.959 12.5654 17.5423 13.2066 17.041 13.9449C16.5397 14.6831 15.957 15.3212 15.293 15.8592C14.6289 16.3973 13.8542 16.9603 12.9688 17.5484C12.0833 18.1365 11.0938 18.6933 10 19.2188ZM10 2.40235C10 2.72766 9.63217 3.00919 8.89649 3.24692C8.16082 3.48465 7.27865 3.60352 6.25001 3.60352C5.54688 3.60352 4.85027 3.54721 4.16016 3.4346C3.47006 3.32199 2.91667 3.17185 2.5 2.98416C2.5 3.97263 2.51302 4.76716 2.53907 5.36774C2.56511 5.96833 2.62696 6.68465 2.72461 7.51672C2.82227 8.34878 2.96875 9.03382 3.16407 9.57185C3.35938 10.1099 3.63933 10.7167 4.00391 11.3924C4.36849 12.068 4.81446 12.6561 5.3418 13.1566C5.86915 13.6571 6.52345 14.1763 7.3047 14.7144C8.08595 15.2524 8.98439 15.7529 10 16.2158V2.40235Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._iPhone_11_Pro_Max___22}    >
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
				<View style = {noneModeStyles.style42}    >
					<View style = {noneModeStyles.style43}   >
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
					<View style = {noneModeStyles._Group_2}    >
						<View style = {noneModeStyles.style57}    >
							<View style = {noneModeStyles.style58}   >
								<Svg style={{height: 25, width: 25}} viewBox = "0 0 25 25">
									<Path fill = {"#FA4A0C"}     d = "M13.5857 0.457485C13.2926 0.164557 12.8953 0 12.481 0C12.0666 0 11.6693 0.164557 11.3763 0.457485L0.438618 11.3951C0.153992 11.6898 -0.00350101 12.0845 5.90674e-05 12.4942C0.00361914 12.9039 0.167948 13.2958 0.457652 13.5855C0.747356 13.8752 1.13925 14.0395 1.54894 14.0431C1.95863 14.0466 2.35333 13.8892 2.64802 13.6045L3.10584 13.1467V23.4375C3.10584 23.8519 3.27046 24.2493 3.56349 24.5423C3.85652 24.8354 4.25395 25 4.66836 25H7.7934C8.20781 25 8.60524 24.8354 8.89827 24.5423C9.1913 24.2493 9.35592 23.8519 9.35592 23.4375V20.3124C9.35592 19.898 9.52054 19.5006 9.81357 19.2076C10.1066 18.9145 10.504 18.7499 10.9184 18.7499H14.0435C14.4579 18.7499 14.8553 18.9145 15.1483 19.2076C15.4414 19.5006 15.606 19.898 15.606 20.3124V23.4375C15.606 23.8519 15.7706 24.2493 16.0637 24.5423C16.3567 24.8354 16.7541 25 17.1685 25H20.2936C20.708 25 21.1054 24.8354 21.3984 24.5423C21.6915 24.2493 21.8561 23.8519 21.8561 23.4375V13.1467L22.3139 13.6045C22.6086 13.8892 23.0033 14.0466 23.413 14.0431C23.8227 14.0395 24.2146 13.8752 24.5043 13.5855C24.794 13.2958 24.9583 12.9039 24.9619 12.4942C24.9654 12.0845 24.8079 11.6898 24.5233 11.3951L13.5857 0.457485Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._ic_sharp_history}    >
					<View style = {noneModeStyles.style60}    >
						<View style = {noneModeStyles.style61}   >
							<Svg style={{height: 22, width: 26}} viewBox = "0 0 26 22">
								<Path fill = {"black"}     d = "M14.6667 0C11.7493 0 8.95139 1.15893 6.88849 3.22183C4.82559 5.28473 3.66667 8.08262 3.66667 11H0L4.75444 15.7544L4.84 15.9256L9.77778 11H6.11111C6.11111 6.27 9.93667 2.44444 14.6667 2.44444C19.3967 2.44444 23.2222 6.27 23.2222 11C23.2222 15.73 19.3967 19.5556 14.6667 19.5556C12.3078 19.5556 10.1689 18.59 8.62889 17.0378L6.89333 18.7733C7.91195 19.7976 9.12326 20.61 10.4574 21.1638C11.7916 21.7176 13.2221 22.0018 14.6667 22C17.584 22 20.3819 20.8411 22.4448 18.7782C24.5077 16.7153 25.6667 13.9174 25.6667 11C25.6667 8.08262 24.5077 5.28473 22.4448 3.22183C20.3819 1.15893 17.584 4.34724e-08 14.6667 0ZM13.4444 6.11111V12.2222L18.6389 15.3022L19.58 13.7256L15.2778 11.1711V6.11111H13.4444Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._user}    >
					<View style = {noneModeStyles.style63}    >
						<View style = {noneModeStyles.style64}   >
							<Svg style={{height: 8, width: 18}} viewBox = "0 0 18 8">
								<Path fill = {"none"}   stroke = {"#ADADAF"} strokeWidth = {2} d = "M17 7V5C17 3.93913 16.5786 2.92172 15.8284 2.17157C15.0783 1.42143 14.0609 1 13 1H5C3.93913 1 2.92172 1.42143 2.17157 2.17157C1.42143 2.92172 1 3.93913 1 5V7"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style65}    >
						<View style = {noneModeStyles.style66}   >
							<Svg style={{height: 10, width: 10}} viewBox = "0 0 10 10">
								<Path fill = {"none"}   stroke = {"#ADADAF"} strokeWidth = {2} d = "M5 9C7.20914 9 9 7.20914 9 5C9 2.79086 7.20914 1 5 1C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._heart}    >
					<View style = {noneModeStyles.style68}    >
						<View style = {noneModeStyles.style69}   >
							<Svg style={{height: 21, width: 23}} viewBox = "0 0 23 21">
								<Path fill = {"none"}   stroke = {"#ADADAF"} strokeWidth = {2} d = "M20.3772 2.62288C19.8642 2.10972 19.2552 1.70265 18.585 1.42491C17.9147 1.14718 17.1962 1.00423 16.4707 1.00423C15.7452 1.00423 15.0267 1.14718 14.3564 1.42491C13.6862 1.70265 13.0772 2.10972 12.5642 2.62288L11.4998 3.68736L10.4353 2.62288C9.39921 1.58682 7.99401 1.00477 6.5288 1.00477C5.0636 1.00477 3.6584 1.58682 2.62234 2.62288C1.58628 3.65894 1.00423 5.06413 1.00423 6.52934C1.00423 7.99455 1.58628 9.39974 2.62234 10.4358L3.68683 11.5003L11.4998 19.3132L19.3127 11.5003L20.3772 10.4358C20.8903 9.92289 21.2974 9.31389 21.5751 8.64361C21.8529 7.97332 21.9958 7.25489 21.9958 6.52934C21.9958 5.8038 21.8529 5.08536 21.5751 4.41508C21.2974 3.74479 20.8903 3.1358 20.3772 2.62288V2.62288Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_69}    >
				</View>
				<View style = {noneModeStyles.style71}    >
					<View style = {noneModeStyles.style72}   >
						<Svg style={{height: 17, width: 24}} viewBox = "0 0 24 17">
							<Path fill = {"none"}   stroke = {"black"} strokeWidth = {2} d = "M1 8.33333H12.9014M1 1H23M1 15.6667H23"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style73}    >
					<View style = {noneModeStyles.style74}   >
						<Svg style={{height: 16, width: 24}} viewBox = "0 0 24 16">
							<Path fill = {"none"}   stroke = {"black"} strokeWidth = {2} d = "M1.01346 1.01346H5.00857L7.6853 13.4478C7.77663 13.8754 8.02679 14.2594 8.39198 14.5328C8.75717 14.8061 9.21412 14.9513 9.68285 14.9429H19.391C19.8597 14.9513 20.3167 14.8061 20.6818 14.5328C21.047 14.2594 21.2972 13.8754 21.3885 13.4478L22.9866 5.65662H6.00735"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._megumi_nachev_qkQR_OrvZic_unsplash_1_container_2}    >
					<View style = {noneModeStyles._megumi_nachev_qkQR_OrvZic_unsplash_1_2}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_megumi_nachev_qkQR_OrvZic_unsplash_1_2_link}}/>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_iPhone_11_Pro_Max___10

const noneModeStyles = StyleSheet.create({
_page8: {
	height: 896,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(250, 74, 12)",
	},
_Profile: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 76,
	top: 161,
	color: "rgb(255, 255, 255)",
	fontSize: 17,
	fontWeight: "600",
	fontFamily: "Changa",
	textAlign: "center",
	},
_Security: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 78,
	top: 473,
	color: "rgb(255, 255, 255)",
	fontSize: 17,
	fontWeight: "600",
	fontFamily: "Changa",
	textAlign: "center",
	},
_orders: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 77,
	top: 239,
	color: "rgb(255, 255, 255)",
	fontSize: 17,
	fontWeight: "600",
	fontFamily: "Changa",
	textAlign: "center",
	},
_Privacy_policy: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 82,
	top: 395,
	color: "rgb(255, 255, 255)",
	fontSize: 17,
	fontWeight: "600",
	fontFamily: "Changa",
	textAlign: "center",
	},
_offer_and_promo: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 82,
	top: 317,
	color: "rgb(255, 255, 255)",
	fontSize: 17,
	fontWeight: "600",
	fontFamily: "Changa",
	textAlign: "center",
	},
_Sign_out: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 47,
	top: 783,
	color: "rgb(255, 255, 255)",
	fontSize: 17,
	fontWeight: "600",
	fontFamily: "Changa",
	textAlign: "center",
	},
style7: {
	width: 22,
	height: 0,
	position: "absolute",
	left: 129,
	top: 797,
	},
style8: {
	},
_Line_5: {
	width: 132,
	height: 0,
	position: "absolute",
	left: 74,
	top: 213,
	borderTopWidth: 0.3,
	borderRightWidth: 0.3,
	borderBottomWidth: 0.3,
	borderLeftWidth: 0.3,
	borderStyle: "solid",
	borderColor: "rgb(244, 244, 248)",
	},
_Line_6: {
	width: 132,
	height: 0,
	position: "absolute",
	left: 74,
	top: 291,
	borderTopWidth: 0.3,
	borderRightWidth: 0.3,
	borderBottomWidth: 0.3,
	borderLeftWidth: 0.3,
	borderStyle: "solid",
	borderColor: "rgb(244, 244, 248)",
	},
_Line_7: {
	width: 132,
	height: 0,
	position: "absolute",
	left: 74,
	top: 369,
	borderTopWidth: 0.3,
	borderRightWidth: 0.3,
	borderBottomWidth: 0.3,
	borderLeftWidth: 0.3,
	borderStyle: "solid",
	borderColor: "rgb(244, 244, 248)",
	},
_Line_8: {
	width: 132,
	height: 0,
	position: "absolute",
	left: 74,
	top: 447,
	borderTopWidth: 0.3,
	borderRightWidth: 0.3,
	borderBottomWidth: 0.3,
	borderLeftWidth: 0.3,
	borderStyle: "solid",
	borderColor: "rgb(244, 244, 248)",
	},
_gg_profile: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 38,
	top: 162,
	},
_Group: {
	width: 22,
	height: 22,
	position: "absolute",
	transform: [
		{translateX: 1},
		{translateY: 1},
	],
	},
style15: {
	position: "absolute",
	transform: [
		{translateX: 7},
		{translateY: 4},
	],
	},
style16: {
	},
style17: {
	position: "absolute",
	},
style18: {
	},
_icons8_buy: {
	width: 26,
	height: 26,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 38,
	top: 239,
	},
style20: {
	position: "absolute",
	transform: [
		{translateX: 2.4375},
		{translateY: 6.6875},
	],
	},
style21: {
	},
_ic_outline_local_offer: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 38,
	top: 319,
	},
style23: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style24: {
	},
style25: {
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 5},
	],
	},
style26: {
	},
_ic_outline_sticky_note_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 38,
	top: 397,
	},
style28: {
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 3},
	],
	},
style29: {
	},
_whh_securityalt: {
	width: 20,
	height: 19.2,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 38,
	top: 476,
	},
style31: {
	position: "absolute",
	transform: [
		{translateX: 0.0178223},
	],
	},
style32: {
	},
_iPhone_11_Pro_Max___22: {
	width: 408,
	height: 821,
	backgroundColor: "rgb(242, 242, 242)",
	overflow: "hidden",
	position: "absolute",
	left: 239,
	top: 123,
	borderRadius: 20,
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
	left: 118,
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
	left: 310,
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
	left: 149,
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
	left: 243,
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
	left: 344,
	top: 350,
	color: "rgb(154, 154, 157)",
	fontSize: 17,
	fontWeight: "400",
	fontFamily: "Changa",
	textAlign: "left",
	},
style42: {
	width: 18,
	height: 18,
	position: "absolute",
	left: 85,
	top: 263,
	},
style43: {
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
	left: 50,
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
	left: 299,
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
_Group_2: {
	width: 24.762,
	height: 24.7997,
	position: "absolute",
	transform: [
		{translateX: 3.11914},
		{translateY: 3.10034},
	],
	},
style57: {
	position: "absolute",
	},
style58: {
	},
_ic_sharp_history: {
	width: 29,
	height: 29,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 328,
	top: 819,
	},
style60: {
	position: "absolute",
	transform: [
		{translateX: 1.20825},
		{translateY: 3.625},
	],
	},
style61: {
	},
_user: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 238,
	top: 822,
	},
style63: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 15},
	],
	},
style64: {
	},
style65: {
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 3},
	],
	},
style66: {
	},
_heart: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 148,
	top: 822,
	},
style68: {
	position: "absolute",
	transform: [
		{translateX: 1.54883},
		{translateY: 2.99817},
	],
	},
style69: {
	},
_Rectangle_69: {
	width: 413,
	height: 69,
	backgroundColor: "rgb(169, 68, 37)",
	position: "absolute",
	left: 1,
	top: 21,
	},
style71: {
	width: 22,
	height: 14.6667,
	position: "absolute",
	left: 19,
	top: 45,
	},
style72: {
	},
style73: {
	position: "absolute",
	transform: [
		{translateX: 379.42},
		{translateY: 40.3169},
	],
	},
style74: {
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

