import { RneFunctionComponent } from '@rneui/base';
import { Image, Text } from '@rneui/themed';
import React, { ReactNode } from 'react';
import {
	ImageProps,
	Pressable,
	StyleProp,
	TextStyle,
	View,
	ViewStyle,
} from 'react-native';
import { styles } from '../styles/Components/ScreenHeaderStyles';
import { IScreenHeaderProps } from '../types/propTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ScreenHeader = ({
	imageContainerStyle,
	textContainerStyle,
	lableStyle,
	image,
	labelText,
}: IScreenHeaderProps) => {
	const handlePress = async () => {
		await AsyncStorage.clear();
	};

	return (
		<>
			<Pressable onPress={handlePress}>
				<View style={imageContainerStyle ?? styles.imageContainer}>
					{image}
				</View>
				<View style={textContainerStyle ?? styles.textContainer}>
					<Text style={lableStyle ?? styles.labelTextStyle}>{labelText}</Text>
				</View>
			</Pressable>
		</>
	);
};

export default ScreenHeader;
