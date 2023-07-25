import { useTheme } from '@mui/material/Styles';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import { CircleDashed } from 'phosphor-react';

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
			<Stack
				direction="row"
				alignItems={'center'}
				justifyContent="space-between"
			>
				<Typography variant="h5">Chats</Typography>
				<IconButton>
					<CircleDashed />{' '}
				</IconButton>
			</Stack>
		</Box>
	);
};

export default Chats;
