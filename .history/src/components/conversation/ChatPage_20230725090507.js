import { Box } from '@mui/material';
import React from 'react';
import { useTheme, styled } from '@mui/material/Styles';
const ChatPage = () => {
	const theme = useTheme();
	return (
		<Box p={3}>
			<Stack spacing={3}>
				{Chat_History.map((history, index) => {
					switch (history.type) {
						case 'msg':
							break;
						case 'divider':
							break;

						default:
							break;
					}
				})}
			</Stack>
		</Box>
	);
};

export default ChatPage;
