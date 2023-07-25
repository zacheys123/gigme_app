import React from 'react';
import { Outlet } from 'react-router-dom';

const Main_App = () => {
	return (
		<>
			<div>Main Layout</div>

			<Outlet />
		</>
	);
};

export default Main_App;
