import React from 'react';
import { Button, Image, Pressable, Text, View, StyleSheet } from 'react-native';
import { AppState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCount, decrementCount } from '../redux/counter/CounterAction';
import { RootStackParamList } from '../types/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ILandingProps } from '../types/screens/landing';

export default function Landing({ navigation }: ILandingProps) {
	const count = useSelector((state: AppState) => state.counterReducer.count);
	const dispatch = useDispatch();

	const handleIncrement = () => {
		console.log('cliced increment');
		dispatch(incrementCount());
	};

	const handleDecrement = () => {
		console.log('cliced decrement');
		dispatch(decrementCount());
	};

	return (
		<View style={styles.container}>
			<View style={styles.middleContent}>
				<Image source={require('../assets/logos/backpack.png')} />
				<View style={styles.buttonsView}>
					<Pressable
						style={{ ...styles.button, ...styles.logInButton }}
						onPress={() => console.log('log in button clicked')}
					>
						<Text style={styles.text}>LOG IN</Text>
					</Pressable>
					<Pressable
						style={{ ...styles.button, ...styles.registerButton }}
						onPress={() => navigation.navigate('Register')}
					>
						<Text style={styles.text}>REGISTER</Text>
					</Pressable>
				</View>
			</View>
			<View style={styles.bottomContent}>
				<Text style={styles.termsAndConditionText}>Terms and Conditions</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		paddingVertical: 20,
	},
	middleContent: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	bottomContent: {
		alignSelf: 'center',
		marginBottom: 16,
	},
	button: {
		width: 202,
		height: 61,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 10,
		elevation: 3,
	},
	logInButton: {
		backgroundColor: '#0C2668',
	},
	registerButton: {
		backgroundColor: '#FF7B1B',
		marginTop: 12,
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'white',
	},
	buttonsView: {
		alignItems: 'center',
		marginTop: 16,
	},
	termsAndConditionText: {
		color: '#0C2668',
		fontWeight: '600',
		fontSize: 16,
		borderBottomColor: '#0C2668',
		borderBottomWidth: 1,
	},
});
