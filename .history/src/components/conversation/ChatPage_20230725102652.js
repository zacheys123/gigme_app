import { Box } from '@mui/material';
import React from 'react';
import { useTheme, styled } from '@mui/material/styles';
import { Chat_History } from '../../data';
import { Stack } from 'phosphor-react';
import { Timeline } from './Message_Types';
const ChatPage = () => {
	const theme = useTheme();
	console.log(Chat_History);
	return (
		<>
			<Stack>
				{Chat_History.map((history, index) => {
					if (history.type === 'divider') {
					} else {
						return <></>;
					}
				})}
			</Stack>
		</>
	);
};

export default ChatPage;
