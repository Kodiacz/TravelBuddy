import React from 'react';
import { useEffect } from 'react';
import { Text } from '@rneui/base';
import { Image, View } from 'react-native';
import ScreenHeader from '../../components/ScreenHeader';
import useSafeArea from '../../custom-hooks/useSafeView';
import { useFonts } from '@expo-google-fonts/inter';
import { loadAsync } from 'expo-font';

const Explore = () => {
	const { safeArea } = useSafeArea();
	const image = (
		<Image source={require('../../assets/account/my-account.png')} />
	);

	useEffect(() => {
		const loadFont = async () => {
			await loadAsync('Lilita-One');
		};

		loadFont();
	}, []);

	return (
		<View style={safeArea}>
			<ScreenHeader
				image={image}
				labelText="TravelBuddy"
				lableStyle={{
					fontFamily: 'Lilita-One',
					fontWeight: '400',
					fontSize: 28,
				}}
				textContainerStyle={{
					alignItems: 'flex-start',
					paddingLeft: 30,
				}}
			/>
		</View>
	);
};

export default Explore;
