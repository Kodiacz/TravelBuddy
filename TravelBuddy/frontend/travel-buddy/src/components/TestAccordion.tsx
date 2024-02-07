import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { IItinerary } from '../types/applicationDbTypes';
import { colors } from '../utils/colors';
import Chevron from './Chevron';
import Animated, {
	Extrapolate,
	interpolate,
	measure,
	runOnJS,
	runOnUI,
	useAnimatedRef,
	useAnimatedStyle,
	useDerivedValue,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';
import { Activity } from './ItineraryCard';
import { Image } from 'react-native';

type Props = {
	itinerary: IItinerary;
};

const TestAccordion = ({ itinerary }: Props) => {
	const listRef = useAnimatedRef<Animated.View>();
	const heightValue = useSharedValue(0);
	const open = useSharedValue<boolean>(false);
	const progress = useDerivedValue(() =>
		open.value ? withTiming(1) : withTiming(0),
	);

	const heightAnimationStyle = useAnimatedStyle(() => ({
		height: interpolate(
			progress.value,
			[0, 1],
			[0, heightValue.value],
			Extrapolate.CLAMP,
		),
	}));

	return (
		<View style={styles.container}>
			<Pressable
				style={styles.titleContainer}
				onPress={() => {
					if (heightValue.value === 0) {
						runOnUI(() => {
							'worklet';
							const measurement = measure(listRef);
							heightValue.value = 55 * itinerary.activities.length;
						})();
					}
					open.value = !open.value;
				}}
			>
				<Text style={styles.textTitle}>{itinerary.name}</Text>
				<Chevron progress={progress} />
			</Pressable>
			<Animated.View style={heightAnimationStyle}>
				<Animated.View
					ref={listRef}
					style={styles.contentContainer}
				>
					<View style={styles.itineraryInfoContainer}>
						<View>
							<Text>
								Itinerary for {new Date(itinerary.date).toLocaleDateString()}
							</Text>
						</View>
						<Image
							style={{ width: 20, height: 20, marginRight: '3%' }}
							source={require('../assets/pictures/yellow-edit-pensil.png')}
						/>
					</View>
					{itinerary.activities.map((a, i) => {
						return (
							<Activity
								activity={a}
								key={i}
							/>
						);
					})}
				</Animated.View>
			</Animated.View>
		</View>
	);
};

export default TestAccordion;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.accent.absoluteApricot,
		marginHorizontal: 10,
		marginVertical: 10,
		borderRadius: 12.5,
		borderColor: '#F56B3',
		overflow: 'hidden',
	},
	titleContainer: {
		padding: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	textTitle: {
		fontSize: 16,
	},
	contentContainer: {
		borderTopRightRadius: 12.5,
		borderTopLeftRadius: 12.5,
		overflow: 'hidden',
		backgroundColor: colors.white,
	},
	content: {
		padding: 20,
		backgroundColor: '#D6E1F0',
	},
	textContent: {
		fontSize: 14,
	},
	itineraryInfoContainer: {
		paddingTop: 10,
		paddingHorizontal: '1.5%',
		justifyContent: 'space-between',
		flexDirection: 'row',
		backgroundColor: colors.white,
	},
});
