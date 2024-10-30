import React from 'react';
import { useEffect, useState } from 'react';
import { Text } from '@rneui/base';
import { View, Image, StyleSheet, AppState } from 'react-native';
import ScreenHeader from '../../components/ScreenHeader';
import useSafeArea from '../../custom-hooks/useSafeView';
import { Icon, ListItem } from '@rneui/themed';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import ItineraryCard from '../../components/ActivityCard';
import { AppReducers, useAppDispatch } from '../../redux/store';
import { TypedUseSelectorHook } from 'react-redux';
import { useSelector as useReduxSelector } from 'react-redux';
import { getTripItineraries } from '../../redux/itinerary/itinerarySlice';
import { IItinerariesProps } from '../../types/propTypes';
import ItineraryAccordion from '../../components/ItineraryAccordion';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import { ActivityPatchUpdate, IItinerary } from '../../types/applicationTypes';
import { colors } from '../../utils/colors';
import { updateItinerariesActivities } from '../../redux/itinerary/itineraryAsyncThunks';

const Itineraries = ({ tripId }: IItinerariesProps) => {
	const dispatch = useAppDispatch();
	const {
		data: itineraries,
		loading,
		error,
	} = useSelector((state: AppReducers) => state.itineraryReducer);

	const { data: user } = useSelector((state: AppReducers) => state.userReducer);

	function groupItinerariesByTripName(
		itineraries: IItinerary[],
	): { tripName: string; itineraries: IItinerary[] }[] {
		const groups: { [key: string]: IItinerary[] } = {};
		itineraries.forEach((itinerary) => {
			const tripName = itinerary.trip.name;
			if (!groups[tripName]) {
				groups[tripName] = [];
			}
			groups[tripName].push(itinerary);
		});

		return Object.keys(groups).map((tripName) => ({
			tripName,
			itineraries: groups[tripName],
		}));
	}

	const groupedItineraries = groupItinerariesByTripName(itineraries!);

	const createActivitiesPatchDocuments = (itineraries: IItinerary[]) => {
		const activities = itineraries.flatMap((x) => x.activities);
		const activitiesPatchDocuments: ActivityPatchUpdate[] = activities.map(
			(x) => {
				console.log('createActivitiesPatchDocuments => activity => ', x);
				return {
					op: 'replace',
					entityId: x.id?.toString(),
					path: 'done',
					value: x.done?.toString(),
				};
			},
		);

		return activitiesPatchDocuments;
	};

	const handleAppStateChange = async (
		nextAppState: any,
		// itineraries: IItinerary[],
		activitiesPatchDocuments: ActivityPatchUpdate[],
	) => {
		if (nextAppState === 'inactive' || nextAppState === 'background') {
			console.log(
				'inside handleAppStateChange => generateedActivityPatchDocuments => ',
				activitiesPatchDocuments,
			);
			console.log(
				'inside handleAppStateChange => itineraries => ',
				itineraries,
			);
			dispatch(updateItinerariesActivities(activitiesPatchDocuments));
		}
	};
	useEffect(() => {
		const fetchData = async () => {
			try {
				await dispatch(
					getTripItineraries({ orderBy: 0, userId: user?.userId! }),
				);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const generateedActivityPatchDocuments = createActivitiesPatchDocuments(
			itineraries!,
		);
		const subscription = AppState.addEventListener('change', (nextAppState) =>
			handleAppStateChange(nextAppState, generateedActivityPatchDocuments!),
		);

		return () => {
			subscription.remove();
		};
	}, [itineraries]);

	const test = createActivitiesPatchDocuments(itineraries!);

	console.log('patch documents => tests => ', test);

	return (
		<ScrollView>
			{groupedItineraries.map((x, i) => {
				return (
					<>
						<View style={styles.container}>
							<Text style={styles.tripName}>{x.tripName}</Text>
							{x?.itineraries.map((itinerary) => {
								return (
									<>
										<ItineraryAccordion
											key={itinerary.id}
											itinerary={itinerary}
										/>
									</>
								);
							})}
						</View>
					</>
				);
			})}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: '2%',
	},
	tripName: {
		paddingLeft: '3.5%',
		fontSize: 20,
		fontWeight: 'bold',
		color: colors.primary.fibonacciBlue,
	},
});

export default Itineraries;
