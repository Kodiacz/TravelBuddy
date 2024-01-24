import React from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { Text, View } from 'react-native';
import { IUser } from './authentication/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
	const auth = useAuthUser<IUser>();
	console.log('Home > auth > ', auth);
	return (
		<View>
			<Text>Home Page</Text>
			<Text>{auth?.email}</Text>
			<Text></Text>
		</View>
	);
}
