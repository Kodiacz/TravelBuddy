import React from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { FlatList, Image, Text, View } from 'react-native';
import useSafeArea from '../custom-hooks/useSafeView';
import {
	useSelector as useReduxSelector,
	TypedUseSelectorHook,
} from 'react-redux';
import { getTrips } from '../redux/trips/tripsSlice';
import { AppReducers, useAppDispatch } from '../redux/store';
import { IUser } from '../types/applicationTypes';
import TripCard from '../components/TripCard';
import TripCardSkeleton from '../components/loading-components/TripCardSkeleton';
import ScreenHeader from '../components/ScreenHeader';
import { useSelector } from 'react-redux';

export default function Home() {
	const { safeArea } = useSafeArea();
	// const user = useAuthUser<IUser>();
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
			<View style={safeArea}>
				<Text>Error</Text>
			</View>
		);

	return (
		<View>
			<Text>Home Page</Text>
			<Text>{auth?.email}</Text>
			<Text></Text>
		</View>
	);
}
