import { useTheme } from '@mui/material/Styles';
import { Box, Typography } from '@mui/material';
import React from 'react';

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
			<Stack direction="row">
				<Typography></Typography>
			</Stack>
		</Box>
	);
};

export default Chats;
