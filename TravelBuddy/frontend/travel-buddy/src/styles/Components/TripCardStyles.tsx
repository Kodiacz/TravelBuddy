import { StyleSheet, Dimensions } from 'react-native';
import * as Device from 'expo-device';
import { colors } from '../../utils/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const aspectRatio = windowWidth / windowHeight;

const calculateFlex = (
	baseFlex: number,
	aspectRatio: number,
	threshold: number,
) => {
	return baseFlex + (aspectRatio - threshold) * 0.1;
};

const flexRation = calculateFlex(0.798968357, aspectRatio, 0.01);

const style = StyleSheet.create({
	container: {
		backgroundColor: colors.primary.frostFairy,
		width: 359,
		padding: 0,
		paddingBottom: 15,
		marginTop: 0,
		marginBottom: 35,
		borderRadius: 12,
		alignSelf: 'center',
		flex: 1,
	},
	imageStyle: {
		width: '100%',
		borderRadius: 12,
		marginBottom: 21,
	},
	tripInfoContainer: {
		rowGap: 25,
	},
	textDescription: {
		borderStartEndRadius: 11.19,
		alignItems: 'flex-start',
		flex: flexRation,
		fontWeight: '800',
		fontSize: 16,
		lineHeight: 20.51,
		color: colors.primary.fibonacciBlue,
	},
	textValue: {
		fontWeight: '400',
		fontSize: 16,
		color: colors.primary.fibonacciBlue,
		flex: 1,
	},
	textContainer: {
		borderRadius: 11.19,
		backgroundColor: colors.white,
		width: 330,
		height: 41,
		flexDirection: 'row',
		alignItems: 'center',
		flex: 3,
		paddingLeft: 15,
		paddingRight: 15,
		marginLeft: 14,
	},
	buttonsContainer: {
		marginRight: 14,
		alignSelf: 'flex-end',
		width: 160,
		height: 45,
		flexDirection: 'row',
		backgroundColor: 'transparent',
		alignItems: 'center',
		alignContent: 'center',
		justifyContent: 'center',
		borderRadius: 12,
		borderColor: colors.primary.fibonacciBlue,
		borderWidth: 2.9,
		flex: 1,
	},
	middleButton: {
		display: 'flex',
		width: 160 / 3,
		height: 45,
		borderWidth: 2.9,
		marginLeft: '11%',
		marginRight: '11%',
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: colors.primary.fibonacciBlue,
	},
	middleIcon: {
		// flex: 1,
	},
	icon: {},
});

export { style };
console.log(160 / 3);
