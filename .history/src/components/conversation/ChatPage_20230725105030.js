import { Box } from '@mui/material';
import React from 'react';
import { useTheme, styled } from '@mui/material/styles';
import { Chat_History } from '../../data';
import { Stack } from 'phosphor-react';
import { Timeline, Text_Message } from './Message_Types';
const ChatPage = () => {
	const theme = useTheme();
	console.log(Chat_History);
	return (
		<>
			<Stack>
				{Chat_History.map((history, index) => {
					return <Stack>{history.msg	</Stack>}})}
		
		</>
	);
};

export default ChatPage;
