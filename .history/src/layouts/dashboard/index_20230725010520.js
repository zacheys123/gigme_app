import { useTheme } from '@mui/material/Styles';
import { Box, IconButton } from '@mui/material';

import React from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../../assets/Images/logo.ico';
import { Stack } from '@mui/material';
import { Nav_Buttons } from '../../data';
const DashboardLayout = () => {
	const theme = useTheme();

	return (
		<>
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
					sx={{ width: '100%' }}
				>
					<Box
						sx={{
							borderRadius: 1.5,
							backgroundColor: theme.palette.primary.main,
							width: 64,
							height: 64,
						}}
					>
						<img src={logo} alt="" />

						<Box>
							{Nav_Buttons.map((button) => {
								return <IconButton>{button.icon}</IconButton>;
							})}
						</Box>
					</Box>
				</Stack>
			</Box>
			<Outlet />
		</>
	);
};

export default DashboardLayout;
