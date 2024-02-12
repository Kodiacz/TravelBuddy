import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { IRegisterProps } from '../../types/screens/register';
import useSafeArea from '../../custom-hooks/useSafeView';
import { useForm } from 'react-hook-form';
import InputField from '../../components/InputField';
import { colors } from '../../utils/colors';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { ILoginData, IUser } from '../../types/applicationTypes';
import AuthApiService from '../../utils/services/AuthApiService';
import { Button } from '@rneui/themed';
import { useState } from 'react';
import { styles } from '../../styles/Screens/LoginStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
	TypedUseSelectorHook,
	useSelector as useReduxSelector,
} from 'react-redux';
import { AppReducers, useAppDispatch } from '../../redux/store';
import { getUser } from '../../redux/user/userSlice';
import { useSelector } from 'react-redux';

export default function Login({ navigation }: IRegisterProps) {
	const { safeArea } = useSafeArea();
	const signIn = useSignIn();
	const {
		control,
		handleSubmit,
		formState: { errors },
		setError,
		getValues,
		reset,
	} = useForm<ILoginData>({ shouldUnregister: true });
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
							titleStyle={styles.buttonTetxt}
							buttonStyle={styles.button}
							containerStyle={styles.buttonsContainer}
						/>
					</View>
				</View>
			</View>
		</KeyboardAvoidingView>
	);
}
