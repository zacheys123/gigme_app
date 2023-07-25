import { useTheme } from '@mui/material/Styles';
import { Box } from '@mui/material';

import React from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../../assets/images/logo.ico';
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
					borderRadius: 1.5,
				}}
			>
				<Stack></Stack>
				<Box sx={{ width: 64, height: 64 }}>
					<img src={logo} alt="" />
				</Box>
			</Box>
			<Outlet />
		</>
	);
};

export default DashboardLayout;
