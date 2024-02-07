import {
	incrementCount,
	decrementCount,
} from './src/redux/counter/CounterAction';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider, connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState, store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IUser, RootStackParamList } from './src/types/applicationDbTypes';
import AuthProvider from 'react-auth-kit';
import createStore from 'react-auth-kit/createStore';

import { decode, encode } from 'base-64';
import { StatusBar } from 'react-native';
import Landing from './src/screens/Landing';
import Register from './src/screens/authentication/Register';
import Login from './src/screens/authentication/Login';
import Main from './src/screens/Main';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { IAppProps } from './src/types/propTypes';

// Fix for 'atob' is not defined error in React Native
if (!global.btoa) {
	global.btoa = encode;
}

if (!global.atob) {
	global.atob = decode;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const authStore = createStore<IUser>({
	authName: '_auth',
	authType: 'cookie',
	cookieDomain: 'travel-buddy-domain',
	cookieSecure: true,
});

const mapStateToProps = (state: AppState) => ({
	count: state.counterReducer.count,
	ps: state.tripReducer,
});

const mapDispatchToProps = (dispatch: Dispatch): IAppProps => ({
	increment: () => dispatch(incrementCount()),
	decrement: () => dispatch(decrementCount()),
});

export default function App() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<SafeAreaProvider>
				<StatusBar
					animated={true}
					barStyle="default"
					hidden={false}
				/>
				<AuthProvider store={authStore}>
					<Provider store={store}>
						<NavigationContainer>
							<Stack.Navigator
								initialRouteName="Landing"
								screenOptions={{
									header: () => null,
								}}
							>
								<Stack.Screen
									name="Landing"
									component={Landing}
								/>
								<Stack.Screen
									name="Register"
									component={Register}
								/>
								<Stack.Screen
									name="Login"
									component={Login}
								/>
								<Stack.Screen
									name="Main"
									component={Main}
								/>
							</Stack.Navigator>
						</NavigationContainer>
					</Provider>
				</AuthProvider>
			</SafeAreaProvider>
		</GestureHandlerRootView>
	);
}

connect(mapStateToProps, mapDispatchToProps)(App);
