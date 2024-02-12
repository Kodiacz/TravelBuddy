import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { persistedStore, reduxStore } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IUser, AppRootStackParamList } from './src/types/applicationTypes';
import AuthProvider from 'react-auth-kit';
import createStore from 'react-auth-kit/createStore';

import { decode, encode } from 'base-64';
import { StatusBar } from 'react-native';
import Landing from './src/screens/Landing';
import Register from './src/screens/authentication/Register';
import Login from './src/screens/authentication/Login';
import Main from './src/screens/Main';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PersistGate } from 'redux-persist/integration/react';

// Fix for 'atob' is not defined error in React Native
if (!global.btoa) {
	global.btoa = encode;
}

if (!global.atob) {
	global.atob = decode;
}

const Stack = createNativeStackNavigator<AppRootStackParamList>();

const authStore = createStore<IUser>({
	authName: '_auth',
	authType: 'cookie',
	cookieDomain: 'travel-buddy-domain',
	cookieSecure: true,
});

export default function App() {
	const [initialScreen, setInitialScreen] = useState<'Main' | 'Landing'>(
		'Landing',
	);

	useEffect(() => {
		const getUserInfo = async () => {
			try {
				const user = await AsyncStorage.getItem('persist:user').then((x) =>
					JSON.parse(x!),
				);

				if (user.data) {
					setInitialScreen('Main');
				} else {
					setInitialScreen('Landing');
				}
			} catch (error) {
				setInitialScreen('Landing');
			}
		};

		getUserInfo();
	}, []);

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<SafeAreaProvider>
				<StatusBar
					animated={true}
					barStyle="default"
					hidden={false}
				/>
				<AuthProvider store={authStore}>
					<Provider store={reduxStore}>
						<PersistGate
							loading={null}
							persistor={persistedStore}
						>
							<NavigationContainer>
								<Stack.Navigator
									initialRouteName={initialScreen}
									screenOptions={{
										header: () => null,
										gestureEnabled: true,
										animation: 'fade_from_bottom',
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
						</PersistGate>
					</Provider>
				</AuthProvider>
			</SafeAreaProvider>
		</GestureHandlerRootView>
	);
}
