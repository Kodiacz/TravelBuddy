import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text } from '@rneui/themed';
import React from 'react';
import Explore from './bottom-tab-navigation/Explore';
import MyTrips from './bottom-tab-navigation/MyTrips';
import Itineraries from './bottom-tab-navigation/Itineraries';
import Home from './Home';
import { colors } from '../utils/colors';
import { styles } from '../styles/Screens/MainStyles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import userSlice from '../redux/user/userSlice';
import {
	TypedUseSelectorHook,
	useSelector as useReduxSelector,
} from 'react-redux';
import { AppReducers } from '../redux/store';
import usePlatformStyles from '../custom-hooks/usePlatformStyles';
import { Platform } from 'react-native';
import ScreenHeader from '../components/ScreenHeader';
import useSafeArea from '../custom-hooks/useSafeView';
import { HeaderOptions } from '../types/screens/main';

const Tab = createBottomTabNavigator();

const Main = () => {
	const { safeArea } = useSafeArea();
	const useSelector: TypedUseSelectorHook<AppReducers> = useReduxSelector;
	const {
		data: user,
		loading,
		error,
	} = useSelector((state) => state.userReducer);
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
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={({ route }) => ({
				header: () => (
					<ScreenHeader
						labelText={
							headerOptions[route.name as keyof typeof headerOptions].labelText
						}
						lableStyle={
							headerOptions[route.name as keyof typeof headerOptions].labelStyle
						}
						textContainerStyle={
							headerOptions[route.name as keyof typeof headerOptions]
								.textContainerStyle
						}
					/>
				),
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
									width: size,
									height: size,
								},
								...styles.tabBarIcon,
							}}
							source={require('../assets/icons/My-Trips.png')}
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
									width: size,
									height: size,
								},
								...styles.tabBarIcon,
							}}
							source={require('../assets/icons/Explore.png')}
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
									width: size,
									height: size,
								},
								...styles.tabBarIcon,
							}}
							source={require('../assets/icons/Itineraries.png')}
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
		</Tab.Navigator>
	);
};

export default Main;
