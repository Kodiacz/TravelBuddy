import { Text } from '@rneui/themed';
import { Pressable, View } from 'react-native';
import { styles } from '../styles/Components/ScreenHeaderStyles';
import { IScreenHeaderProps } from '../types/propTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppNavigation } from '../custom-hooks/useAppNavigation';

const ScreenHeader = ({
	imageContainerStyle,
	textContainerStyle,
	lableStyle,
	image,
	labelText,
}: IScreenHeaderProps) => {
	const navigation = useAppNavigation();

	const handlePress = async () => {
		await AsyncStorage.clear();
		navigation.navigate('Landing');
	};

	return (
		<>
			<Pressable onPress={handlePress}>
				<View style={imageContainerStyle ?? styles.imageContainer}>
					{image}
				</View>
				<View style={textContainerStyle ?? styles.textContainer}>
					<Text style={lableStyle ?? styles.labelTextStyle}>{labelText}</Text>
				</View>
			</Pressable>
		</>
	);
};

export default ScreenHeader;
