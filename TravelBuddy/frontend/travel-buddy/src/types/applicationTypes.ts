import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type AppRootStackParamList = {
	Landing: undefined;
	Register: undefined;
	Login: undefined;
	Home: undefined;
	Main: undefined;
};

type AppScreenNavigationProp = NativeStackNavigationProp<
	AppRootStackParamList,
	keyof AppRootStackParamList
>;

interface ITrip {
	id: number;
	name: string;
	image?: string;
	creator: string;
	travellingBy: string;
	accommodation: string;
	image: string;
	startDate: Date;
	endDate: Date;
}

interface ILoginData {
	email: string;
	password: string;
}

interface IUser {
	userId: string;
	email: string;
	username: string;
	firstName: string;
	lastName: string;
	role: string;
	accessToken: string;
	refreshToken: string;
	authUserState: any;
}

interface IItinerary {
	id: number;
	name: string;
	date: Date;
	activities: IActivity[];
	trip: ITrip;
}

interface IActivity {
	id: number;
	name: string;
	done: boolean;
}

type ActivityPatchUpdate = {
	entityId: string;
	path: string;
	value: string;
	op: 'replace';
};

export {
	IUser,
	ILoginData,
	ITrip,
	AppRootStackParamList,
	AppScreenNavigationProp,
	IItinerary,
	IActivity,
	ActivityPatchUpdate,
};
