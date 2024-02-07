import { RneFunctionComponent } from '@rneui/base';
import { Image, Text } from '@rneui/themed';
import React, { ReactNode } from 'react';
import {
	ImageProps,
	StyleProp,
	TextStyle,
	View,
	ViewStyle,
} from 'react-native';
import { styles } from '../styles/Components/ScreenHeaderStyles';
import { IScreenHeaderProps } from '../types/propTypes';

const ScreenHeader = ({
	imageContainerStyle,
	textContainerStyle,
	lableStyle,
	image,
	labelText,
}: IScreenHeaderProps) => {
	return (
		<>
			<View style={imageContainerStyle ?? styles.imageContainer}>{image}</View>
			<View style={textContainerStyle ?? styles.textContainer}>
				<Text style={lableStyle ?? styles.labelTextStyle}>{labelText}</Text>
			</View>
		</>
	);
};

export default ScreenHeader;
