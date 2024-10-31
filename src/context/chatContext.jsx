// src/context/ChatContext.js
import React, { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [roomId, setRoomId] = useState(null); // Initialize roomId
  const [messages, setMessages] = useState([]); // Initialize messages as an empty array

  return (
    <ChatContext.Provider value={{ roomId, setRoomId, messages, setMessages }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
