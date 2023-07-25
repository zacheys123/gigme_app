import { useTheme } from '@mui/material/Styles';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import { CircleDashed } from 'phosphor-react';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: 20,
	backgroundColor: alpha(theme.palette.background.paper, 1),
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
}));

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
			<Stack p={3}>
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
			</Stack>
		</Box>
	);
};

export default Chats;
