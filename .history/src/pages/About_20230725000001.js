import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
	const nav = useNavigate();
	return (
		<div>
			<Button onClick={() => nav()}> </Button>
		</div>
	);
};

export default About;
