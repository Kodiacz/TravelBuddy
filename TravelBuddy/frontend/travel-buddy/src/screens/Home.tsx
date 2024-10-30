import React, { useEffect } from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { FlatList, Image, Platform, Text, View } from 'react-native';
import useSafeArea from '../custom-hooks/useSafeView';
import { getTrips } from '../redux/trips/tripsSlice';
import { AppReducers, useAppDispatch } from '../redux/store';
import { IUser } from '../types/applicationTypes';
import TripCard from '../components/TripCard';
import TripCardSkeleton from '../components/loading-components/TripCardSkeleton';
import { useSelector } from 'react-redux';
import { Button } from '@rneui/themed';
import usePlatformStyles from '../custom-hooks/usePlatformStyles';

export default function Home() {
	const { safeArea } = useSafeArea();
	const { getResponsive } = usePlatformStyles();

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
			<View>
				<Text>Error</Text>
			</View>
		);

	const footerButton = () => <Button title="Add Trip"></Button>;

	const flatListBottomPadding = getResponsive({
		property: 'height',
		iosValue: '35%',
		androidValue: '30%',
	});

	return (
		<>
			{loading ? (
				<>
					<TripCardSkeleton />
				</>
			) : (
				<>
					<View
						style={{ paddingLeft: 10, paddingRight: 10, height: hp('100') }}
					>
						<FlatList
							contentContainerStyle={{
								paddingBottom: flatListBottomPadding,
								// height: 'auto',
							}}
							data={trips}
							ListFooterComponent={footerButton}
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
