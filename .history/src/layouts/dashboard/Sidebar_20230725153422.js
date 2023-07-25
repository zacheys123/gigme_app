import { useTheme, styled } from '@mui/material/styles';
import {
	Avatar,
	Box,
	Divider,
	IconButton,
	Menu,
	MenuItem,
	Switch,
} from '@mui/material';

import logo from '../../assets/Images/logo.ico';
import { Stack } from '@mui/material';
import { Nav_Buttons, Profile_Menu } from '../../data';
import { Gear } from 'phosphor-react';
import { faker } from '@faker-js/faker';
import useSettings from '../../hooks/useSettings';
import { useState } from 'react';
import AntSwitch from '../../components/AntSwitch';
const Sidebar = () => {
	const theme = useTheme();
	const [selected, setSelected] = useState(0);
	const { onToggleMode } = useSettings();

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<Box
			sx={{
				backgroundColor: theme.palette.background.paper,
				boxShadow: '0px 0px 2px rgba(0,0,0.25)',
				height: '100vh',
				width: 100,
			}}
		>
			<Stack
				direction="column"
				alignItems="center"
				justifyContent={'space-between'}
				sx={{ height: '100%', width: '100%' }}
				spacing={5}
			>
				<Stack alignItems="center" spacing={4}>
					<Box
						sx={{
							borderRadius: 1.5,
							backgroundColor: theme.palette.primary.main,
							width: 64,
							height: 64,
						}}
					>
						<img src={logo} alt="" />
					</Box>
					<Stack
						alignItems="center"
						sx={{ width: 'max-content' }}
						spacing={3}
					>
						{Nav_Buttons.map((button) => {
							{
								return button.index === selected ? (
									<Box
										sx={{
											backgroundColor: theme.palette.primary.main,
											borderRadius: 1.5,
										}}
										key={button.index}
									>
										{' '}
										<IconButton
											sx={{
												width: 'max-content',
												color: '#fff',
											}}
										>
											{button.icon}
										</IconButton>
									</Box>
								) : (
									<IconButton
										sx={{
											width: 'max-content',
											color:
												theme.palette.mode === 'light'
													? '#000'
													: theme.palette.text.primary,
										}}
										key={button.index}
										onClick={() => setSelected(button.index)}
									>
										{button.icon}
									</IconButton>
								);
							}
						})}
						<Divider
							orientation="horizontal"
							sx={{ width: '48px' }}
						/>
						{selected === 3 ? (
							<Box
								sx={{
									backgroundColor: theme.palette.primary.main,
									borderRadius: 1.5,
								}}
							>
								{' '}
								<IconButton
									sx={{ width: 'max-content', color: '#fff' }}
								>
									<Gear />
								</IconButton>
							</Box>
						) : (
							<IconButton
								onClick={() => setSelected(3)}
								sx={{
									width: 'max-content',
									color:
										theme.palette.mode === 'light'
											? '#000'
											: theme.palette.text.primary,
								}}
							>
								<Gear />
							</IconButton>
						)}
					</Stack>
				</Stack>

				<Stack spacing={4}>
					<AntSwitch defaultChecked onChange={() => onToggleMode()} />
					<Avatar
						mb={2}
						src={faker.image.avatar()}
						size={20}
						id="demo-positioned-button"
						aria-controls={open ? 'demo-positioned-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
						onClick={handleClick}
					/>

					<Menu
						id="demo-positioned-menu"
						aria-labelledby="demo-positioned-button"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							'aria-labelledby': 'demo-positioned-button',
						}}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'left',
						}}
						transformOrigin={{
							vertical: 'top',
							horizontal: 'left',
						}}
					>
						<Stack spacing={1} px={1}>
							{Profile_Menu.map((options) => {
								return (
									<MenuItem
										onClick={() => handleClose}
										key={options.id}
									>
										<Stack
											width={100}
											direction="row"
											alignItems="center"
											justifyContent={'space-between'}
										>
											<span> {options.title}</span>
											{options.icon}
										</Stack>
									</MenuItem>
								);
							})}
						</Stack>
					</Menu>
				</Stack>
			</Stack>
		</Box>
	);
};

export default Sidebar;
