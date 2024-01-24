import React from 'react';
import {
	Control,
	Controller,
	FieldErrors,
	FieldValues,
	RegisterOptions,
} from 'react-hook-form';
import {
	KeyboardTypeOptions,
	StyleProp,
	Text,
	TextInput,
	TextStyle,
} from 'react-native';

type RulesType =
	| Omit<
			RegisterOptions<FieldValues, string>,
			'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
	  >
	| undefined;

type InputFieldTypes =
	| 'none'
	| 'URL'
	| 'addressCity'
	| 'addressCityAndState'
	| 'addressState'
	| 'countryName'
	| 'creditCardNumber'
	| 'emailAddress'
	| 'familyName'
	| 'fullStreetAddress'
	| 'givenName'
	| 'jobTitle'
	| 'location'
	| 'middleName'
	| 'name'
	| 'namePrefix'
	| 'nameSuffix'
	| 'nickname'
	| 'organizationName'
	| 'postalCode'
	| 'streetAddressLine1'
	| 'streetAddressLine2'
	| 'sublocality'
	| 'telephoneNumber'
	| 'username'
	| 'password'
	| 'newPassword'
	| 'oneTimeCode';

interface IInputField {
	name: string;
	placeholder?: string;
	placeholderTextColor?: string;
	control: any;
	textInputStyle?: StyleProp<TextStyle>;
	inputFieldType?: InputFieldTypes;
	errorTextStyle?: StyleProp<TextStyle>;
	rules?: RulesType;
	error?: string | undefined;
	secureTextEntry?: boolean;
	keyboardType?: KeyboardTypeOptions;
	clearInputField?: () => void;
}

export default function InputField({
	name,
	placeholder,
	placeholderTextColor,
	control,
	textInputStyle,
	inputFieldType = undefined,
	errorTextStyle,
	rules,
	error,
	secureTextEntry,
	keyboardType,
}: IInputField) {
	return (
		<Controller
			control={control}
			name={name}
			defaultValue=""
			rules={rules}
			render={({ field }) => (
				<>
					<TextInput
						secureTextEntry={secureTextEntry}
						textContentType={inputFieldType}
						keyboardType={keyboardType}
						underlineColorAndroid="transparent"
						style={textInputStyle}
						placeholder={placeholder}
						placeholderTextColor={placeholderTextColor}
						onChangeText={(text) => field.onChange(text)}
						value={field.value}
					/>
					{error && <Text style={errorTextStyle}>{error}</Text>}
				</>
			)}
		/>
	);
}
