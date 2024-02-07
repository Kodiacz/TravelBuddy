import { Icon, ListItem } from '@rneui/base';
import React, { useState } from 'react';
import { IItineraryAccordionProps } from '../types/propTypes';
import ItineraryCard, { Activity } from './ItineraryCard';
import { Image, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

const ItineraryAccordion = ({ itinerary }: IItineraryAccordionProps) => {
	const [expanded, setExpanded] = useState<boolean>(false);
	const itineraryDate = new Date(itinerary.date);
	const icon = (
		<Image
			style={expanded ? { transform: [{ rotate: '360deg' }] } : {}}
			source={require('../assets/pictures/accordion-arrow.png')}
		></Image>
	);

	return (
		<ListItem.Accordion
			animation={{
				type: 'timing',
				duration: 250,
			}}
			containerStyle={{
				...(expanded
					? styles.openedAccordionContainer
					: styles.closedAccordionContainer),
				...styles.accordionContainer,
			}}
			icon={icon}
			content={
				<>
					<ListItem.Content style={styles.accordionContent}>
						<ListItem.Title>
							{`${itinerary.name} - ${itineraryDate.toLocaleDateString()}`}
						</ListItem.Title>
					</ListItem.Content>
				</>
			}
			isExpanded={expanded}
			onPress={() => {
				setExpanded(!expanded);
			}}
		>
			<ItineraryCard itinerary={itinerary} />
		</ListItem.Accordion>
	);
};

const styles = StyleSheet.create({
	openedAccordionContainer: {
		borderTopLeftRadius: 12.5,
		borderTopRightRadius: 12.5,
		height: 84,
	},
	closedAccordionContainer: {
		borderRadius: 12.5,
		height: 67,
	},
	accordionContainer: {
		width: 365,
		paddingRight: '8%',
		alignSelf: 'center',
		backgroundColor: colors.accent.absoluteApricot,
	},
	accordionContent: {
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default ItineraryAccordion;
