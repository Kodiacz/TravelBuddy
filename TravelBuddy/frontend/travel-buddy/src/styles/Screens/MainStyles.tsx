import { Dimensions, StyleSheet } from 'react-native';
import { Platform } from 'react-native';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colors } from '../../utils/colors';
import usePlatformStyles from '../../custom-hooks/usePlatformStyles';
const screenWidth = Dimensions.get('window').width;
const { getResponsive } = usePlatformStyles();
const tabBarHeight = getResponsive({
	property: 'height',
	iosValue: '11%',
	androidValue: '10%',
});
export const styles = StyleSheet.create({
	tabBar: {
		backgroundColor: colors.primary.fibonacciBlue,
		// borderTopRightRadius: 12,
		// borderTopStartRadius: 12,
		// height: Platform.OS === 'ios' ? hp('11%') : hp('8%'),
		height: tabBarHeight,
		// height: hp('10%'),
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
