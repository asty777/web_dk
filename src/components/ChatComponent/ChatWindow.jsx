import React, { useEffect, useState } from 'react';
import { useChat } from '../../context/chatContext';
import axios from 'axios';
import { TbMessage } from "react-icons/tb";
import { IoIosSend } from "react-icons/io";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import Pusher from 'pusher-js';
import OrderModal from '../card/modal/OrderForm';
import api from '../../api/config';

const ChatWindow = () => {
  const { roomId, messages, setMessages } = useChat();
  const [newMessage, setNewMessage] = useState(''); 
  const [userInfo, setUserInfo] = useState({ name: 'Asty', avatar: 'https://www.thaimediafund.or.th/wp-content/uploads/2024/07/default-avatar-profile-icon-.jpg' }); // Mock user info
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedUserId, setSelectedUserId] = useState(null); 
  const [userId, setUserId] = useState([]);

  
  const loadMessages = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await api.get(`/loadMessage/${roomId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'ngrok-skip-browser-warning': 'true'
        }
      });
      console.log(response.data.data[0].user_id);
      
      if (response.data.status) {
        setMessages(response.data.data);
        setUserId(response.data.data[0].user_id) 
      }
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  };

  useEffect(() => {
    if (roomId) {
      loadMessages();
      const interval = setInterval(loadMessages, 1000);
      return () => clearInterval(interval); 
    }
  }, [roomId]);

  useEffect(() => {
    if (!roomId) return;

    const pusher = new Pusher('3882f51bb9008b1a1616', {
      cluster: 'ap1',
      forceTLS: true
    });

    const channel = pusher.subscribe(`chat-room-${roomId}`);
    channel.bind('message', (data) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: data.id,
          text: data.message,
          sender: data.sender,
          time: data.time,
        },
      ]);
    });

    return () => {
      pusher.unsubscribe(`chat-room-${roomId}`);
    };
  }, [roomId]);

  const handleSendMessage = async () => {
    if (newMessage.trim() === '') {
      console.warn('Cannot send an empty message');
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await api.post(
        '/sendMessage',
        {
          room_id: roomId,
          message: newMessage
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'ngrok-skip-browser-warning': 'true'
          }
        }
      );

      if (response.data.status) {
        setNewMessage(''); 
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  
  const toggleModal = () => {
    if (userId) { 
      setSelectedUserId(userId);
      setIsModalOpen((prev) => !prev);
    } else {
      console.error("User ID is undefined");
    }
  };


  return (
    <div className={`flex-1 flex flex-col ${!roomId ? 'bg-white justify-center items-center' : ''}`}>
      {!roomId ? (
        <div className="text-center">
          <TbMessage className="text-gray-300 w-32 h-32 mb-4 mx-auto" /> {/* Centered icon */}
          <p className="text-gray-600 text-xl">Please select a room to start chatting</p>
        </div>
      ) : (
        <>
       
          <div className="flex items-center p-4 border-b bg-white border-gray-200">
            <img
              src={userInfo.avatar}
              alt="Profile"
              className="w-10 h-10 rounded-full mr-3"
            />
            <h2 className="text-lg font-semibold">{userInfo.name}</h2>
          </div>

        
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="flex flex-col space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.user_id === 1 ? 'justify-end' : ''}`}>
                  {message.user_id !== 1 && (
                    <div className="flex-shrink-0">
                      <img src={userInfo.avatar} alt="User Avatar" className="w-10 h-10 rounded-full" />
                    </div>
                  )}
                  <div className={`ml-3 p-3 rounded-lg shadow-sm ${message.user_id === 1 ? 'bg-teal-400 text-white' : 'bg-white'}`}>
                    <p className="text-sm">{message.message}</p>
                    <p className="text-xs text-gray-500">{message.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="border-t border-gray-200 p-4 flex items-center">
            <button className="mr-2 p-2 bg-teal-400 text-white rounded-full" onClick={() => toggleModal(userInfo.user_id)}>
              <MdOutlineRestaurantMenu />
            </button>
            <input
              type="text"
              placeholder="Ketik Sebuah Pesan..."
              className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button className="ml-2 p-2 bg-teal-400 text-white rounded-full" onClick={handleSendMessage}>
              <IoIosSend />
            </button>
          </div>
        </>
      )}

      {isModalOpen && <OrderModal closeModal={toggleModal} orderData={{ menuName: '', quantity: 1, price: 0 }} user_id={selectedUserId} />}
      
    </div>
  );
};

export default ChatWindow;