import React, { ChangeEvent, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { IRegisterProps } from '../../types/screens/register';
import useSafeArea from '../../custom-hooks/useSafeView';
import { useForm, Controller } from 'react-hook-form';

interface IRegisterData {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

type inputFieldName =
	| 'firstName'
	| 'lastName'
	| 'email'
	| 'password'
	| 'confirmPassword';

export default function Register({ navigation }: IRegisterProps) {
	const { safeArea } = useSafeArea();
	const [user, setUser] = useState<IRegisterData>();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const viewContainerStyle = { ...safeArea, ...styles.container };

	const handleInput = (input: string, fieldName: inputFieldName) => {
		console.log('prev state => ', user);
		setUser((prev) => {
			return { ...prev!, [fieldName]: input };
		});

		console.log('new state => ', user);
	};

	return (
		<View style={viewContainerStyle}>
			<View style={styles.inputsContainer}>
				<Controller
					control={control}
					name="username"
					defaultValue=""
					rules={{
						required: { value: true, message: "Nom d'utilisateur nécessaire" },
					}}
					render={({ field: { onChange, value } }) => (
						<>
							<TextInput
								underlineColorAndroid="transparent"
								style={styles.inputField}
								placeholder="First Name"
								placeholderTextColor="#0C2668"
								onChangeText={(text) => handleInput(text, 'firstName')}
							/>
							<TextInput
								underlineColorAndroid="transparent"
								style={styles.inputField}
								placeholder="Last Name"
								placeholderTextColor="#0C2668"
								onChangeText={(text) => handleInput(text, 'lastName')}
							/>
							<TextInput
								underlineColorAndroid={'transparent'}
								style={styles.inputField}
								placeholder="Email"
								placeholderTextColor="#0C2668"
								onChangeText={(text) => handleInput(text, 'email')}
							/>
							<TextInput
								underlineColorAndroid="transparent"
								style={styles.inputField}
								placeholder="Password"
								placeholderTextColor="#0C2668"
								onChangeText={(text) => handleInput(text, 'password')}
							/>
							<TextInput
								underlineColorAndroid="transparent"
								style={styles.inputField}
								placeholder="Confirm Password"
								placeholderTextColor="#0C2668"
								onChangeText={(text) => handleInput(text, 'confirmPassword')}
							/>
						</>
					)}
				/>
				<View style={styles.buttonsContainer}>
					<Pressable style={styles.button}>
						<Text style={styles.buttonTetxt}>REGISTER</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	// containers
	container: {
		flex: 1,
		width: 359,
		height: 451,
		justifyContent: 'center',
		alignSelf: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
	inputsContainer: {
		paddingTop: 24,
		paddingRight: 16,
		paddingLeft: 16,
		backgroundColor: '#D5D8EA',
		borderRadius: 12,
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	// input field
	inputField: {
		width: 330,
		height: 41.51,
		borderRadius: 11.19,
		backgroundColor: '#FFFFFF',
		margin: 12,
		color: '#0C2668',
		fontWeight: '700',
		fontSize: 17,
		letterSpacing: -0.4,
		lineHeight: 22,
		borderBottomWidth: 0,
		padding: 0,
		paddingLeft: 14.92,
	},
	button: {
		width: 'auto',
		height: 50,
		borderRadius: 12,
		paddingTop: 14,
		paddingRight: 20,
		paddingBottom: 14,
		paddingLeft: 20,
		marginBottom: 10,
		marginTop: 12,
		marginRight: 8,
		backgroundColor: '#0C2668',
	},
	buttonTetxt: {
		color: '#FFFFFF',
		textAlign: 'center',
	},
});
