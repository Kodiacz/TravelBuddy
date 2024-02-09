import { Text } from '@rneui/themed';
import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { IActivityProps, IItineraryCardProps } from '../types/propTypes';
import { FlatList } from 'react-native-gesture-handler';
import { CheckBox } from '@rneui/base';
import { colors } from '../utils/colors';
import { IActivity } from '../types/applicationDbTypes';

const ActivityCard = ({ activity }: IActivityProps) => {
	const [checked, setChecked] = useState(false);

	return (
		<>
			<View style={{ ...styles.activitiesContainer }}>
				<Text style={styles.activityTextStyle}>{activity.name}</Text>
				<CheckBox
					containerStyle={styles.checkBoxContainer}
					checked={checked}
					onPress={() => {
						setChecked(!checked);
						console.log('pressed => ', checked);
					}}
					size={20}
					style={styles.checkBox}
				/>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
		alignSelf: 'center',
		width: 365,
		marginBottom: 20,
		backgroundColor: colors.white,
		paddingHorizontal: 20,
		paddingTop: 10,
		borderRadius: 12.5,
		marginTop: '-2%',
	},
	activitiesContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingVertical: '2%',
		paddingHorizontal: '1.5%',
		backgroundColor: colors.white,
	},
	checkBoxContainer: {
		padding: 0,
		margin: 0,
		justifyContent: 'center',
		backgroundColor: colors.transparent,
	},
	activityTextStyle: {
		color: colors.primary.dutchBlue,
		fontWeight: '600',
		fontSize: 18,
		letterSpacing: -0.42,
	},
	checkBox: {
		width: 10,
		height: 10,
	},
});

export default ActivityCard;
