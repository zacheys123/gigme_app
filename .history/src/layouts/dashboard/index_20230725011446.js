import { useTheme } from '@mui/material/Styles';
import { Box, Divider, IconButton } from '@mui/material';

import React from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../../assets/Images/logo.ico';
import { Stack } from '@mui/material';
import { Nav_Buttons } from '../../data';
import { Gear } from 'phosphor-react';
const DashboardLayout = () => {
	const theme = useTheme();
	const [seleted, setSelected] = useState();
	return (
		<>
			<Box
				sx={{
					backgroundColor: theme.palette.background.paper,
					boxShadow: '0px 0px 2px rgba(0,0,0.25)',
					height: '100vh',
					width: 100,
				}}
			>
				<Stack
					direction="column"
					alignItems="center"
					sx={{ width: '100%' }}
					spacing={3}
				>
					<Box
						sx={{
							borderRadius: 1.5,
							backgroundColor: theme.palette.primary.main,
							width: 64,
							height: 64,
						}}
					>
						<img src={logo} alt="" />

						<Stack
							alignItems="center"
							sx={{ width: 'max-content' }}
							spacing={3}
						>
							{Nav_Buttons.map((button) => {
								return (
									<IconButton key={button.id}>
										{button.icon}
									</IconButton>
								);
							})}
							<Divider orientation="horizontal" />
							<IconButton>
								<Gear />
							</IconButton>
						</Stack>
					</Box>
				</Stack>
			</Box>
			<Outlet />
		</>
	);
};

export default DashboardLayout;
