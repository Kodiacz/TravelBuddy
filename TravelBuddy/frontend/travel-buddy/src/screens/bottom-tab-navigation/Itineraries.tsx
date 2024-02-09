import { Text } from '@rneui/base';
import { View, Image } from 'react-native';
import ScreenHeader from '../../components/ScreenHeader';
import useSafeArea from '../../custom-hooks/useSafeView';
import { Icon, ListItem } from '@rneui/themed';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import ItineraryCard from '../../components/ActivityCard';
import { AppReducers, useAppDispatch } from '../../redux/store';
import { TypedUseSelectorHook } from 'react-redux';
import { useSelector as useReduxSelector } from 'react-redux';
import { getTripItineraries } from '../../redux/itinerary/itinerarySlice';
import { IItinerariesProps } from '../../types/propTypes';
import ItineraryAccordion from '../../components/ItineraryAccordion';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Itineraries = ({ tripId }: IItinerariesProps) => {
	const { safeArea } = useSafeArea();
	const dispatch = useAppDispatch();
	const useSelector: TypedUseSelectorHook<AppReducers> = useReduxSelector;
	const {
		data: itineraries,
		loading,
		error,
	} = useSelector((state) => state.itineraryReducer);

	useEffect(() => {
		const fetchData = async () => {
			try {
				await dispatch(getTripItineraries(7));
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
		<View style={safeArea}>
			<ScreenHeader
				labelText="MY ITINERARY"
				image={image}
			/>
			<FlatList
				data={itineraries}
				renderItem={({ item }) => (
					// <>{<ItineraryAccordion itinerary={item} />}</>
					<>
						<ItineraryAccordion itinerary={item}></ItineraryAccordion>
					</>
				)}
			/>
		</View>
	);
};

export default Itineraries;
