import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Dialog } from '@rneui/base';
import { colors } from '../utils/colors';

type LogOutDialogProps = {
	visible: boolean;
	setVisible: () => void;
	handleLogOut: () => Promise<void>;
};

const LogOutDialog = ({
	visible,
	setVisible,
	handleLogOut,
}: LogOutDialogProps) => {
	return (
		<Dialog
			isVisible={visible}
			onBackdropPress={setVisible}
			overlayStyle={{
				backgroundColor: colors.white,
			}}
		>
			<Dialog.Title title="LOG OUT" />
			<Text>Are you sure you want to log out?</Text>
			<Dialog.Actions>
				<Dialog.Button
					title="CANCEL"
					onPress={setVisible}
				/>
				<Dialog.Button
					title="LOG OUT"
					onPress={handleLogOut}
				/>
			</Dialog.Actions>
		</Dialog>
	);
};

export default LogOutDialog;

const styles = StyleSheet.create({});
