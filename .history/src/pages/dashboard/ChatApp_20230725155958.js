import { useTheme, styled } from '@mui/material/styles';
import { Box, Button, Stack } from '@mui/material';
import React, { Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH_DASHBOARD } from '../../routes/paths';
import Chats from './Chats';
import Conversation from '../../components/conversation';

const ChatApp = () => {
	const theme = useTheme();
	return (
		<Stack direction="row" sx={{ width: '100%' }}>
			<Chats />
			<Box
				sx={{
					boxShadow:
						'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
					height: '100%',
					width: 'calc(100vw - 100px - 350px)',
					background:
						theme.palette.mode === 'light'
							? 'lightgrey'
							: theme.palette.background.neutral,
				}}
			>
				<Conversation />
			</Box>
		</Stack>
	);
};

export default ChatApp;
