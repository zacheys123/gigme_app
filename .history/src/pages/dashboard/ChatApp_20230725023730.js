import { Button } from '@mui/material';
import React, { Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH_DASHBOARD } from '../../routes/paths';
import Chats from './Chats';

const GeneralApp = () => {
	return (
		<>
			<Chats />
		</>
	);
};

export default GeneralApp;
