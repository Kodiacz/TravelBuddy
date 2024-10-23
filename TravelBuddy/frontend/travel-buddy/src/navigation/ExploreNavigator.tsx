import React from 'react-native';
import { View } from 'react-native';
import LandingScreen from '../screens/Landing';
import RegisterScreen from '../screens/authentication/Register';
import LoginScreen from '../screens/authentication/Login';
import HomeScreen from '../screens/Home';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from '@rneui/base';
import { NavigationContainer } from '@react-navigation/native';
import { AppRootStackParamList } from '../types/applicationTypes';

//TODO: Needs to be changed
const ExploreNavigator = () => {
	return <View></View>;
};

export default ExploreNavigator;
