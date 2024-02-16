import { Text } from '@rneui/base';
import { View, Image } from 'react-native';
import ScreenHeader from '../../components/ScreenHeader';
import useSafeArea from '../../custom-hooks/useSafeView';
import { Icon, ListItem } from '@rneui/themed';
import { useEffect, useState } from 'react';
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

const Itineraries = ({ tripId }: IItinerariesProps) => {
	const { safeArea } = useSafeArea();
	const dispatch = useAppDispatch();
	const {
		data: itineraries,
		loading,
		error,
	} = useSelector((state: AppReducers) => state.itineraryReducer);

	const { data: user } = useSelector((state: AppReducers) => state.userReducer);

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

	const image = (
		<Image source={require('../../assets/account/my-account.png')} />
	);

	return (
		<ScrollView style={safeArea}>
			<ScreenHeader
				labelText="MY ITINERARY"
				image={image}
			/>
			{/* <FlatList
				data={itineraries}
				renderItem={({ item }) => (
					// <>{<ItineraryAccordion itinerary={item} />}</>
					<>
						<ItineraryAccordion itinerary={item}></ItineraryAccordion>
					</>
				)}
			/> */}
			{itineraries?.map((x, key) => {
				console.log('key => ', key);
				return (
					<>
						<ItineraryAccordion
							key={key + 3}
							itinerary={x}
						/>
					</>
				);
			})}
		</ScrollView>
	);
};

export default Itineraries;
