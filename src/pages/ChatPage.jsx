import React from 'react';
import Layout from '../components/LayoutComponent';
import UserBar from '../components/ChatComponent/UserBar';
import ChatWindow from '../components/ChatComponent/ChatWindow';

const Chat = () => {
  return (
    <Layout>
      <div className="flex h-screen bg-gray-100">
        <UserBar />
        <ChatWindow />
      </div>
    </Layout>
  );
};

export default Chat;



