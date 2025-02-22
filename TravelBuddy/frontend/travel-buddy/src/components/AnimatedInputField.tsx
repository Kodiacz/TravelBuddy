import React, { useRef } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Animated,
	Easing,
	NativeSyntheticEvent,
	TextInputFocusEventData,
	KeyboardTypeOptions,
} from 'react-native';
import { Control } from 'react-hook-form';
import { colors } from '../utils/colors';
import InputField from './InputField';
import { InputFieldTypes } from '../types/applicationTypes';

type AnimatedInputFieldProps = {
	label: string;
	name: string;
	control: Control<any>;
	duration?: number;
	secureTextEntry?: boolean;
	keyboardType?: KeyboardTypeOptions;
	rules?: any;
	error?: string;
	inputFieldType?: InputFieldTypes;
};

const AnimatedInputField = ({
	label,
	name,
	control,
	duration = 300,
	secureTextEntry = false,
	keyboardType = 'default',
	rules,
	error,
	inputFieldType,
}: AnimatedInputFieldProps) => {
	const translateY = useRef(new Animated.Value(0));
	const borderWidth = useRef(new Animated.Value(0));

	const animateTransform = (toValue: number, refValue: Animated.Value) => {
		Animated.timing(refValue, {
			toValue,
			duration,
			useNativeDriver: true,
			easing: Easing.ease,
		}).start();
	};

	const animateBorderWidth = (toValue: number, refValue: Animated.Value) => {
		Animated.timing(refValue, {
			toValue,
			duration,
			useNativeDriver: false,
			easing: Easing.ease,
		}).start();
	};

	const handleFocus = () => {
		animateTransform(-42, translateY.current);
		animateBorderWidth(3, borderWidth.current);
	};

	const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
		const value = control._formValues[name]; // Get the current field value
		if (value) return;
		animateTransform(0, translateY.current);
		animateBorderWidth(0, borderWidth.current);
	};

	const translateX = translateY.current.interpolate({
		inputRange: [-42, 0],
		outputRange: [-12, 0],
		extrapolate: 'clamp',
	});

	const borderColor = borderWidth.current.interpolate({
		inputRange: [0, 2],
		outputRange: [colors.primary.skyBlue, colors.primary.fibonacciBlue],
		extrapolate: 'clamp',
	});

	const labelColor = borderWidth.current.interpolate({
		inputRange: [0, 2],
		outputRange: [colors.primary.orbital, colors.primary.fibonacciBlue],
		extrapolate: 'clamp',
	});

	return (
		<Animated.View
			style={[
				styles.container,
				{
					borderWidth: borderWidth.current,
					borderColor,
				},
			]}
		>
			<Animated.View
				style={[
					styles.labelContainer,
					{
						transform: [{ translateY: translateY.current }, { translateX }],
					},
				]}
			>
				<Animated.Text style={[styles.label, { color: labelColor }]}>
					{label}
				</Animated.Text>
			</Animated.View>
			<InputField
				name={name}
				control={control}
				placeholder={label}
				secureTextEntry={secureTextEntry}
				keyboardType={keyboardType}
				rules={rules}
				error={error}
				inputFieldType={inputFieldType}
				textInputStyle={styles.textInput}
				labelTextStyle={styles.label}
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		borderRadius: 10,
		width: 'auto',
		margin: 12,
		justifyContent: 'center',
	},
	labelContainer: {
		position: 'absolute',
		padding: 20,
	},
	textInput: {
		padding: 20,
		backgroundColor: 'transparent',
	},
	label: {},
});

export default AnimatedInputField;
