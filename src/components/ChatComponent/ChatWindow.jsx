import React from 'react';
import { IoIosSend } from "react-icons/io";

const ChatWindow = () => {
  const messages = [
    { id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', sender: 'other', time: '10:15 pm' },
    { id: 2, text: 'Dolor mollis leo proin turpis eu hac.', sender: 'self', time: '12:15 pm' },
  ];

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="flex flex-col space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === 'self' ? 'justify-end' : ''}`}>
              {message.sender === 'other' && (
                <div className="flex-shrink-0">
                  <img src="https://i.pravatar.cc/150?img=3" alt="User Avatar" className="w-10 h-10 rounded-full" />
                </div>
              )}
              <div className={`ml-3 p-3 rounded-lg shadow-sm ${message.sender === 'self' ? 'bg-teal-400 text-white' : 'bg-white'}`}>
                <p className="text-sm">{message.text}</p>
                <p className="text-xs text-gray-500">{message.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-200 p-4 flex items-center">
        <input
          type="text"
          placeholder="Write a message..."
          className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none"
        />
        <button className="ml-2 p-2 bg-teal-400 text-white rounded-full">
         <IoIosSend />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
