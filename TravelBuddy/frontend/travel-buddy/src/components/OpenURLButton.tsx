import React, { useCallback, ReactNode } from 'react';
import {
	Linking,
	Alert,
	TouchableOpacity,
	GestureResponderEvent,
	View,
} from 'react-native';
import { IOpenURLButtonProps } from '../types/propTypes';

const OpenURLButton = <T extends React.ComponentType<any>>({
	url,
	children,
}: IOpenURLButtonProps<T>) => {
	const handlePress = useCallback(async () => {
		const supported = await Linking.canOpenURL(url);

		if (supported) {
			await Linking.openURL(url);
		} else {
			Alert.alert(`Don't know how to open this URL: ${url}`);
		}
	}, [url]);

	if (typeof children === 'function') {
		return (children as (onPress: () => void) => ReactNode)(handlePress);
	}

	if (React.isValidElement(children)) {
		return React.cloneElement(
			children as React.ReactElement<{ onPress: () => void }>,
			{ onPress: handlePress },
		);
	}

	return <TouchableOpacity onPress={handlePress}>{children}</TouchableOpacity>;
};

export default OpenURLButton;
