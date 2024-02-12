import { ReactNode } from 'react';
import { IActivity, IItinerary, ITrip } from './applicationTypes';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

interface ITripCardProps {
	trip: ITrip;
}

interface IAppProps {
	increment: () => void;
	decrement: () => void;
}

interface IItineraryCardProps {
	itinerary: IItinerary;
}

interface IOpenURLButtonProps<T extends React.ComponentType<any>> {
	url: string;
	children:
		| ReactNode
		| React.ReactElement<{ onPress: () => void }>
		| ((onPress: () => void) => ReactNode);
}

interface IScreenHeaderProps {
	imageContainerStyle?: StyleProp<ViewStyle>;
	textContainerStyle?: StyleProp<ViewStyle>;
	lableStyle?: StyleProp<TextStyle>;
	labelText?: string;
	image?: ReactNode;
}

interface ITripCardSkeletonProps {
	mainContainerStyle: string;
}

interface IRegisterData {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

interface IItineraryAccordionProps {
	itinerary: IItinerary;
}

interface IItinerariesProps {
	tripId?: number;
}

interface IActivityProps {
	// name: string;
	// checked: boolean;
	activity: IActivity;
}

export {
	ITripCardProps,
	IAppProps,
	IItineraryCardProps,
	IOpenURLButtonProps,
	IScreenHeaderProps,
	ITripCardSkeletonProps,
	IRegisterData,
	IItineraryAccordionProps,
	IItinerariesProps,
	IActivityProps,
};
