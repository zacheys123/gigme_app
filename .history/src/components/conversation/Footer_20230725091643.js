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
		borderRadius: 1.5,
	},
}));
const Footer = () => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				width: '100%',
				background:
					theme.palette.mode === 'light'
						? '#F8FAFF'
						: theme.palette.background.paper,
			}}
			p={2}
		>
			{' '}
			<Stack direction="row" alignItems="center" spacing={3}>
				<StyledInput
					fullWidth
					placeholder="Write a Message...."
					variant="filled"
					InputProps={{
						disableUnderline: true,
						startAdornment: (
							<InputAdornment>
								{' '}
								<IconButton>
									<LinkSimple />
								</IconButton>{' '}
							</InputAdornment>
						),
						endAdornment: (
							<InputAdornment>
								{' '}
								<IconButton>
									<Smiley />
								</IconButton>{' '}
							</InputAdornment>
						),
					}}
				/>
				<Box
					height={'42px'}
					width="42px"
					sx={{
						backgroundColor: theme.palette.primary.main,
						borderRadius: 1.5,
					}}
				>
					<Stack
						alignItems={'center'}
						justifyContent={'center'}
						height="100%"
					>
						{' '}
						<IconButton sx={{ color: 'white' }}>
							<PaperPlaneTilt />
						</IconButton>
					</Stack>
				</Box>
			</Stack>
		</Box>
	);
};

export default Footer;
