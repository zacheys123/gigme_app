import { useTheme } from '@mui/material/styles';
import { Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'phosphor-react';
// document message
const Doc_Message = ({ history }) => {
	const theme = useTheme();
	return (
		<Stack
			direction="row"
			justifyContent={history.incoming ? 'start' : 'end'}
			p={2}
			m={1}
		>
			<Box
				p={1.5}
				sx={{
					backgroundColor: history.incoming
						? theme.palette.background.default
						: theme.palette.primary.main,
					borderRadius: 1.5,
					width: 'max-content',
				}}
			>
				<Stack
					p={2}
					direction="row"
					alignItems="center"
					sx={{
						color: theme.palette.background.paper,
						borderRadius: 1,
					}}
				>
					<Image size="48" />
					<Typography variant="caption">Abstract.png</Typography>
					<IconButton>
						<DownloadSimple />
					</IconButton>
				</Stack>
			</Box>
		</Stack>
	);
};
// Link Message
const Link_Message = ({ history }) => {
	const theme = useTheme();
	return (
		<Stack m={1}>
			<Box
				p={1.5}
				sx={{
					backgroundColor: history.incoming
						? theme.palette.background.default
						: theme.palette.primary.main,
					borderRadius: 1.5,
					width: 'max-content',
				}}
			>
				<Stack spacing={2}>
					<Stack
						p={2}
						spacing={3}
						alignItems={'center'}
						sx={{
							backgroundColor: theme.palette.background.paper,
							borderRadius: 1.5,
						}}
					>
						<img
							src={history.preview}
							alt={history.message}
							style={{ maxHeight: 180, borderRadius: 10 }}
						/>
						<Stack spacing={2}>
							{' '}
							<Typography
								variant="subtitle2"
								color={history.incoming ? '#000' : '#fff'}
							>
								Creating new App
							</Typography>
							<Typography
								variant="subtitle2"
								sx={{ color: theme.palette.primary.main }}
								component={Link}
								to="//https://www.youtube.com"
							>
								{history.reply}
							</Typography>
						</Stack>
						<Typography
							variant="body2"
							color={history.incoming ? theme.palette.text : '#fff'}
						>
							{history.message}
						</Typography>
					</Stack>
				</Stack>
			</Box>
		</Stack>
	);
};

//
const Reply_Message = ({ history }) => {
	const theme = useTheme();
	return (
		<Box
			m={1}
			p={1.5}
			sx={{
				backgroundColor: history.incoming
					? theme.palette.background.default
					: theme.palette.primary.main,
				borderRadius: 1.5,
				width: 'max-content',
			}}
		>
			<Stack spacing={1}>
				<Stack
					p={2}
					direction="column"
					spacing={2}
					alignItems={'center'}
					sx={{
						backgroundColor: theme.palette.background.paper,
						borderRadius: 1.5,
					}}
				>
					<Typography variant="body2" color={theme.palette.main}>
						{history.message}
					</Typography>
				</Stack>
				<Typography
					variant="caption"
					color={history.incoming ? '#000' : '#fff'}
				>
					{history.reply}
				</Typography>
			</Stack>
		</Box>
	);
};

const Media_Message = ({ history }) => {
	const theme = useTheme();
	return (
		<Stack
			m={1}
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
						style={{ maxHeight: 180, borderRadius: 10 }}
					/>
					<Typography
						variant="body2"
						color={history.incoming ? theme.palette.text : '#fff'}
					>
						{history.message}
					</Typography>
				</Stack>
			</Box>
		</Stack>
	);
};
const Text_Message = ({ history }) => {
	const theme = useTheme();
	return (
		<Stack
			m={1}
			direction="row"
			justifyContent={history.incoming ? 'start' : 'end'}
			p={2}
		>
			<Box
				p={1.5}
				sx={{
					backgroundColor: history.incoming
						? 'lightblue'
						: theme.palette.primary.main,
					borderRadius: 1.5,
					width: 'max-content',
				}}
			>
				<Typography
					variant="body2"
					color={
						history.incoming ? theme.palette.primary.main : '#fff'
					}
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
			m={1}
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

export {
	Timeline,
	Text_Message,
	Media_Message,
	Reply_Message,
	Link_Message,
	Doc_Message,
};
