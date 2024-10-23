import React from 'react';
import LandingScreen from '../screens/Landing';
import RegisterScreen from '../screens/authentication/Register';
import LoginScreen from '../screens/authentication/Login';
import HomeScreen from '../screens/Home';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from '@rneui/base';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppRootStackParamList } from '../types/applicationTypes';

const Stack = createNativeStackNavigator<AppRootStackParamList>();

const MyTripsNavigator = () => {
	return <View>Hello</View>;
};

export default MyTripsNavigator;
