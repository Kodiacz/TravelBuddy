import React from 'react';
import { View } from 'react-native';
import ScreenHeader from '../../components/ScreenHeader';
import { useSelector } from 'react-redux';
import { AppReducers } from '../../redux/store';
import { Text } from '@rneui/themed';

const Profile = () => {
	const { user } = useSelector((state: AppReducers) => state.userReducer);

	console.log(user.email);

	return (
		<View>
			<ScreenHeader />
		</View>
	);
};

export default Profile;
