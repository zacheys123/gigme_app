import { Box } from '@mui/material';
import React from 'react';
import { useTheme, styled } from '@mui/material/Styles';
const ChatPage = () => {
	const theme = useTheme();
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
