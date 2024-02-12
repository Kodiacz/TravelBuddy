import { Skeleton } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';
// import { style } from '../../styles/Components/TripCardStyles';

const TripCardSkeleton = () => {
	return (
		<View style={styles.mainContainer}>
			<Skeleton
				animation="wave"
				width={359}
				height={149}
			/>
			<View style={styles.inputFieldsVontainer}>
				<Skeleton
					// LinearGradientComponent={LinearGradient}
					animation="wave"
					width={330}
					height={41}
				/>
				<Skeleton
					// LinearGradientComponent={LinearGradient}
					animation="wave"
					width={330}
					height={41}
				/>
				<Skeleton
					// LinearGradientComponent={LinearGradient}
					animation="wave"
					width={330}
					height={41}
				/>
				<Skeleton
					// LinearGradientComponent={LinearGradient}
					animation="wave"
					width={330}
					height={41}
				/>
				<Skeleton
					// LinearGradientComponent={LinearGradient}
					animation="wave"
					width={159}
					height={40}
					style={{ alignSelf: 'flex-end', marginRight: '4.2%' }}
				/>
			</View>
		</View>
	);
};

export default TripCardSkeleton;

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: 'red',
		maxHeight: 451,
		width: 359,
		alignSelf: 'center',
		flex: 1,
		flexDirection: 'column',
	},
	inputFieldsVontainer: {
		alignItems: 'center',
		paddingTop: 30,
		gap: 15,
	},
});
