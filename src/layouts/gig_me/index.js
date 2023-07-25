import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../pages/main_app/Sidebar';

const Main_App = () => {
	return (
		<>
			<Sidebar />
			<Outlet />
		</>
	);
};

export default Main_App;
