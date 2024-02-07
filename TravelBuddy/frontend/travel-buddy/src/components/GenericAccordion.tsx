// import { ListItem } from '@rneui/base';
// import { Icon } from '@rneui/themed';
// import React, { useState } from 'react';

// interface IGenericAccordionProps<T> {
// 	// data: T[];
//     data: Record<string, any>
// }

// type RecursiveObject = {
// 	[key: string]: Value | RecursiveObject | RecursiveObject[];
// };

// interface IGenericAccordionProps {
// 	data: RecursiveObject;
// }

// const GenericAccordion = <T,>({ data }: IGenericAccordionProps<T>) => {
// 	const [expanded, setExpanded] = useState<boolean>(false);

// 	return (
// 		<ListItem.Accordion
// 			content={
// 				<>
// 					<Icon
// 						name="place"
// 						size={30}
// 					/>
// 					<ListItem.Content>
// 						<ListItem.Title>List Accordion</ListItem.Title>
// 					</ListItem.Content>
// 				</>
// 			}
// 			isExpanded={expanded}
// 			onPress={() => {
// 				setExpanded(!expanded);
// 			}}
// 		>
// 			{data.map((l, i) => (
// 				<ListItem
// 					key={i}
// 					onPress={() => console.log(l)}
// 					bottomDivider
// 				>
// 					{/* <Avatar
// 						title={l.name[0]}
// 						source={{ uri: l.avatar_url }}
// 					/> */}
// 					<ListItem.Content>
// 						<ListItem.Title>{l.date}</ListItem.Title>
// 						<FlatList
// 							data={l.places}
// 							renderItem={(item) => <Text>{item.item}</Text>}
// 						/>
// 					</ListItem.Content>
// 					<ListItem.Chevron />
// 				</ListItem>
// 			))}
// 		</ListItem.Accordion>
// 	);
// };

// export default GenericAccordion;

// const handleNestedObjects = (nestedData: RecursiveObject) => {
// 	const renderedItems = [];

// 	for (const key in nestedData) {
// 		const value = nestedData[key];

// 		if (typeof value === 'object') {
// 			if (Array.isArray(value)) {
// 				// Handle array
// 				const arrayItems = value.map((item, index) => {
// 					if (typeof item === 'object') {
// 						// Recursively handle nested object in array
// 						return (
// 							<GenericAccordion
// 								key={index}
// 								data={item as RecursiveObject}
// 							/>
// 						);
// 					} else {
// 						return <Text key={index}>{item}</Text>;
// 					}
// 				});

// 				renderedItems.push(
// 					<ListItem
// 						key={key}
// 						bottomDivider
// 						onPress={() => console.log(`Array: ${key}`, value)}
// 					>
// 						<ListItem.Content>
// 							<ListItem.Title>{key}</ListItem.Title>
// 							{arrayItems}
// 						</ListItem.Content>
// 						<ListItem.Chevron />
// 					</ListItem>,
// 				);
// 			} else {
// 				// Handle nested object
// 				renderedItems.push(
// 					<GenericAccordion
// 						key={key}
// 						data={value as RecursiveObject}
// 					/>,
// 				);
// 			}
// 		} else {
// 			// Handle primitive values
// 			renderedItems.push(
// 				<ListItem
// 					key={key}
// 					bottomDivider
// 					onPress={() => console.log(`Primitive: ${key}`, value)}
// 				>
// 					<ListItem.Content>
// 						<ListItem.Title>{key}</ListItem.Title>
// 						<Text>{value}</Text>
// 					</ListItem.Content>
// 					<ListItem.Chevron />
// 				</ListItem>,
// 			);
// 		}
// 	}

// 	return renderedItems;
// };
