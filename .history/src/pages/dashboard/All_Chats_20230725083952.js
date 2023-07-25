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

const All_Chats = ({ chats }) => {
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
export default All_Chats;
