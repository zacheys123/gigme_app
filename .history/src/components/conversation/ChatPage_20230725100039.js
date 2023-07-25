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
			<Stack></Stack>
		</Box>
	);
};

export default ChatPage;
