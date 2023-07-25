import { Box, useTheme } from '@mui/material';
import { useTheme } from '@mui/material/Styles';
import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
	const theme = useTheme();
	return (
		<>
			<Box
				sx={{
					background: theme.pallete.background.paper,
					height: '100vh',
					width: 100,
				}}
			></Box>
			<Outlet />
		</>
	);
};

export default DashboardLayout;
