import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { IActivity, IItinerary } from '../types/applicationTypes';
import { colors } from '../utils/colors';
import ItineraryAccordionArrow from './ItineraryAccordionArrow';
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
import { ScrollView } from 'react-native-gesture-handler';

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
	const [sortedActivities, setSortedActivities] = useState<IActivity[]>([]);

	const heightAnimationStyle = useAnimatedStyle(() => ({
		height: heightValue.value,
	}));

	const itineraryDate = new Date(itinerary.date);

	const dateOptions: Intl.DateTimeFormatOptions = {
		day: '2-digit',
		month: '2-digit',
		year: '2-digit',
	};

	useEffect(() => {
		setSortedActivities(
			[...itinerary.activities].sort((a, b) =>
				sortActivitiesByDone(a.done, b.done),
			),
		);
	}, [itinerary.activities, sortActivitiesByDone]);

	console.log(`${Platform.OS} => itinerary => `, itinerary);

	return (
		<View style={styles.container}>
			<Pressable
				style={styles.titleContainer}
				onPress={() => {
					if (heightValue.value === 0) {
						runOnUI(() => {
							('worklet');
							heightValue.value = withTiming(measure(listRef)!.height);
						})();
					} else {
						heightValue.value = withTiming(0);
					}
				}}
			>
				<Text style={styles.textTitle}>{itinerary.name}</Text>
				<Text style={styles.dateStyle}>
					{itineraryDate.toLocaleDateString(undefined, dateOptions)}
				</Text>
				<ItineraryAccordionArrow progress={progress} />
			</Pressable>
			<Animated.View style={heightAnimationStyle}>
				<Animated.View
					style={styles.contentContainer}
					ref={listRef}
				>
					<View style={styles.itineraryInfoContainer}>
						<View style={styles.contentTitleContainer}>
							<Text>
								Itinerary for {new Date(itinerary.date).toLocaleDateString()}
							</Text>
						</View>
						<Pressable onPress={() => console.log('clicked')}>
							<Image
								style={{ width: 20, height: 20 }}
								source={require('../assets/icons/yellow-edit-pensil.png')}
							/>
						</Pressable>
					</View>
					{itinerary.activities.length > 0 ? (
						sortedActivities.map((activity, activityIndex) => {
							return (
								<ActivityCard
									activity={activity}
									activityIndex={activityIndex}
									itineraryId={itinerary.id}
									key={activity.name}
								/>
							);
						})
					) : (
						<View>
							<Text>Empty</Text>
						</View>
					)}
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
		flex: 0.9,
	},
	dateStyle: {
		fontSize: 16,
		flex: 1,
	},
	contentContainer: {
		borderTopRightRadius: 12.5,
		borderTopLeftRadius: 12.5,
		position: 'absolute',
		width: '100%',
		top: 0,
		backgroundColor: colors.white,
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
