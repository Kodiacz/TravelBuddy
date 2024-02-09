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
import { Image } from 'react-native';
import ActivityCard from './ActivityCard';

type Props = {
	itinerary: IItinerary;
};

const ItineraryAccordion = ({ itinerary }: Props) => {
	const listRef = useAnimatedRef<Animated.View>();
	const heightValue = useSharedValue(0);
	const open = useSharedValue<boolean>(false);
	const progress = useDerivedValue(() =>
		open.value ? withTiming(1) : withTiming(0),
	);
	const test = 50;
	const heightAnimationStyle = useAnimatedStyle(() => ({
		height: interpolate(
			progress.value,
			[0, 1],
			[0, heightValue.value],
			Extrapolate.CLAMP,
		),
	}));

	console.log(`${test * itinerary.activities.length}%`);

	return (
		<View style={styles.container}>
			<Pressable
				style={styles.titleContainer}
				onPress={() => {
					if (heightValue.value === 0) {
						runOnUI(() => {
							'worklet';
							const measurement = measure(listRef);
							heightValue.value = 48 * itinerary.activities.length;
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
							<ActivityCard
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
		height: '100%',
		// flex: 1,
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

export default ItineraryAccordion;
