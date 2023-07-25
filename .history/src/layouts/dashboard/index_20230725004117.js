import { useTheme } from '@mui/material/Styles';
import { Box } from '@mui/material';

import React from 'react';
import { Outlet } from 'react-router-dom';

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
				Box
			</Box>
			<Outlet />
		</>
	);
};

export default DashboardLayout;
