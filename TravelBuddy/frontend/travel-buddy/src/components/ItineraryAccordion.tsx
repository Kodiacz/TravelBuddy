import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { IActivity, IItinerary } from '../types/applicationTypes';
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

const sortActivitiesByDone = (a: boolean, b: boolean) => {
	const doneA = a ? 1 : 0;
	const doneB = b ? 1 : 0;

	return doneA - doneB;
};

const ItineraryAccordion = ({ itinerary }: Props) => {
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

	console.log(
		`${itinerary.name} => ${itinerary.activities.length} => ${
			heightValue.value
		} => ${itinerary.activities.length !== 0}`,
	);

	return (
		<View style={styles.container}>
			<Pressable
				style={styles.titleContainer}
				onPress={() => {
					if (heightValue.value === 0) {
						runOnUI(() => {
							'worklet';
							heightValue.value =
								itinerary.activities.length !== 0
									? 40 * (itinerary.activities.length + 1)
									: 0;
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
						<View style={styles.contentTitleContainer}>
							<Text>
								Itinerary for {new Date(itinerary.date).toLocaleDateString()}
							</Text>
						</View>
						<Image
							style={{ width: 20, height: 20 }}
							source={require('../assets/icons/yellow-edit-pensil.png')}
						/>
					</View>
					{itinerary.activities
						.sort((a, b) => sortActivitiesByDone(a.done, b.done))
						.map((a, i) => {
							return (
								<ActivityCard
									activity={a}
									key={i + 2}
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
		paddingRight: '6.7%',
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
	},
	content: {
		padding: 20,
		backgroundColor: '#D6E1F0',
	},
	textContent: {
		fontSize: 14,
	},
	contentTitleContainer: {
		marginBottom: 15,
	},
	itineraryInfoContainer: {
		paddingTop: 10,
		justifyContent: 'space-between',
		flexDirection: 'row',
		backgroundColor: colors.white,
		paddingRight: '5.8%',
		paddingLeft: '4.5%',
	},
});

export default ItineraryAccordion;
