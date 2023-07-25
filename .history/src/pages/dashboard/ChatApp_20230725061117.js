import { Button, Stack } from '@mui/material';
import React, { Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH_DASHBOARD } from '../../routes/paths';
import Chats from './Chats';

const ChatApp = () => {
	return (
		<Stack direction='row' sx={{width:'100%'}}>
			<Chats />
			Box
		</Stack>
	);
};

export default ChatApp;
