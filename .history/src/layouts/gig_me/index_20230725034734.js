import React from 'react';
import { Outlet } from 'react-router-dom';

const Main_App = () => {
	return (
		<>
			<Home />

			<Outlet />
		</>
	);
};

export default Main_App;
