import {
	Dimensions,
	Image,
	Modal,
	Pressable,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { colors } from '../utils/colors';
import { IEditTripCard, ITripCardProps } from '../types/propTypes';
import { Card, Dialog } from '@rneui/base';
import OpenURLButton from './OpenURLButton';
import InputField from './InputField';
import { useForm } from 'react-hook-form';
import { ILoginData, ITripInputData } from '../types/applicationTypes';
import AnimatedInputField from './AnimatedInputField';
import DatePicker from 'react-native-modern-datepicker';

type Props = {};

const EditTripCard = ({
	trip,
	dialogVisible,
	setDialogVisible,
}: IEditTripCard) => {
	const {
		control,
		handleSubmit,
		formState: { errors },
		setError,
		getValues,
		reset,
	} = useForm<ITripInputData>({ shouldUnregister: true });
	const startAndEndDate = `${new Date(
		trip.startDate,
	).toLocaleDateString()} - ${new Date(trip.endDate).toLocaleDateString()}`;

	const [openModal, setOpenModal] = useState<boolean>(false);
	const [selectedDate, setSelectedDate] = useState('');

	const handleImagePress = () => {
		setDialogVisible();
	};

	const handleModal = () => {
		setOpenModal((state) => !state);
	};

	return (
		<Dialog
			isVisible={dialogVisible}
			backdropStyle={{
				height: '100%',
			}}
			overlayStyle={{
				height: 800,
				backgroundColor: 'transperent',
				borderStyle: 'solid',
				borderBlockColor: 'red',
			}}
		>
			<Card containerStyle={styles.container}>
				<Pressable onPress={handleImagePress}>
					<Image
						style={styles.imageStyle}
						source={
							trip.image
								? { uri: trip.image }
								: require('../assets/icons/sunset.png')
						}
					/>
				</Pressable>
				<View style={styles.tripInfoContainer}>
					{/* <InputField
						control={control}
						name='destination'
						placeholder='Destination'
						textInputStyle={styles.inputFieldStyle}
						labelTextStyle={styles.inputLabelStyle}
					/>
					<InputField
						control={control}
						name='date'
						placeholder='Date'
						textInputStyle={styles.inputFieldStyle}
						labelTextStyle={styles.inputLabelStyle}
					/> */}

					<AnimatedInputField
						label={'Enter Destination'}
						name='enter_destination'
						duration={300}
						control={control}
					/>
					<AnimatedInputField
						label={'Enter Date'}
						name='enter_date'
						control={control}
						inputFieldType='emailAddress'
						keyboardType={'phone-pad'}
					/>
					<TouchableOpacity onPress={handleModal}>
						<Text>Open Modal</Text>
					</TouchableOpacity>
					<View style={styles.outerModalContainer}>
						<Modal
							animationType='slide'
							transparent={true} // Important to keep background overlay effect
							visible={openModal}
							onRequestClose={handleModal} // Android back button support
						>
							<View style={styles.modalOverlay}>
								<View style={styles.modalView}>
									<Text>Select a Date</Text>
									<DatePicker
										onSelectedChange={(date) => setSelectedDate(date)}
										options={{
											backgroundColor: '#090C08',
											textHeaderColor: '#FFA25B',
											textDefaultColor: '#F6E7C1',
											selectedTextColor: '#fff',
											mainColor: 'rgb(0, 140, 255)',
											textSecondaryColor: 'rgb(250, 13, 13)',
											// textSecondaryColor: '#D6C7A1',
											borderColor: 'rgba(122, 146, 165, 0.1)',
											headerAnimationDistance: 20000,
											daysAnimationDistance: 20000,
										}}
										// currentDate={new Date().toLocaleDateString()}
										activeDate={new Date().toLocaleDateString()}
										current={new Date().toLocaleDateString()}
										selected={new Date().toLocaleDateString()}
									/>
									<TouchableOpacity
										onPress={handleModal}
										style={styles.closeButton}
									>
										<Text style={styles.closeButtonText}>Close</Text>
									</TouchableOpacity>
								</View>
							</View>
						</Modal>
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
		display: 'flex',
		backgroundColor: colors.primary.frostFairy,
		width: 359,
		height: 900,
		maxHeight: 700,
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
		position: 'static',
		height: 400,
		display: 'flex',
		flexDirection: 'column',
		overflow: 'hidden',
		paddingTop: 15,
		gap: 10,
	},
	inputFieldStyle: {
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
	inputLabelStyle: {
		top: 40,
		left: 20,
		zIndex: 1111,
	},
	outerModalContainer: {
		height: 300,
	},

	// This creates the dark background effect
	modalOverlay: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0)', // Dim background
	},

	modalView: {
		width: 320, // Adjust this width as needed
		height: 400, // Adjust to fit the calendar
		backgroundColor: 'white',
		borderRadius: 15,
		padding: 20,
		alignItems: 'center',
		justifyContent: 'space-between',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5, // Adds a slight shadow effect on Android
	},

	closeButton: {
		marginTop: 10,
		backgroundColor: '#007AFF',
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
	},

	closeButtonText: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
	},
});
