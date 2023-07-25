import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH_DASHBOARD } from '../routes/paths';

const About = () => {
	const nav = useNavigate();
	return (
		<div>
			<Button onClick={() => nav(PATH_DASHBOARD.general.app)}>
				Go to dashboard
			</Button>
		</div>
	);
};

export default About;
