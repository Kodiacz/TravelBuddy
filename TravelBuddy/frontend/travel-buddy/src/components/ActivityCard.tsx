import { Text } from '@rneui/themed';
import React, { cloneElement, useState } from 'react';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { AppState, Image, StyleSheet, View } from 'react-native';
import { IActivityProps, IItineraryCardProps } from '../types/propTypes';
import { FlatList } from 'react-native-gesture-handler';
import { CheckBox } from '@rneui/base';
import { colors } from '../utils/colors';
import { IActivity } from '../types/applicationTypes';
import { useAppDispatch } from '../redux/store';
import { toggleActivityDone } from '../redux/itinerary/itinerarySlice';

const ActivityCard = ({ activity, itineraryId }: IActivityProps) => {
	const dispatch = useAppDispatch();

	const handleToggleActivity = () => {
		dispatch(toggleActivityDone({ itineraryId, activityName: activity.name }));
	};

	return (
		<View style={{ ...styles.activitiesContainer }}>
			<Text style={styles.activityTextStyle}>{activity.name}</Text>
			<CheckBox
				containerStyle={styles.checkBoxContainer}
				checked={activity.done}
				onPress={handleToggleActivity}
				size={hp('3%')}
				style={styles.checkBox}
				uncheckedColor={colors.primary.fibonacciBlue}
				checkedColor={colors.primary.fibonacciBlue}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: wp('50%'),
		borderWidth: 1,
		borderColor: 'red',
		justifyContent: 'flex-start',
		alignSelf: 'center',
		marginBottom: 20,
		backgroundColor: colors.white,
		// paddingHorizontal: 20,
		paddingTop: 10,
		borderRadius: 12.5,
		marginTop: '-2%',
	},
	activitiesContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingVertical: '2%',
		paddingHorizontal: wp('5%'),
		backgroundColor: colors.white,
	},
	activityTextStyle: {
		color: colors.primary.dutchBlue,
		fontWeight: '600',
		fontSize: hp('2.5%'),
		letterSpacing: -0.42,
		// marginLeft: '3%',
	},
	checkBoxContainer: {
		// borderWidth: 1,
		// borderColor: 'red',
		// width: '3.5%',
		// height: '2%',
		padding: 0,
		margin: 0,
		marginRight: 0,
		paddingRight: 0,
		backgroundColor: colors.transparent,
	},
	checkBox: {
		color: colors.primary.fibonacciBlue,
		alignSelf: 'center',
	},
});

export default ActivityCard;
