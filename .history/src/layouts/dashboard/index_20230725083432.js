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

const DashboardLayout = () => {
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
