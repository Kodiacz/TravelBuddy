import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
	// containers
	container: {
		flex: 1,
		justifyContent: 'center',
		alignSelf: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
	inputsContainer: {
		width: screenWidth * 0.9,
		paddingTop: 24,
		paddingRight: 16,
		paddingLeft: 16,
		backgroundColor: '#D5D8EA',
		borderRadius: 12,
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	inputField: {
		width: 'auto',
		height: 41.51,
		borderRadius: 11.19,
		backgroundColor: '#FFFFFF',
		margin: 12,
		color: '#0C2668',
		fontWeight: '700',
		fontSize: 17,
		letterSpacing: -0.4,
		lineHeight: 22,
		padding: 0,
		paddingLeft: 14.92,
	},
	errorText: {
		color: colors.error,
		paddingLeft: 14.92,
	},
	inputFieldRedBoreder: {
		borderColor: colors.error,
		borderWidth: 1,
	},
	button: {
		width: 100,
		height: 50,
		borderRadius: 12,
		paddingTop: 14,
		paddingRight: 20,
		paddingBottom: 14,
		paddingLeft: 20,
		marginBottom: 10,
		marginTop: 12,
		marginRight: 8,
		// backgroundColor: '#0C2668',
		backgroundColor: colors.primary.fibonacciBlue,
	},
	buttonDisabled: {
		backgroundColor: colors.primary.lambentLagoon,
	},
	buttonPressed: {
		backgroundColor: 'red', // Change to a different color or add any other styles
	},
	buttonTetxt: {
		color: '#FFFFFF',
		textAlign: 'center',
	},
});
