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
} from '@mui/material';
import React from 'react';
import {
	ArchiveBox,
	CircleDashed,
	MagnifyingGlass,
} from 'phosphor-react';

import { ChatList } from '../../data/index';
import { SimpleBarStyle } from '../../components/Scrollbar';
// styled badge avatar

import All_Chats from './All_Chats';
//
import {
	Search,
	SearchInputBase,
	SearchWrapper,
} from './AllChats_Input_Settings';

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
				boxShadow:
					theme.palette.mode === 'light'
						? '0px 0px 1px rgba(0,0,0.15)'
						: '',
				borderLeft:
					theme.palette.mode === 'light' ? '1px solid  grey' : '',
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
									return <All_Chats chats={chats} key={chats.id} />;
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
									return <All_Chats chats={chats} key={chats.id} />;
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
