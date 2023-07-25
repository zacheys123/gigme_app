import { faker } from '@faker-js/faker';
import { Stack, Box, TextField } from '@mui/material';
import React from 'react';

import { useTheme, styled } from '@mui/material/Styles';

import Header from './Header';
import ChatPage from './ChatPage';
import Footer from './Footer';

const Conversation = () => {
	const theme = useTheme();
	return (
		<Stack height={'100vh'} width="auto">
			<Header />
			<Box
				sx={{
					flexGrow: 1,
					background:
						theme.palette.mode === 'blue'
							? '#fff'
							: theme.palette.background.default,
					width: '100%',
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
