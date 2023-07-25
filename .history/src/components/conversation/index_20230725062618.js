import { Stack, Box } from '@mui/material';
import React from 'react';

const Conversation = () => {
	return (
		<Stack height={'100vh'} width="auto">
			{/* header*/}
			<Box
				sx={{ height: '100px', width: '100px', background: 'black' }}
			></Box>
			<Box
				sx={{ height: '100px', width: '100px', background: 'black' }}
			></Box>
			<Box
				sx={{ height: '100px', width: '100px', background: 'black' }}
			></Box>
		</Stack>
	);
};

export default Conversation;
