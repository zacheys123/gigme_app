import React from 'react';
import { Outlet } from 'react-router-dom';

const Main_App = () => {
	return (
		<>
		<Sidebar/>
			<Outlet />
		</>
	);
};

export default Main_App;
