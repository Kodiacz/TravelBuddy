import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
	imageContainer: {
		alignItems: 'flex-end',
	},
	upcomingTrips: {
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
