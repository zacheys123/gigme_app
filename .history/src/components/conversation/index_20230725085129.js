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
const StyledInput = styled(TextField)(({ theme }) => ({
	'& .MuiInputBase-input': {
		paddingTop: theme.spacing(1.5),
		paddingBottom: theme.spacing(1.5),
	},
}));
const Conversation = () => {
	return (
		<Stack height={'100vh'} width="auto">
			{/* header*/}

			{/* chat page*/}

			{/* footer*/}
		</Stack>
	);
};

export default Conversation;
