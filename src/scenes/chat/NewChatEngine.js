import React from 'react'

import { ChatEngineWrapper, Socket, ChatList, ChatFeed, ChatSettings } from 'react-chat-engine'

import { Col } from 'react-grid-system'
import { tokens } from "../../theme";
import {useTheme } from "@mui/material";

const ChatEngine = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <ChatEngineWrapper>
            <Socket 
                projectID="27c8c183-47b3-4c97-81fa-9ea60699f616"
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
            />

            <Col xs={0} sm={3}>
                <ChatList />
            </Col>

            <Col xs={12} sm={6}>
                <ChatFeed />
            </Col>

            <Col xs={0} sm={3}>
                <ChatSettings />
            </Col>
        </ChatEngineWrapper>
    )
}

export default ChatEngine