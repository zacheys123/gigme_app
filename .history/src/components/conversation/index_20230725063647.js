import { faker } from '@faker-js/faker';
import { Stack, Box, Avatar, Typography } from '@mui/material';
import React from 'react';

const Conversation = () => {
	return (
		<Stack height={'100vh'} width="auto">
			{/* header*/}
			<Box
				sx={{ height: '100px', width: '100%', background: '#F8FAFF' }}
			>
				<Stack
					direction="row"
					alignItems="center"
					justifyContent="space-between"
					spacing={2}
				>
					<Stack direction="row" alignItems={'center'}>
						<Avatar src={faker.image.avatar()} />
						<Stack spacing={2}>
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
