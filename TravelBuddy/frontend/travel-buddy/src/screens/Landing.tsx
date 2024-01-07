import React from 'react';
import { Button, Image, Pressable, Text, View, StyleSheet } from 'react-native';
import { AppState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCount, decrementCount } from '../redux/counter/CounterAction';
import { RootStackParamList } from '../types/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ILandingProps } from '../types/screens/landing';
import { colors } from '../utils/colors';

export default function Landing({ navigation }: ILandingProps) {
	return (
		<View style={styles.container}>
			<View style={styles.middleContent}>
				<Image source={require('../assets/logos/backpack.png')} />
				<View style={styles.buttonsView}>
					<Pressable
						style={({ pressed }) => [
							styles.button,
							styles.logInButton,
							pressed && styles.logInButtonPressed,
						]}
						onPress={() => navigation.navigate('Login')}
					>
						<Text style={styles.text}>LOG IN</Text>
					</Pressable>
					<Pressable
						style={({ pressed }) => [
							styles.button,
							styles.registerButton,
							pressed && styles.registerButtonPressed,
						]}
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
		backgroundColor: colors.primary.fibonacciBlue,
	},
	logInButtonPressed: {
		backgroundColor: colors.primary.skyBlue,
	},
	registerButton: {
		backgroundColor: colors.accent.pumpking,
		marginTop: 12,
	},
	registerButtonPressed: {
		backgroundColor: colors.accent.karry,
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
