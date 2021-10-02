import React from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';

const Chats = () => {
    const history = useHistory();

    const handleLogout = async() => {
        await auth.signOut();
        history.push('/');
    }

    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    MyChat
                </div>
                <div onClick = {handleLogout} className="logout-tab">
                    Logout
                </div>
                <ChatEngine 
                    height = "calc(100vh - 66px)"
                    projectId = "db5e0228-e9b4-4aff-bedc-8e4d962dc93a"
                    userName = "."
                    userSecret = "."
                />
            </div>
        </div>
    )
}

export default Chats
