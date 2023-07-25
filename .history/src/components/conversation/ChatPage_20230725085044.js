import { Box } from '@mui/material';
import React from 'react';

const ChatPage = () => {
	return (
		<Box
			sx={{
				flexGrow: 1,
				background:
					theme.palette.mode === 'light'
						? '#fff'
						: theme.palette.background.default,
				width: '100%',
			}}
		></Box>
	);
};

export default ChatPage;
