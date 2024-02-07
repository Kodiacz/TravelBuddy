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
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { ILoginData, IUser } from '../../types/applicationDbTypes';
import AuthApiService from '../../utils/services/AuthApiService';
import { Button } from '@rneui/themed';
import { useState } from 'react';
import { styles } from '../../styles/Screens/LoginStyles';

const authApiService = new AuthApiService();

const pressable = () => <Pressable></Pressable>;

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
	const [loading, setLoading] = useState<boolean>(false);
	const [disabled, setDisabled] = useState<boolean>(false);

	const onSubmit = async (data: any) => {
		setLoading(true);
		setDisabled(true);

		const fetchedData = await authApiService.login(data);

		if (fetchedData.status == 200) {
			const user = fetchedData.data;
			if (
				signIn({
					auth: {
						token: user.accessToken,
						type: 'Bearer',
					},
					userState: user,
				})
			) {
				// Only if you are using refreshToken feature
				// Redirect or do-something
				setLoading(false);
				setDisabled(false);
				navigation.navigate('Main');
			}
		} else {
			console.error(fetchedData.status, fetchedData.data);
			setError('password', {
				message: (fetchedData.data as any).title,
				type: 'onBlur',
			});
		}
		setLoading(false);
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
						{/* <Pressable
							style={({ pressed }) => [
								styles.button,
								pressed && styles.buttonPressed,
							]}
							onPress={handleSubmit(onSubmit)}
						>
							<Text style={styles.buttonTetxt}>LOG IN</Text>
						</Pressable> */}
						<Button
							title="LOG IN"
							loading={loading}
							disabled={disabled}
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
