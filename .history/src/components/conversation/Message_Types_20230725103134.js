import { useTheme } from '@mui/material/styles';
import { Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react';

const Text_Message = ({ history }) => {
	const theme = useTheme();
	return (
		<Stack
			direction="row"
			justifyContent={history.imcoming ? start : 'end'}
		>
			<Box p={0.5}></Box>
		</Stack>
	);
};
const Timeline = ({ history }) => {
	const theme = useTheme();
	return (
		<Stack
			direction="row"
			alignItems="center"
			justifyContent="space-between"
		>
			<Divider width="46%" />
			<Typography variant="caption" color={theme.palette.text}>
				{history.text}
			</Typography>
			<Divider width="46%" />
		</Stack>
	);
};

export { Timeline };
