import React, { useEffect } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import useSafeArea from '../custom-hooks/useSafeView';
import { getTrips } from '../redux/trips/tripsSlice';
import { AppReducers, useAppDispatch } from '../redux/store';
import { IUser } from '../types/applicationTypes';
import TripCard from '../components/TripCard';
import TripCardSkeleton from '../components/loading-components/TripCardSkeleton';
import { useSelector } from 'react-redux';

export default function Home() {
	const user = useSelector(
		(state: AppReducers) => state.userReducer.data,
	) as IUser | null;
	const dispatch = useAppDispatch();
	const {
		data: trips,
		loading,
		error,
	} = useSelector((state: AppReducers) => state.tripReducer);

	useEffect(() => {
		const fetchData = async () => {
			try {
				await dispatch(getTrips(user?.userId!));
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, [dispatch, user?.userId]);

	if (error)
		return (
			<View>
				<Text>Error</Text>
			</View>
		);

	return (
		<>
			{loading ? (
				<>
					<TripCardSkeleton />
				</>
			) : (
				<>
					<View>
						<FlatList
							data={trips}
							renderItem={({ item }) => {
								return <TripCard trip={item} />;
							}}
							keyExtractor={(item) => item.id.toString()}
						/>
					</View>
				</>
			)}
		</>
	);
}
