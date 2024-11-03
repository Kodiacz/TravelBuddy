import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	imageContainer: {
		alignItems: 'flex-end',
	},
	imageStyle: {
		width: hp('10'),
		height: hp('10'),
		borderRadius: hp('50%'),
	},
	labelTextStyle: {
		marginBottom: 23,
		fontWeight: '800',
		fontSize: 16,
		letterSpacing: 0.32,
		color: colors.primary.fibonacciBlue,
	},
	textContainer: {
		alignItems: 'center',
	},
});

export { styles };
