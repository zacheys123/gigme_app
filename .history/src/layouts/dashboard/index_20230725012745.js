import { useTheme } from '@mui/material/Styles';
import { Box, Divider, IconButton } from '@mui/material';

import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../../assets/Images/logo.ico';
import { Stack } from '@mui/material';
import { Nav_Buttons } from '../../data';
import { Gear } from 'phosphor-react';
const DashboardLayout = () => {
	const theme = useTheme();
	const [selected, setSelected] = useState(0);
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
					spacing={5}
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
					</Box>
					<Stack
						alignItems="center"
						sx={{ width: 'max-content' }}
						spacing={3}
					>
						{Nav_Buttons.map((button) => {
							{
								return button.index === selected ? (
									<Box
										sx={{
											backgroundColor: theme.palette.primary.main,
											borderRadius: 1.5,
										}}
									>
										{' '}
										<IconButton
											sx={{ width: 'max-content', color: '#fff' }}
											key={button.index}
											onClick={() =>
												setSelected((prev) => prev === button.index)
											}
										>
											{button.icon}
										</IconButton>
									</Box>
								) : (
									<IconButton
										sx={{ width: 'max-content', color: '#000' }}
										key={button.index}
							
										}
									>
										{button.icon}
									</IconButton>
								);
							}
						})}
						<Divider orientation="horizontal" />
						<IconButton>
							<Gear />
						</IconButton>
					</Stack>
				</Stack>
			</Box>
			<Outlet />
		</>
	);
};

export default DashboardLayout;
