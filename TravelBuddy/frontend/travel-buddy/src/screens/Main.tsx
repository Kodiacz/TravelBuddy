import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from '@rneui/themed';
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

const Tab = createBottomTabNavigator();

const Main = () => {
	const useSelector: TypedUseSelectorHook<AppReducers> = useReduxSelector;
	const {
		data: user,
		loading,
		error,
	} = useSelector((state) => state.userReducer);

	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{
				header: () => null,
				// tabBarActiveBackgroundColor: 'black',
				// tabBarInactiveBackgroundColor: 'red',
				// tabBarActiveTintColor: 'black',
				// tabBarInactiveTintColor: 'gray',
				tabBarStyle: styles.tabBar,
			}}
		>
			<Tab.Screen
				name="My Trips"
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
				}}
			/>
			<Tab.Screen
				name="Explore"
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
				}}
			/>
			<Tab.Screen
				name="Itineraries"
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
				}}
			/>
		</Tab.Navigator>
	);
};

export default Main;
