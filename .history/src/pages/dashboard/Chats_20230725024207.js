import { useTheme } from '@mui/material/Styles';
import { Box } from '@mui/material';
import React from 'react';

const Chats = () => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				position: 'relative',
				height: {'100%'},
				width: 320,
				backgroundColor: 'grey',
				boxShadow: '0px 0px 2px rgba(0,0,0.25)',
			}}
		>
			Chats
		</Box>
	);
};

export default Chats;
