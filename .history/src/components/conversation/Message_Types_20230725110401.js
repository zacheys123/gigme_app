import { useTheme } from '@mui/material/styles';
import { Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react';

const Media_Message = ({ history }) => {
	console.log(history.incoming);
	const theme = useTheme();
	return (
		<Stack
			direction="row"
			justifyContent={history.incoming ? 'start' : 'end'}
		>
			<Box
				p={1.5}
				sx={{
					backgroundColor: history.incoming
						? theme.palette.background.default
						: theme.palette.primary.main,
					borderRadius: 2.5,
					width: 'max-content',
				}}
			>
				<Stack spacing={1}>
					<img
						src={history.img}
						alt={history.message}
						style={{ maxHeight: 210, borderRadius: 10 }}
					/>
				</Stack>
			</Box>
		</Stack>
	);
};
const Text_Message = ({ history }) => {
	console.log(history.incoming);
	const theme = useTheme();
	return (
		<Stack
			direction="row"
			justifyContent={history.incoming ? 'start' : 'end'}
		>
			<Box
				p={1.5}
				sx={{
					backgroundColor: history.incoming
						? theme.palette.background.default
						: theme.palette.primary.main,
					borderRadius: 2.5,
					width: 'max-content',
				}}
			>
				<Typography
					variant="body2"
					color={history.incoming ? theme.palette.text : '#fff'}
				>
					{history.message}
				</Typography>
			</Box>
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

export { Timeline, Text_Message };
