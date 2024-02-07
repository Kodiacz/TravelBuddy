import React, { useEffect } from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import {
	FlatList,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import useSafeArea from '../custom-hooks/useSafeView';
import {
	useSelector as useReduxSelector,
	TypedUseSelectorHook,
} from 'react-redux';
import { getTrips } from '../redux/trips/tripsSlice';
import { AppState, useAppDispatch } from '../redux/store';
import { styles } from '../styles/Screens/HomeStyles';
import { IUser } from '../types/applicationDbTypes';
import TripCard from '../components/TripCard';
import TripCardSkeleton from '../components/loading-components/TripCardSkeleton';
import ScreenHeader from '../components/ScreenHeader';

export default function Home() {
	const { safeArea } = useSafeArea();
	const user = useAuthUser<IUser>();
	const dispatch = useAppDispatch();
	const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;
	const { trips, loading, error } = useSelector((state) => state.tripReducer);

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
							data={trips}
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
