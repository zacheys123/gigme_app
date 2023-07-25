import { Box, Divider } from '@mui/material';
import React from 'react';
import { useTheme, styled } from '@mui/material/Styles';
import { Chat_History } from '../../data';
import { Stack } from 'phosphor-react';
import { Timeline } from './Message_Types';
const ChatPage = () => {
	const theme = useTheme();
	console.log(Chat_History);
	return (
		<Box>
			<Stack>
				{Chat_History.map((history, index) => {
					switch (history.type) {
						case 'divider':
							return (
								<Stack
									directions="row"
									alignItems="center"
									justifyContent="space-between"
									width="100%"
								>
									<Divider width="46%" />
								</Stack>
							);

						case 'msg':
							switch (history.subtype) {
								case 'img':
									// image message
									break;
								case 'doc':
									// doc message
									break;
								case 'link':
									// link message
									break;
								case 'reply':
									// reply message
									break;
								default:
									break;
							}
							break;
						default:
							<></>;
					}
				})}
			</Stack>
		</Box>
	);
};

export default ChatPage;
