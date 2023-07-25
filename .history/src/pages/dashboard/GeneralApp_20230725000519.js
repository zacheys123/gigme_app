import { Button } from '@mui/material';
import React, { Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH_DASHBOARD } from '../../routes/paths';

const GeneralApp = () => {
	const nav = useNavigate();
	return (
		<>
			<Button onClick={() => nav(PATH_DASHBOARD.general.auth)}>
				About us
			</Button>
		</>
	);
};

export default GeneralApp;
