import React, { useEffect } from 'react';
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
import { Button } from '@rneui/themed';

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
	console.log(trips);
	if (error)
		return (
			<View style={safeArea}>
				<Text>Error</Text>
			</View>
		);

	const footerButton = () => <Button title="Add Trip"></Button>;

	return (
		<View style={safeArea}>
			<ScreenHeader
				labelText="UPCOMING TRIPS"
				image={<Image source={require('../assets/account/my-account.png')} />}
			/>
			{loading ? (
				<>
					<TripCardSkeleton />
				</>
			) : (
				<>
					<View>
						<FlatList
							contentContainerStyle={{ paddingBottom: '50%' }}
							style={{ height: '95%' }}
							data={trips}
							ListFooterComponent={footerButton}
							renderItem={({ item }) => {
								return <TripCard trip={item} />;
							}}
							keyExtractor={(item) => item.id.toString()}
						></FlatList>
					</View>
				</>
			)}
		</View>
	);
}
