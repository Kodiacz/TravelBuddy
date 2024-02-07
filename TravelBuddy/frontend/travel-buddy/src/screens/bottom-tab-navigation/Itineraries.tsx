import { Text } from '@rneui/base';
import { View, Image } from 'react-native';
import ScreenHeader from '../../components/ScreenHeader';
import useSafeArea from '../../custom-hooks/useSafeView';
import { Icon, ListItem } from '@rneui/themed';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import ItineraryCard from '../../components/ItineraryCard';
import ItineraryAccordion from '../../components/ItineraryAccordion';
import { AppState, useAppDispatch } from '../../redux/store';
import { TypedUseSelectorHook } from 'react-redux';
import { useSelector as useReduxSelector } from 'react-redux';
import { getTripItineraries } from '../../redux/itinerary/itinerarySlice';
import { IItinerariesProps } from '../../types/propTypes';
import TestAccordion from '../../components/TestAccordion';
// import GenericAccordion from '../../components/GenericAccordion';

const Itineraries = ({ tripId }: IItinerariesProps) => {
	const { safeArea } = useSafeArea();
	const [expanded, setExpanded] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;
	const { itineraries, loading, error } = useSelector(
		(state) => state.itineraryReducer,
	);

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

	console.log('itineraries => ', itineraries);

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
						<TestAccordion itinerary={item}></TestAccordion>
					</>
				)}
			/>
		</View>
	);
};

export default Itineraries;
