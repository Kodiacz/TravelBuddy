import {
	Dimensions,
	Image,
	Pressable,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import React from 'react';
import { colors } from '../utils/colors';
import { IEditTripCard, ITripCardProps } from '../types/propTypes';
import { Card, Dialog } from '@rneui/base';
import OpenURLButton from './OpenURLButton';

type Props = {};

const EditTripCard = ({
	trip,
	dialogVisible,
	setDialogVisible,
}: IEditTripCard) => {
	const startAndEndDate = `${new Date(
		trip.startDate,
	).toLocaleDateString()} - ${new Date(trip.endDate).toLocaleDateString()}`;
	return (
		<Dialog
			isVisible={dialogVisible}
			overlayStyle={{
				height: 500,
			}}
		>
			<Card containerStyle={styles.container}>
				<Image
					style={styles.imageStyle}
					source={
						trip.image
							? { uri: trip.image }
							: require('../assets/icons/sunset.png')
					}
				/>
				<View style={styles.tripInfoContainer}>
					<View style={styles.textContainer}>
						<Text style={styles.textDescription}>Destination</Text>
						<Text style={styles.textValue}>{trip.name}</Text>
					</View>
					<View style={styles.textContainer}>
						<Text style={styles.textDescription}>Dates</Text>
						<Text style={styles.textValue}>{startAndEndDate}</Text>
					</View>
					<View style={styles.textContainer}>
						<Text style={styles.textDescription}>Travelling by</Text>
						<Text style={styles.textValue}>{trip.travellingBy}</Text>
					</View>
					<View style={styles.textContainer}>
						<Text style={styles.textDescription}>Accommodation</Text>
						<OpenURLButton url={trip.accommodation}>
							<Text style={styles.textValue}>Link</Text>
						</OpenURLButton>
					</View>
					<View style={styles.buttonsContainer}>
						<Pressable
						// onPress={handleShare}
						>
							<Image
								style={styles.icon}
								source={require('../assets/icons/share-icon.png')}
							/>
						</Pressable>
						<Pressable
							style={styles.middleButton}
							// onPress={handleEdit}
						>
							<Image
								style={styles.icon}
								source={require('../assets/icons/pen-edit.png')}
							/>
						</Pressable>
						<Pressable
						//  onPress={handleAttachFile}
						>
							<Image
								style={styles.icon}
								source={require('../assets/icons/file-icon.png')}
							/>
						</Pressable>
					</View>
				</View>
			</Card>
		</Dialog>
	);
};

export default EditTripCard;

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

const styles = StyleSheet.create({
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
		height: 160,
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
