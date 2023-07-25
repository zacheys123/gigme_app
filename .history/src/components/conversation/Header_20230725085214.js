import { faker } from '@faker-js/faker';
import {
	Stack,
	Box,
	Avatar,
	Typography,
	IconButton,
	Divider,
} from '@mui/material';
import React from 'react';
import { StyledBadge } from '../StyledBadge';

import {
	CaretDown,
	MagnifyingGlass,
	Phone,
	VideoCamera,
} from 'phosphor-react';
import { useTheme, styled } from '@mui/material/Styles';
const Header = () => {
	const theme = useTheme();
	return (
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
	);
};

export default Header;
