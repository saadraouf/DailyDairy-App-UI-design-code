import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, ActivityIndicator, KeyboardAvoidingView, TouchableWithoutFeedback, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Entypo';
import RNPickerSelect from 'react-native-picker-select';
import {fonts} from './fonts/fonts.js';
import {useFonts} from '@expo-google-fonts/dev';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Page_first_page from "./pages/Page_first_page/Page_first_page.js";
import Page_chevron_left from "./pages/Page_chevron_left/Page_chevron_left.js";
import Page_iPhone_11_Pro_Max___4 from "./pages/Page_iPhone_11_Pro_Max___4/Page_iPhone_11_Pro_Max___4.js";
import Page_iPhone_11_Pro_Max___5 from "./pages/Page_iPhone_11_Pro_Max___5/Page_iPhone_11_Pro_Max___5.js";
import Page_shopping_cart from "./pages/Page_shopping_cart/Page_shopping_cart.js";
import Page_chevron_left_2 from "./pages/Page_chevron_left_2/Page_chevron_left_2.js";
import Page_iPhone_11_Pro_Max___9 from "./pages/Page_iPhone_11_Pro_Max___9/Page_iPhone_11_Pro_Max___9.js";
import Page_chevron_left_3 from "./pages/Page_chevron_left_3/Page_chevron_left_3.js";
import Page_iPhone_11_Pro_Max___10 from "./pages/Page_iPhone_11_Pro_Max___10/Page_iPhone_11_Pro_Max___10.js";
import Page_iPhone_11_Pro_Max___3 from "./pages/Page_iPhone_11_Pro_Max___3/Page_iPhone_11_Pro_Max___3.js";
import Page_iPhone_11_Pro_Max___8 from "./pages/Page_iPhone_11_Pro_Max___8/Page_iPhone_11_Pro_Max___8.js";
import Page_chevron_left_4 from "./pages/Page_chevron_left_4/Page_chevron_left_4.js";
import Page_iPhone_11_Pro_Max___6 from "./pages/Page_iPhone_11_Pro_Max___6/Page_iPhone_11_Pro_Max___6.js";
import Page_iPhone_11_Pro_Max___2 from "./pages/Page_iPhone_11_Pro_Max___2/Page_iPhone_11_Pro_Max___2.js";
import Page_iPhone_11_Pro_Max___1 from "./pages/Page_iPhone_11_Pro_Max___1/Page_iPhone_11_Pro_Max___1.js";
import Page_iPhone_11_Pro_Max___7 from "./pages/Page_iPhone_11_Pro_Max___7/Page_iPhone_11_Pro_Max___7.js";
const Tab = createBottomTabNavigator();
const Page_first_pageStackNavigator = createStackNavigator();
const ScreenForPage_first_page = () => {
	return (
		<Page_first_pageStackNavigator.Navigator>
			<Page_first_pageStackNavigator.Screen
				name = "Page_first_page"
				component = {Page_first_page}
				options = {{
					headerShown: false
				}}
			/>
		</Page_first_pageStackNavigator.Navigator>
	)
};
const Page_chevron_leftStackNavigator = createStackNavigator();
const ScreenForPage_chevron_left = () => {
	return (
		<Page_chevron_leftStackNavigator.Navigator>
			<Page_chevron_leftStackNavigator.Screen
				name = "Page_chevron_left"
				component = {Page_chevron_left}
				options = {{
					headerShown: false
				}}
			/>
		</Page_chevron_leftStackNavigator.Navigator>
	)
};
const Page_iPhone_11_Pro_Max___4StackNavigator = createStackNavigator();
const ScreenForPage_iPhone_11_Pro_Max___4 = () => {
	return (
		<Page_iPhone_11_Pro_Max___4StackNavigator.Navigator>
			<Page_iPhone_11_Pro_Max___4StackNavigator.Screen
				name = "Page_iPhone_11_Pro_Max___4"
				component = {Page_iPhone_11_Pro_Max___4}
				options = {{
					headerShown: false
				}}
			/>
		</Page_iPhone_11_Pro_Max___4StackNavigator.Navigator>
	)
};
const Page_iPhone_11_Pro_Max___5StackNavigator = createStackNavigator();
const ScreenForPage_iPhone_11_Pro_Max___5 = () => {
	return (
		<Page_iPhone_11_Pro_Max___5StackNavigator.Navigator>
			<Page_iPhone_11_Pro_Max___5StackNavigator.Screen
				name = "Page_iPhone_11_Pro_Max___5"
				component = {Page_iPhone_11_Pro_Max___5}
				options = {{
					headerShown: false
				}}
			/>
		</Page_iPhone_11_Pro_Max___5StackNavigator.Navigator>
	)
};
const Page_shopping_cartStackNavigator = createStackNavigator();
const ScreenForPage_shopping_cart = () => {
	return (
		<Page_shopping_cartStackNavigator.Navigator>
			<Page_shopping_cartStackNavigator.Screen
				name = "Page_shopping_cart"
				component = {Page_shopping_cart}
				options = {{
					headerShown: false
				}}
			/>
		</Page_shopping_cartStackNavigator.Navigator>
	)
};
const Page_chevron_left_2StackNavigator = createStackNavigator();
const ScreenForPage_chevron_left_2 = () => {
	return (
		<Page_chevron_left_2StackNavigator.Navigator>
			<Page_chevron_left_2StackNavigator.Screen
				name = "Page_chevron_left_2"
				component = {Page_chevron_left_2}
				options = {{
					headerShown: false
				}}
			/>
		</Page_chevron_left_2StackNavigator.Navigator>
	)
};
const Page_iPhone_11_Pro_Max___9StackNavigator = createStackNavigator();
const ScreenForPage_iPhone_11_Pro_Max___9 = () => {
	return (
		<Page_iPhone_11_Pro_Max___9StackNavigator.Navigator>
			<Page_iPhone_11_Pro_Max___9StackNavigator.Screen
				name = "Page_iPhone_11_Pro_Max___9"
				component = {Page_iPhone_11_Pro_Max___9}
				options = {{
					headerShown: false
				}}
			/>
		</Page_iPhone_11_Pro_Max___9StackNavigator.Navigator>
	)
};
const Page_chevron_left_3StackNavigator = createStackNavigator();
const ScreenForPage_chevron_left_3 = () => {
	return (
		<Page_chevron_left_3StackNavigator.Navigator>
			<Page_chevron_left_3StackNavigator.Screen
				name = "Page_chevron_left_3"
				component = {Page_chevron_left_3}
				options = {{
					headerShown: false
				}}
			/>
		</Page_chevron_left_3StackNavigator.Navigator>
	)
};
const Page_iPhone_11_Pro_Max___10StackNavigator = createStackNavigator();
const ScreenForPage_iPhone_11_Pro_Max___10 = () => {
	return (
		<Page_iPhone_11_Pro_Max___10StackNavigator.Navigator>
			<Page_iPhone_11_Pro_Max___10StackNavigator.Screen
				name = "Page_iPhone_11_Pro_Max___10"
				component = {Page_iPhone_11_Pro_Max___10}
				options = {{
					headerShown: false
				}}
			/>
		</Page_iPhone_11_Pro_Max___10StackNavigator.Navigator>
	)
};
const Page_iPhone_11_Pro_Max___3StackNavigator = createStackNavigator();
const ScreenForPage_iPhone_11_Pro_Max___3 = () => {
	return (
		<Page_iPhone_11_Pro_Max___3StackNavigator.Navigator>
			<Page_iPhone_11_Pro_Max___3StackNavigator.Screen
				name = "Page_iPhone_11_Pro_Max___3"
				component = {Page_iPhone_11_Pro_Max___3}
				options = {{
					headerShown: false
				}}
			/>
		</Page_iPhone_11_Pro_Max___3StackNavigator.Navigator>
	)
};
const Page_iPhone_11_Pro_Max___8StackNavigator = createStackNavigator();
const ScreenForPage_iPhone_11_Pro_Max___8 = () => {
	return (
		<Page_iPhone_11_Pro_Max___8StackNavigator.Navigator>
			<Page_iPhone_11_Pro_Max___8StackNavigator.Screen
				name = "Page_iPhone_11_Pro_Max___8"
				component = {Page_iPhone_11_Pro_Max___8}
				options = {{
					headerShown: false
				}}
			/>
		</Page_iPhone_11_Pro_Max___8StackNavigator.Navigator>
	)
};
const Page_chevron_left_4StackNavigator = createStackNavigator();
const ScreenForPage_chevron_left_4 = () => {
	return (
		<Page_chevron_left_4StackNavigator.Navigator>
			<Page_chevron_left_4StackNavigator.Screen
				name = "Page_chevron_left_4"
				component = {Page_chevron_left_4}
				options = {{
					headerShown: false
				}}
			/>
		</Page_chevron_left_4StackNavigator.Navigator>
	)
};
const Page_iPhone_11_Pro_Max___6StackNavigator = createStackNavigator();
const ScreenForPage_iPhone_11_Pro_Max___6 = () => {
	return (
		<Page_iPhone_11_Pro_Max___6StackNavigator.Navigator>
			<Page_iPhone_11_Pro_Max___6StackNavigator.Screen
				name = "Page_iPhone_11_Pro_Max___6"
				component = {Page_iPhone_11_Pro_Max___6}
				options = {{
					headerShown: false
				}}
			/>
		</Page_iPhone_11_Pro_Max___6StackNavigator.Navigator>
	)
};
const Page_iPhone_11_Pro_Max___2StackNavigator = createStackNavigator();
const ScreenForPage_iPhone_11_Pro_Max___2 = () => {
	return (
		<Page_iPhone_11_Pro_Max___2StackNavigator.Navigator>
			<Page_iPhone_11_Pro_Max___2StackNavigator.Screen
				name = "Page_iPhone_11_Pro_Max___2"
				component = {Page_iPhone_11_Pro_Max___2}
				options = {{
					headerShown: false
				}}
			/>
		</Page_iPhone_11_Pro_Max___2StackNavigator.Navigator>
	)
};
const Page_iPhone_11_Pro_Max___1StackNavigator = createStackNavigator();
const ScreenForPage_iPhone_11_Pro_Max___1 = () => {
	return (
		<Page_iPhone_11_Pro_Max___1StackNavigator.Navigator>
			<Page_iPhone_11_Pro_Max___1StackNavigator.Screen
				name = "Page_iPhone_11_Pro_Max___1"
				component = {Page_iPhone_11_Pro_Max___1}
				options = {{
					headerShown: false
				}}
			/>
		</Page_iPhone_11_Pro_Max___1StackNavigator.Navigator>
	)
};
const Page_iPhone_11_Pro_Max___7StackNavigator = createStackNavigator();
const ScreenForPage_iPhone_11_Pro_Max___7 = () => {
	return (
		<Page_iPhone_11_Pro_Max___7StackNavigator.Navigator>
			<Page_iPhone_11_Pro_Max___7StackNavigator.Screen
				name = "Page_iPhone_11_Pro_Max___7"
				component = {Page_iPhone_11_Pro_Max___7}
				options = {{
					headerShown: false
				}}
			/>
		</Page_iPhone_11_Pro_Max___7StackNavigator.Navigator>
	)
};
const App = () => {
	let [fontsLoaded] = useFonts(fonts);
const Stack = createStackNavigator();
	const [isPage0Open, setIsPage0Open] = useState(true)
	const zIndexPage0 = useRef(1)
	const [isPage1Open, setIsPage1Open] = useState(false)
	const zIndexPage1 = useRef(2)
	const [isPage2Open, setIsPage2Open] = useState(false)
	const zIndexPage2 = useRef(2)
	const [isPage3Open, setIsPage3Open] = useState(false)
	const zIndexPage3 = useRef(2)
	const [isPage4Open, setIsPage4Open] = useState(false)
	const zIndexPage4 = useRef(2)
	const [isPage5Open, setIsPage5Open] = useState(false)
	const zIndexPage5 = useRef(2)
	const [isPage6Open, setIsPage6Open] = useState(false)
	const zIndexPage6 = useRef(2)
	const [isPage7Open, setIsPage7Open] = useState(false)
	const zIndexPage7 = useRef(2)
	const [isPage8Open, setIsPage8Open] = useState(false)
	const zIndexPage8 = useRef(2)
	const [isPage9Open, setIsPage9Open] = useState(false)
	const zIndexPage9 = useRef(2)
	const [isPage10Open, setIsPage10Open] = useState(false)
	const zIndexPage10 = useRef(2)
	const [isPage11Open, setIsPage11Open] = useState(false)
	const zIndexPage11 = useRef(2)
	const [isPage12Open, setIsPage12Open] = useState(false)
	const zIndexPage12 = useRef(2)
	const [isPage13Open, setIsPage13Open] = useState(false)
	const zIndexPage13 = useRef(2)
	const [isPage14Open, setIsPage14Open] = useState(false)
	const zIndexPage14 = useRef(2)
	const [isPage15Open, setIsPage15Open] = useState(false)
	const zIndexPage15 = useRef(2)
	if(!fontsLoaded){
		return <AppLoading/>
	}
	const mainScreen = () => { return (
					<Tab.Navigator
						tabBarOptions={{
							showLabel: false,
							style: noneModeStyles.style0,
							iconStyle: {width: "100%", height: "100%"},
						}}>
						<Tab.Screen
							name = "Page_first_page"
							component = {ScreenForPage_first_page}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_chevron_left"
							component = {ScreenForPage_chevron_left}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_iPhone_11_Pro_Max___4"
							component = {ScreenForPage_iPhone_11_Pro_Max___4}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_iPhone_11_Pro_Max___5"
							component = {ScreenForPage_iPhone_11_Pro_Max___5}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_shopping_cart"
							component = {ScreenForPage_shopping_cart}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_chevron_left_2"
							component = {ScreenForPage_chevron_left_2}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_iPhone_11_Pro_Max___9"
							component = {ScreenForPage_iPhone_11_Pro_Max___9}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_chevron_left_3"
							component = {ScreenForPage_chevron_left_3}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_iPhone_11_Pro_Max___10"
							component = {ScreenForPage_iPhone_11_Pro_Max___10}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_iPhone_11_Pro_Max___3"
							component = {ScreenForPage_iPhone_11_Pro_Max___3}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_iPhone_11_Pro_Max___8"
							component = {ScreenForPage_iPhone_11_Pro_Max___8}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_chevron_left_4"
							component = {ScreenForPage_chevron_left_4}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_iPhone_11_Pro_Max___6"
							component = {ScreenForPage_iPhone_11_Pro_Max___6}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_iPhone_11_Pro_Max___2"
							component = {ScreenForPage_iPhone_11_Pro_Max___2}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_iPhone_11_Pro_Max___1"
							component = {ScreenForPage_iPhone_11_Pro_Max___1}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_iPhone_11_Pro_Max___7"
							component = {ScreenForPage_iPhone_11_Pro_Max___7}
							options = {{tabBarVisible: false}}						/> 
					</Tab.Navigator>
	)};
	return (
				<NavigationContainer>
					<Stack.Navigator>
					<Stack.Screen name = "main" options={{headerShown: false}} component={mainScreen}/>
</Stack.Navigator>
				</NavigationContainer>
)};

const noneModeStyles = StyleSheet.create({
style0 : {position: "absolute", bottom: 0, left: 0, right: 0, width: 0, height: 0},
})
export default App;

