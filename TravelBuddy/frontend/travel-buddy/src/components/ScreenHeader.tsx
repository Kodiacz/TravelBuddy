import React, { useState } from 'react';
import { Text } from '@rneui/themed';
import { Pressable, StyleSheet, View } from 'react-native';
import { styles } from '../styles/Components/ScreenHeaderStyles';
import { IScreenHeaderProps } from '../types/propTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppNavigation } from '../custom-hooks/useAppNavigation';
import { Image } from 'react-native';
import LogOutDialog from './LogOutDialog';
import { IUser } from '../types/applicationTypes';
import { AppReducers } from '../redux/store';
import { useSelector } from 'react-redux';

const ScreenHeader = ({
	imageContainerStyle,
	textContainerStyle,
	lableStyle,
	image,
	labelText,
}: IScreenHeaderProps) => {
	const navigation = useAppNavigation();
	const [dialogVisible, setDialogVisible] = useState<boolean>(false);
	const handleLogOut = async () => {
		setVisible();
		await AsyncStorage.clear();
		navigation.navigate('Landing');
	};

	const setVisible = () => {
		setDialogVisible((prev) => !prev);
	};
	const user = useSelector(
		(state: AppReducers) => state.userReducer.data,
	) as IUser | null;

	const defaultImage = image ? (
		<Image
			source={{ uri: user.profileImage }}
			style={styles.imageStyle}
		/>
	) : (
		<Image source={require('../assets/account/my-account.png')} />
	);

	return (
		<>
			<Pressable onPress={setVisible}>
				<View style={imageContainerStyle ?? styles.imageContainer}>
					{defaultImage}
				</View>
				<View style={textContainerStyle ?? styles.textContainer}>
					<Text style={lableStyle ?? styles.labelTextStyle}>{labelText}</Text>
				</View>
			</Pressable>
			<LogOutDialog
				visible={dialogVisible}
				setVisible={setVisible}
				handleLogOut={handleLogOut}
			/>
		</>
	);
};

export default ScreenHeader;
