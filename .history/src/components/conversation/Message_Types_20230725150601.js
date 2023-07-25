import { useTheme } from '@mui/material/styles';
import {
	Box,
	Divider,
	IconButton,
	Menu,
	MenuItem,
	Stack,
	Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import {
	DotsThreeVertical,
	DownloadSimple,
	Image,
} from 'phosphor-react';
import { Message_options } from '../../data';
// document message
const Doc_Message = ({ history }) => {
	const theme = useTheme();
	return (
		<Box
			direction="row"
			justifyContent={history.incoming ? 'start' : 'end'}
			p={2}
			m={1}
			sx={{
				backgroundColor: history.incoming
					? theme.palette.background.default
					: theme.palette.primary.main,
				borderRadius: 1.5,
				width: 'max-content',
			}}
		>
			<Stack
				p={1}
				direction="column"
				alignItems="center"
				sx={{
					backgroundColor: history.incoming
						? 'lightblue'
						: theme.palette.primary.main,
					color: theme.palette.background.default,
					borderRadius: 1,
				}}
			>
				<Stack direction="row" alignItems="center">
					<Image size="48" color={theme.palette.text} />
					<Typography
						variant="caption"
						color={theme.palette.primary.main}
					>
						Abstract.png
					</Typography>
					<IconButton>
						<DownloadSimple />
					</IconButton>
				</Stack>
				<Stack>
					<Typography
						variant="caption"
						sx={{
							color: history.incoming
								? theme.palette.primary.main
								: '#fff',
						}}
					>
						{history.message}
					</Typography>
				</Stack>
			</Stack>
		</Box>
	);
};
// Link Message
const Link_Message = ({ history }) => {
	const theme = useTheme();
	return (
		<Stack m={1}>
			<Box
				direction="row"
				justifyContent={history.incoming ? 'start' : 'end'}
				p={2}
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
			direction="row"
			justifyContent={history.incoming ? 'start' : 'end'}
			p={2}
			m={1}
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
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
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
			<IconButton
				id="demo-positioned-button"
				aria-controls={open ? 'demo-positioned-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				{' '}
				<DotsThreeVertical size={20} />
			</IconButton>

			<Menu
				id="demo-positioned-menu"
				aria-labelledby="demo-positioned-button"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
			>
				<Stack spacing={1} px={1} width={40} height={40}>
					{Message_options.map((options) => {
						return (
							<MenuItem onClick={() => handleClose}>
								{options.title}
							</MenuItem>
						);
					})}
				</Stack>
			</Menu>
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
