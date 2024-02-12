import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
	tabBar: {
		backgroundColor: colors.primary.fibonacciBlue,
		borderTopRightRadius: 12,
		borderTopStartRadius: 12,
		// height: `${tabBarHeightPercentage}%`,
		// height: Math.max(tabBarHeight, insets.bottom),
		// bottom: 30,
		// height: 60,
	},
	tabBarIcon: {
		// tintColor: 'white',
		backgroundColor: colors.transparent,
	},
});
