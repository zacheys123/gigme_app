import { Outlet } from 'react-router-dom';

import { Stack } from '@mui/material';

import Sidebar from './Sidebar';

const DashboardLayout = () => {
	return (
		<Stack direction="row">
			<Stack direction={'row'}>
				<Sidebar />
				<Outlet />
			</Stack>
		</Stack>
	);
};

export default DashboardLayout;
