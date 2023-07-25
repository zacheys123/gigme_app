import { faker } from '@faker-js/faker';
import { Stack, Box, Avatar } from '@mui/material';
import React from 'react';

const Conversation = () => {
	return (
		<Stack height={'100vh'} width="auto">
			{/* header*/}
			<Box
				sx={{ height: '100px', width: '100%', background: '#F8FAFF' }}
			>
				<Stack direction="row">
					<Stack direction="row">
						<Avatar src={faker.image.avatar()} />
						<Stack direction="column" spacing={2}>
							<Typography>Zachy Mundu</Typography>
							<Typography>Online</Typography>
						</Stack>
					</Stack>
					<Stack></Stack>
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
