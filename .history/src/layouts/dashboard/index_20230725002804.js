import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
	return (
		<>
			<Box
				sx={{ background: 'black', height: '100vh', width: '100px' }}
			></Box>
			<Outlet />
		</>
	);
};

export default DashboardLayout;
