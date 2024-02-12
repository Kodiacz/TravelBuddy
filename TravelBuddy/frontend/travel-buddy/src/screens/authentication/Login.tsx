import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { IRegisterProps } from '../../types/screens/register';
import useSafeArea from '../../custom-hooks/useSafeView';
import { useForm } from 'react-hook-form';
import InputField from '../../components/InputField';
import { colors } from '../../utils/colors';
import { Dimensions } from 'react-native';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { ILoginData, IUser } from '../../types/applicationTypes';
import AuthApiService from '../../utils/services/AuthApiService';
import { Button } from '@rneui/themed';
import { useState } from 'react';
import { styles } from '../../styles/Screens/LoginStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ILoginData {
	email: string;
	password: string;
}

export interface IUser {
	email: string;
	username: string;
	firstName: string;
	lastName: string;
	role: string;
	accessToken: string;
	refreshToken: string;
	authUserState: any;
}

const screenWidth = Dimensions.get('window').width;

export default function Login({ navigation }: IRegisterProps) {
	const { safeArea } = useSafeArea();
	const [user, setUser] = useState<ILoginData>();
	const signIn = useSignIn();
	const {
		control,
		handleSubmit,
		formState: { errors },
		getValues,
		reset,
	} = useForm<ILoginData>();
	const viewContainerStyle = { ...safeArea, ...styles.container };
	const [disabled, setDisabled] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	const {
		data: user,
		loading,
		error,
	} = useSelector((state: AppReducers) => state.userReducer);
	const onSubmit = async (data: any) => {
		console.log('inside onSubmit');
		setDisabled(true);

		await dispatch(getUser(data));

		if (!loading) {
			setDisabled(false);
		}

		console.log('onSubmit => user', user);

		if (user?.accessToken) {
			console.log(
				'inside if statement => user?.accessToken',
				user?.accessToken,
			);
			await AsyncStorage.setItem('isLogedIn', JSON.stringify(true));
			navigation.navigate('Main');
		} else {
			// reset();
			setError('password', {
				message: (user as any)?.title,
				type: 'onBlur',
			});
		}

		setDisabled(false);
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
						}}
						error={errors.password?.message?.toString()}
					/>
					<View style={styles.buttonsContainer}>
						<Button
							title="LOG IN"
							// loading={loading}
							// disabled={disabled}
							disabledStyle={{ ...styles.button, ...styles.buttonDisabled }}
							loadingProps={{
								size: 'small',
								color: 'rgba(111, 202, 186, 1)',
								animating: true,
							}}
							onPress={handleSubmit(onSubmit)}
						>
							<Text style={styles.buttonTetxt}>LOG IN</Text>
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
