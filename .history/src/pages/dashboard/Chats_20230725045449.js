import { useTheme, styled } from '@mui/material/Styles';
import {
	Box,
	Button,
	Divider,
	IconButton,
	InputBase,
	Stack,
	Typography,
	alpha,
	Avatar,
	Badge,
} from '@mui/material';
import React from 'react';
import {
	ArchiveBox,
	CircleDashed,
	MagnifyingGlass,
} from 'phosphor-react';
import { Faker, faker } from '@faker-js/faker';

// styled badge avatar
const StyledBadge = styled(Badge)(({ theme }) => ({
	'& .MuiBadge-badge': {
		backgroundColor: '#44b700',
		color: '#44b700',
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		'&::after': {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			borderRadius: '50%',
			animation: 'ripple 1.2s infinite ease-in-out',
			border: '1px solid currentColor',
			content: '""',
		},
	},
	'@keyframes ripple': {
		'0%': {
			transform: 'scale(.8)',
			opacity: 1,
		},
		'100%': {
			transform: 'scale(2.4)',
			opacity: 0,
		},
	},
}));
//
const NewChats = () => {
	return (
		<Box
			sx={{
				width: '100%',
				borderRadius: 1.5,
				height: 65,
				background: 'white',
				padding: '16px',
			}}
		>
			<Stack
				direction={'row'}
				alignItems="center"
				justifyContent={'space-between'}
			>
				<Stack direction={'row'} spacing={2}>
					{' '}
					<StyledBadge
						overlap="circular"
						anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
						variant="dot"
					>
						{' '}
						<Avatar src={faker.image.avatar()} />
					</StyledBadge>
					<Stack spacing={0.3}>
						<Typography variant="subtitle2">Zachy Maestro</Typography>
						<Typography variant="caption">
							I love you mannn!!!!
						</Typography>
					</Stack>
				</Stack>
				<Stack spacing={0.3} alignItems="center">
					<Typography variant="caption">9:36pm</Typography>
					<Badge badgeContent={2} color="error" />
				</Stack>
			</Stack>
		</Box>
	);
};

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: 20,
	backgroundColor: alpha(theme.palette.background.paper, 1),
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
}));
const SearchWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));
const SearchInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		width: '100%',
	},
}));

const Chats = () => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				position: 'relative',
				height: '100vh',
				width: 320,
				backgroundColor: 'lightgrey',
				boxShadow: '0px 0px 2px rgba(0,0,0.25)',
			}}
		>
			<Stack p={3} spacing={2}>
				{' '}
				<Stack
					direction="row"
					alignItems={'center'}
					justifyContent="space-between"
					spacing={3}
				>
					<Typography variant="h5">Chats</Typography>
					<IconButton>
						<CircleDashed />{' '}
					</IconButton>
				</Stack>
				<Stack>
					<Search>
						<SearchWrapper>
							<MagnifyingGlass color="#709CE6" />
						</SearchWrapper>
						<SearchInputBase placeholder="Search..." />
					</Search>
				</Stack>
				<Stack spacing={1}>
					<Stack
						sx={{ width: '100%' }}
						direction="row"
						alignItems={'center'}
						spacing={1.5}
					>
						<ArchiveBox size="24px" />
						<Button>Archive</Button>
					</Stack>
					<Divider />
				</Stack>
				<Stack direction="column">
					<NewChats />
				</Stack>
			</Stack>
		</Box>
	);
};

export default Chats;
