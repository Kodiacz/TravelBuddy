import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, {
	SharedValue,
	useAnimatedStyle,
} from 'react-native-reanimated';

type ChevronProps = {
	progress: Animated.SharedValue<number>;
};

const Chevron = ({ progress }: ChevronProps) => {
	const iconStyle = useAnimatedStyle(() => ({
		transform: [
			{
				rotate: `${progress.value * -180}deg`,
			},
		],
	}));

	console.log('progress in Chevron => ', progress.value);

	return (
		<Animated.View style={iconStyle}>
			<Image source={require('../assets/pictures/accordion-arrow.png')} />
		</Animated.View>
	);
};

export default Chevron;

const styles = StyleSheet.create({});
