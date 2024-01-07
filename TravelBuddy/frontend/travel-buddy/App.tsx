import LandingScreen from './src/screens/Landing';
import RegisterScreen from './src/screens/authentication/Register';
import LoginScreen from './src/screens/authentication/Login';
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
					</Stack.Navigator>
				</NavigationContainer>
			</Provider>
		</SafeAreaProvider>
	);
}

connect(mapStateToProps, mapDispatchToProps)(App);
