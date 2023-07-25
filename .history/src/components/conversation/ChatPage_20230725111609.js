import { Box, Stack } from '@mui/material';
import React from 'react';
import { useTheme, styled } from '@mui/material/styles';
import { Chat_History } from '../../data';

import {
	Timeline,
	Text_Message,
	Media_Message,
	Replay_Message,
} from './Message_Types';
const ChatPage = () => {
	const theme = useTheme();
	console.log(Chat_History);
	return (
		<>
			<Stack>
				{Chat_History.map((history, index) => {
					switch (history.type) {
						case 'divider':
							return <Timeline history={history} />;

						case 'msg':
							switch (history.subtype) {
								case 'img':
									return <Media_Message history={history} />;

								case 'doc':
									// doc message
									break;
								case 'link':
									// link message
									break;
								case 'reply':
									// reply message
									break;
								default:
									return <Text_Message history={history} />;
							}
							break;
						default:
							<></>;
					}
				})}
			</Stack>
		</>
	);
};

export default ChatPage;
