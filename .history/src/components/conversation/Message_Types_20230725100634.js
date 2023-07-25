import { Divider, Stack } from '@mui/material';
import React from 'react';

const Timeline = ({ history }) => {
	return (
		<Stack
			directions="row"
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
