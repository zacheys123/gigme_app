import { faker } from '@faker-js/faker';
import { Stack, Box, Avatar, Typography } from '@mui/material';
import React from 'react';
import { StyledBadge } from '../StyledBadge';
import { useTheme, styled } from '@mui/material/Styles';
const Conversation = () => {
	const theme = useTheme();
	return (
		<Stack height={'100vh'} width="auto">
			{/* header*/}
			<Box
				sx={{
					background:
						theme.palette.mode === 'light'
							? 'lightgrey'
							: theme.palette.background.default,
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
							<StyledBadge>
								<Avatar src={faker.image.avatar()} />
							</StyledBadge>
						</Box>
						<Stack>
							<Typography variant="subtitle2">Zachy Mundu</Typography>
							<Typography variant="caption">Online</Typography>
						</Stack>
					</Stack>
					<Stack>icons</Stack>
				</Stack>
			</Box>
			{/* chat page*/}
			<Box
				sx={{ flexGrow: 1, background: 'grey', width: '100%' }}
			></Box>
			{/* footer*/}
			<Box
				sx={{ height: '100px', width: '100%', background: '#F8FAFF' }}
			></Box>
		</Stack>
	);
};

export default Conversation;
