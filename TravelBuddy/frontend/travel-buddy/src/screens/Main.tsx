// Native Imports
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';

// Third-Party Imports
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text } from '@rneui/themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';

// Internal Components
import Itineraries from './bottom-tab-navigation/Itineraries';
import ScreenHeader from '../components/ScreenHeader';
import Explore from './bottom-tab-navigation/Explore';
import MyTrips from './bottom-tab-navigation/MyTrips';
import Home from './Home';

// Utils
import { colors } from '../utils/colors';
import userSlice from '../redux/user/userSlice';
import {
	TypedUseSelectorHook,
	useSelector as useReduxSelector,
} from 'react-redux';
import { AppReducers } from '../redux/store';
import usePlatformStyles from '../custom-hooks/usePlatformStyles';
import useSafeArea from '../custom-hooks/useSafeView';
import { HeaderOptions } from '../types/screens/main';

// Styles
import { styles } from '../styles/Screens/MainStyles';
import { hp } from '../overriden-imports/react-native-responsive-screen';
import Profile from './bottom-tab-navigation/Profile';

const Tab = createBottomTabNavigator();

const Main = () => {
	const { safeArea } = useSafeArea();
	const useSelector: TypedUseSelectorHook<AppReducers> = useReduxSelector;
	const { user, loading, error } = useSelector((state) => state.userReducer);
	const insets = useSafeAreaInsets();
	const { getResponsive } = usePlatformStyles();

	const tabTextBottomPadding = getResponsive({
		property: 'height',
		androidValue: '1.5%',
		iosValue: 0,
	});

	const headerOptions: HeaderOptions = {
		trips: { labelText: 'UPCOMING TRIPS' },
		itineraries: {
			labelText: 'MY ITINERARY',
		},
		explore: {
			labelText: 'TravelBuddy',
			labelStyle: {
				fontFamily: 'Lilita-One',
				fontWeight: '400',
				fontSize: 28,
			},
			textContainerStyle: {
				alignItems: 'flex-start',
				paddingLeft: 30,
			},
		},
	};

	const profileImage = (
		<Image source={require('../assets/account/my-account.png')} />
	);

	return (
		<>
			<Tab.Navigator
				initialRouteName="Home"
				screenOptions={({ route }) => ({
					header: () => null,
					tabBarStyle: { ...styles.tabBar, paddingBottom: insets.bottom },
					tabBarItemStyle: { marginBottom: tabTextBottomPadding },
				})}
				sceneContainerStyle={safeArea}
			>
				<Tab.Screen
					name="trips"
					component={Home}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Image
								style={{
									...{
										width: hp(5),
										height: hp(5),
									},
									...styles.tabBarIcon,
								}}
								source={require('../assets/icons/travel.png')}
							></Image>
						),
						tabBarLabel: ({ focused }) => (
							<Text
								style={{
									color: 'white',
									fontSize: focused ? 16 : 12,
									fontWeight: focused ? 'bold' : 'normal',
									// marginBottom: 10,
								}}
							>
								My Trips
							</Text>
						),
					}}
				/>
				<Tab.Screen
					name="explore"
					component={Explore}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Image
								style={{
									...{
										width: hp(5),
										height: hp(5),
									},
									...styles.tabBarIcon,
								}}
								source={require('../assets/icons/adventurer.png')}
							></Image>
						),
						tabBarLabel: ({ focused }) => (
							<Text
								style={{
									color: 'white',
									fontSize: focused ? 16 : 12,
									fontWeight: focused ? 'bold' : 'normal',
									// marginBottom: 10,
								}}
							>
								Explore
							</Text>
						),
					}}
				/>
				<Tab.Screen
					name="itineraries"
					component={Itineraries}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Image
								style={{
									...{
										width: hp(5),
										height: hp(5),
									},
									...styles.tabBarIcon,
								}}
								source={require('../assets/icons/map.png')}
							></Image>
						),
						tabBarLabel: ({ focused }) => (
							<Text
								style={{
									color: 'white',
									fontSize: focused ? 16 : 12,
									fontWeight: focused ? 'bold' : 'normal',
									// marginBottom: 10,
								}}
							>
								Itineraries
							</Text>
						),
					}}
				/>
				<Tab.Screen
					name="Profile"
					component={Profile}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Image
								style={{
									...{
										width: hp(6),
										height: hp(6),
									},
									...styles.tabBarIcon,
								}}
								// source={{ uri: user?.profileImage }}
								source={require('../assets/icons/profile.png')}
							></Image>
						),
						tabBarLabel: ({ focused }) => (
							<Text
								style={{
									color: 'white',
									fontSize: focused ? 16 : 12,
									fontWeight: focused ? 'bold' : 'normal',
									// marginBottom: 10,
								}}
							>
								Profile
							</Text>
						),
					}}
				/>
			</Tab.Navigator>
		</>
	);
};

export default Main;
