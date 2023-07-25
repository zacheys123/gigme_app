import { faker } from '@faker-js/faker';
import {
	Stack,
	Box,
	Avatar,
	Typography,
	IconButton,
	Divider,
	TextField,
	InputAdornment,
} from '@mui/material';
import React from 'react';
import { StyledBadge } from '../StyledBadge';
import { useTheme, styled } from '@mui/material/Styles';
import {
	ArrowDown,
	CaretDown,
	LinkSimple,
	MagnifyingGlass,
	PaperPlaneTilt,
	Phone,
	Smiley,
	VideoCamera,
} from 'phosphor-react';
import Header from './Header';
import ChatPage from './ChatPage';
import Footer from './Footer';
const StyledInput = styled(TextField)(({ theme }) => ({
	'& .MuiInputBase-input': {
		paddingTop: theme.spacing(1.5),
		paddingBottom: theme.spacing(1.5),
	},
}));
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
