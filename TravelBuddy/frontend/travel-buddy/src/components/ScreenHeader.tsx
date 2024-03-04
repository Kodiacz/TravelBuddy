import { Text } from '@rneui/themed';
import { Pressable, View } from 'react-native';
import { styles } from '../styles/Components/ScreenHeaderStyles';
import { IScreenHeaderProps } from '../types/propTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppNavigation } from '../custom-hooks/useAppNavigation';
import { Image } from 'react-native';
import { useState } from 'react';
import LogOutDialog from './LogOutDialog';

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

	const defaultImage = (
		<Image source={require('../assets/account/my-account.png')} />
	);

	return (
		<>
			<Pressable onPress={setVisible}>
				<View style={imageContainerStyle ?? styles.imageContainer}>
					{image ?? defaultImage}
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
