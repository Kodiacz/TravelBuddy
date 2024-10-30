import { StyleProp, TextStyle, ViewStyle } from 'react-native';

type HeaderOptions = {
	trips: {
		labelText: 'UPCOMING TRIPS';
		labelStyle?: StyleProp<TextStyle>;
		textContainerStyle?: StyleProp<ViewStyle>;
	};
	itineraries: {
		labelText: 'MY ITINERARY';
		labelStyle?: StyleProp<TextStyle>;
		textContainerStyle?: StyleProp<ViewStyle>;
	};
	explore: {
		labelText: 'TravelBuddy';
		labelStyle?: StyleProp<TextStyle>;
		textContainerStyle?: StyleProp<ViewStyle>;
	};
};

export { HeaderOptions };
