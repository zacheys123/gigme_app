import { faker } from '@faker-js/faker';
import { Stack, Box, TextField } from '@mui/material';
import React from 'react';

import Header from './Header';
import ChatPage from './ChatPage';
import Footer from './Footer';
import { useTheme } from '@emotion/react';

const Conversation = () => {
	const theme = useTheme();
	return (
		<Stack height={'100vh'} width="auto">
			<Header />
			<Box
				sx={{
					flexGrow: 1,
					background:
						theme.palette.mode === 'light'
							? '#fff'
							: theme.palette.background.default,
					width: '100%',
					height: '100%',
					overflowY: 'scroll',
				}}
			>
				{' '}
				<ChatPage />
			</Box>

			<Footer />
		</Stack>
	);
};

export default Conversation;
