type RootStackParamList = {
	Landing: undefined;
	Register: undefined;
	Login: undefined;
	Home: undefined;
	Main: undefined;
};

interface ITrip {
	id: number;
	name: string;
	creator: string;
	travellingBy: string;
	accommodation: string;
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
}

interface IActivity {
	name: string;
}

export { IUser, ILoginData, ITrip, RootStackParamList, IItinerary, IActivity };
