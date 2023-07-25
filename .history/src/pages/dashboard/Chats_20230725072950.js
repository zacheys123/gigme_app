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
import { ChatList } from '../../data/index';
import { SimpleBarStyle } from '../../components/Scrollbar';
// styled badge avatar
import { StyledBadge } from '../../components/StyledBadge';
//

const NewChats = ({ chats }) => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				width: '95%',
				borderRadius: 1.5,
				marginRight: '.9rem',
				backgroundColor:
					theme.palette.mode === 'light'
						? 'lightgrey'
						: theme.palette.background.default,
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
					{chats.online ? (
						<StyledBadge
							overlap="circular"
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'right',
							}}
							variant="dot"
						>
							{' '}
							<Avatar src={chats.img} />
						</StyledBadge>
					) : (
						<Avatar src={chats.img} />
					)}
					<Stack spacing={0.3}>
						<Typography variant="subtitle2">{chats.name}</Typography>
						<Typography variant="caption">{chats.msg}</Typography>
					</Stack>
				</Stack>
				<Stack spacing={1.5} alignItems="center">
					<Typography sx={{ fontWeight: '600' }} variant="caption">
						{chats.time}
					</Typography>
					<Badge badgeContent={chats.unread} color="primary" />
				</Stack>
			</Stack>
		</Box>
	);
};

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: 20,
	backgroundColor: alpha(theme.palette.background.default, 1),
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

				width: '350px',
				backgroundColor:
					theme.palette.mode === 'light'
						? '#F8FAFF'
						: theme.palette.background.paper,
				boxShadow: '1px -2px 1.3px rgba(0,0,0.25)',
			}}
		>
			<Stack p={3} spacing={2} sx={{ height: '100vh' }}>
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
				<Stack
					direction="column"
					spacing={2}
					sx={{ flexGrow: 1, overflow: 'scroll', height: '100%' }}
				>
					<SimpleBarStyle timeout={500} clickOnTrack={false}>
						<Stack spacing={2.4}>
							<Typography
								variant="subtitle2"
								sx={{ color: '#676767' }}
							>
								Pinned
							</Typography>
							{ChatList.filter((chats) => chats.pinned).map(
								(chats) => {
									return <NewChats chats={chats} key={chats.id} />;
								},
							)}
						</Stack>
						<Stack spacing={2.4} mt={2}>
							<Typography
								variant="subtitle2"
								sx={{ color: '#676767' }}
							>
								All Chats
							</Typography>
							{ChatList.filter((chats) => !chats.pinned).map(
								(chats) => {
									return <NewChats chats={chats} key={chats.id} />;
								},
							)}
						</Stack>
					</SimpleBarStyle>
				</Stack>
			</Stack>
		</Box>
	);
};

export default Chats;
