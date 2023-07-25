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
	const theme = useTheme();
	return (
		<Stack height={'100vh'} width="auto">
			{/* header*/}
			<Box
				sx={{
					background:
						theme.palette.mode === 'light'
							? '#F8FAFF'
							: theme.palette.background.paper,
				}}
			>
				<Stack
					direction="row"
					alignItems="center"
					justifyContent="space-between"
					spacing={2}
					sx={{ width: '100%', height: '100%' }}
				>
					<Stack direction={'row'} spacing={2} p={2}>
						<Box>
							<StyledBadge
								overlap="circular"
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'right',
								}}
								variant="dot"
							>
								<Avatar src={faker.image.avatar()} />
							</StyledBadge>
						</Box>
						<Stack>
							<Typography variant="subtitle2">Zachy Mundu</Typography>
							<Typography variant="caption">Online</Typography>
						</Stack>
					</Stack>
					<Stack direction="row" alignItems="center" spacing={3}>
						<IconButton>
							<VideoCamera />
						</IconButton>
						<IconButton>
							<Phone />
						</IconButton>{' '}
						<IconButton>
							<MagnifyingGlass />
						</IconButton>
						<Divider
							orientation="vertical"
							flexItem
							sx={{ fontWeight: '600' }}
						/>
						<IconButton>
							<CaretDown />
						</IconButton>
					</Stack>
				</Stack>
			</Box>
			{/* chat page*/}
			<Box
				sx={{
					flexGrow: 1,
					background:
						theme.palette.mode === 'light'
							? '#F8FAFF'
							: theme.palette.background.default,
					width: '100%',
				}}
			></Box>
			{/* footer*/}
			<Box sx={{ width: '100%', background: '#F8FAFF' }} p={2}>
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
		</Stack>
	);
};

export default Conversation;
