import { useTheme, styled } from '@mui/material/Styles';
import {
	Avatar,
	Box,
	Divider,
	IconButton,
	Switch,
} from '@mui/material';

import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../../assets/Images/logo.ico';
import { Stack } from '@mui/material';
import { Nav_Buttons } from '../../data';
import { Gear } from 'phosphor-react';
import { faker } from '@faker-js/faker';
import useSettings from '../../hooks/useSettings';
import Sidebar from './Sidebar';

const AntSwitch = styled(Switch)(({ theme }) => ({
	width: 45,
	height: 20,
	padding: 0,
	display: 'flex',
	'&:active': {
		'& .MuiSwitch-thumb': {
			width: 15,
		},
		'& .MuiSwitch-switchBase.Mui-checked': {
			transform: 'translateX(9px)',
		},
	},
	'& .MuiSwitch-switchBase': {
		padding: 2,
		'&.Mui-checked': {
			transform: 'translateX(26px)',
			color: '#fff',
			'& + .MuiSwitch-track': {
				opacity: 1,
				backgroundColor:
					theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
			},
		},
	},
	'& .MuiSwitch-thumb': {
		boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
		width: 16,
		height: 16,
		borderRadius: 8,
		transition: theme.transitions.create(['width'], {
			duration: 200,
		}),
	},
	'& .MuiSwitch-track': {
		borderRadius: 20 / 2,
		opacity: 1,
		backgroundColor:
			theme.palette.mode === 'dark'
				? 'rgba(255,255,255,.35)'
				: 'rgba(0,0,0,.25)',
		boxSizing: 'border-box',
	},
}));
const DashboardLayout = () => {
	const theme = useTheme();
	const [selected, setSelected] = useState(0);
	const { onToggleMode } = useSettings();
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
