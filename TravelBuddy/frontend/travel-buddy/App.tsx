import LandingScreen from './src/screens/Landing';
import RegisterScreen from './src/screens/authentication/Register';
import LoginScreen, { IUser } from './src/screens/authentication/Login';
import HomeScreen from './src/screens/Home';
import { AppState } from './src/redux/store';
import {
	incrementCount,
	decrementCount,
} from './src/redux/counter/CounterAction';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider, connect } from 'react-redux';
import { Dispatch } from 'redux';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/types/types';
import AuthProvider from 'react-auth-kit';
import createStore from 'react-auth-kit/createStore';

const authStore = createStore<IUser>({
	authName: '_auth',
	authType: 'cookie',
	cookieDomain: 'travel-buddy-domain',
	cookieSecure: true,
});

const Stack = createNativeStackNavigator<RootStackParamList>();

interface AppProps {
	increment: () => void;
	decrement: () => void;
}

const mapStateToProps = (state: AppState) => ({
	count: state.counterReducer.count,
});

const mapDispatchToProps = (dispatch: Dispatch): AppProps => ({
	increment: () => dispatch(incrementCount()),
	decrement: () => dispatch(decrementCount()),
});

export default function App() {
	return (
		<SafeAreaProvider>
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
								component={LandingScreen}
							/>
							<Stack.Screen
								name="Register"
								component={RegisterScreen}
							/>
							<Stack.Screen
								name="Login"
								component={LoginScreen}
							/>
							<Stack.Screen
								name="Home"
								component={HomeScreen}
							/>
						</Stack.Navigator>
					</NavigationContainer>
				</Provider>
			</AuthProvider>
		</SafeAreaProvider>
	);
}

connect(mapStateToProps, mapDispatchToProps)(App);
