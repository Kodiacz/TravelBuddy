import React from 'react';
import { useState } from 'react';
import {
	Pressable,
	StyleSheet,
	Text,
	View,
	KeyboardAvoidingView,
	Platform,
} from 'react-native';
import { IRegisterProps } from '../../types/screens/register';
import useSafeArea from '../../custom-hooks/useSafeView';
import { useForm } from 'react-hook-form';
import InputField from '../../components/InputField';
import { colors } from '../../utils/colors';
import { Dimensions } from 'react-native';
import { IRegisterData } from '../../types/propTypes';

const screenWidth = Dimensions.get('window').width;

export default function Register({ navigation }: IRegisterProps) {
	const { safeArea } = useSafeArea();
	const [user, setUser] = useState<IRegisterData>();
	const {
		control,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm<IRegisterData>();
	const viewContainerStyle = { ...safeArea, ...styles.container };

	const passwordMatchValidation = (value: string, values: IRegisterData) => {
		const confirmPassword = values.confirmPassword;
		return confirmPassword === value || 'Passwords do not match';
	};

	const onSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={{ flex: 1 }}
		>
			<View style={viewContainerStyle}>
				<View style={styles.inputsContainer}>
					<InputField
						control={control}
						placeholder="First Name"
						placeholderTextColor={colors.primary.fibonacciBlue}
						name="firstName"
						textInputStyle={
							errors.firstName
								? { ...styles.inputField, ...styles.inputFieldRedBoreder }
								: styles.inputField
						}
						errorTextStyle={styles.errorText}
						rules={{ required: 'First Name is required' }}
						error={errors.firstName?.message?.toString()}
					/>
					<InputField
						control={control}
						name="lastName"
						placeholder="Last Name"
						placeholderTextColor={colors.primary.fibonacciBlue}
						textInputStyle={
							errors.lastName
								? { ...styles.inputField, ...styles.inputFieldRedBoreder }
								: styles.inputField
						}
						errorTextStyle={styles.errorText}
						rules={{ required: 'Last Name is required' }}
						error={errors.lastName?.message?.toString()}
					/>
					<InputField
						control={control}
						name="email"
						placeholder="Email"
						keyboardType="email-address"
						inputFieldType="emailAddress"
						placeholderTextColor={colors.primary.fibonacciBlue}
						textInputStyle={
							errors.email
								? { ...styles.inputField, ...styles.inputFieldRedBoreder }
								: styles.inputField
						}
						errorTextStyle={styles.errorText}
						rules={{
							required: 'Email is required',
						}}
						error={errors.email?.message?.toString()}
					/>
					<InputField
						control={control}
						name="password"
						placeholder="Password"
						secureTextEntry={true}
						placeholderTextColor={colors.primary.fibonacciBlue}
						inputFieldType="password"
						textInputStyle={
							errors.password
								? { ...styles.inputField, ...styles.inputFieldRedBoreder }
								: styles.inputField
						}
						errorTextStyle={styles.errorText}
						rules={{
							required: 'Password is required',
							validate: (value) => passwordMatchValidation(value, getValues()),
						}}
						error={errors.password?.message?.toString()}
					/>
					<InputField
						control={control}
						secureTextEntry={true}
						name="confirmPassword"
						placeholder="Confirm Password"
						inputFieldType="password"
						placeholderTextColor={colors.primary.fibonacciBlue}
						textInputStyle={
							errors.confirmPassword
								? [styles.inputField, styles.inputFieldRedBoreder]
								: styles.inputField
						}
						errorTextStyle={styles.errorText}
						rules={{
							required: 'Confirm Password is required',
							validate: (value) => passwordMatchValidation(value, getValues()),
						}}
						error={errors.confirmPassword?.message?.toString()}
					/>
					<View style={styles.buttonsContainer}>
						<Pressable
							// style={styles.button}
							style={({ pressed }) => [
								styles.button,
								pressed && styles.buttonPressed,
							]}
							onPress={handleSubmit(onSubmit)}
						>
							<Text style={styles.buttonTetxt}>REGISTER</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</KeyboardAvoidingView>
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
		width: screenWidth * 0.9,
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
	inputField: {
		width: 'auto',
		height: 41.51,
		borderRadius: 11.19,
		backgroundColor: '#FFFFFF',
		margin: 12,
		color: '#0C2668',
		fontWeight: '700',
		fontSize: 17,
		letterSpacing: -0.4,
		lineHeight: 22,
		padding: 0,
		paddingLeft: 14.92,
	},
	errorText: {
		color: colors.error,
		paddingLeft: 14.92,
	},
	inputFieldRedBoreder: {
		borderColor: colors.error,
		borderWidth: 1,
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
	buttonPressed: {
		backgroundColor: '#4071C1', // Change to a different color or add any other styles
	},
	buttonTetxt: {
		color: '#FFFFFF',
		textAlign: 'center',
	},
});
