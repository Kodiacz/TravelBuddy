import { Button, ButtonGroup, Card, Icon, Text } from '@rneui/themed';
import React, { useCallback, useState } from 'react';
import {
	Alert,
	Image,
	Linking,
	Pressable,
	StyleProp,
	TextStyle,
	TouchableOpacity,
	View,
} from 'react-native';
import { style } from '../styles/Components/TripCardStyles';
import { ITripCardProps } from '../types/propTypes';
import OpenURLButton from './OpenURLButton';
import EditTripCard from './EditTripCard';
import ShareIcon from '../assets/icons/share-icon.svg';
import EditIcon from '../assets/icons/edit-icon.svg';
import FileIcon from '../assets/icons/file-icon.svg';
import { SvgUri, SvgXml } from 'react-native-svg';

export default function TripCard({ trip }: ITripCardProps) {
	const [editDialogVisible, setEditDialogVisible] = useState<boolean>(false);

	const startAndEndDate = `${new Date(
		trip.startDate,
	).toLocaleDateString()} - ${new Date(trip.endDate).toLocaleDateString()}`;

	const handleDialog = () => {
		setEditDialogVisible((prev) => !prev);
	};

	const handleShare = () => {
		console.log('handleShare clicked');
	};

	const handleEdit = () => {
		console.log('handleEdit clicked');
	};

	const handleAttachFile = () => {
		console.log('handleAttachFile clicked');
	};

	return (
		<Card containerStyle={style.container}>
			<View style={style.imageContainer}>
				<Image
					style={style.imageStyle}
					source={{ uri: trip.image }}
				/>
			</View>
			<View style={style.tripInfoContainer}>
				<View style={style.textContainer}>
					<Text style={style.textDescription}>Destination</Text>
					<Text style={style.textValue}>{trip.name}</Text>
				</View>
				<View style={style.textContainer}>
					<Text style={style.textDescription}>Dates</Text>
					<Text style={style.textValue}>{startAndEndDate}</Text>
				</View>
				<View style={style.textContainer}>
					<Text style={style.textDescription}>Travelling by</Text>
					<Text style={style.textValue}>{trip.travellingBy}</Text>
				</View>
				<View style={style.textContainer}>
					<Text style={style.textDescription}>Accommodation</Text>
					<OpenURLButton url={trip.accommodation}>
						<Text style={style.textValue}>Link</Text>
					</OpenURLButton>
				</View>
				<View style={style.buttonsContainer}>
					<Pressable onPress={handleShare}>
						<ShareIcon
							width={19}
							height={19}
							color={'#112557'}
						/>
					</Pressable>
					<Pressable
						style={style.middleButton}
						onPress={handleDialog}
					>
						<EditIcon
							width={20}
							height={20}
							color={'#112557'}
						/>
					</Pressable>
					<Pressable onPress={handleAttachFile}>
						<FileIcon
							width={20}
							height={20}
							color={'#112557'}
						/>
					</Pressable>
				</View>
			</View>
			<EditTripCard
				trip={trip}
				dialogVisible={editDialogVisible}
				setDialogVisible={handleDialog}
			/>
		</Card>
	);
}
