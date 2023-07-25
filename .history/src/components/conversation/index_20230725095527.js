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

			<ChatPage />

			<Footer />
		</Stack>
	);
};

export default Conversation;
