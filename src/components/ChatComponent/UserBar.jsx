
import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { useChat } from '../../context/chatContext';
import api from '../../api/config';

const UserBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]); 
  const [error, setError] = useState(null); 
  const { setRoomId } = useChat();

 
  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("token"); 
      try {
        
        const response = await api.get('/getMessage', {
          headers: {
            Authorization: `Bearer ${token}`,
            'ngrok-skip-browser-warning': 'true'
          },
        });
      
        console.log(response.data.data);
        
        if (response.data && response.data.data) {
          setUsers(response.data.data.friends); 
        } else {
          setError('Data tidak ditemukan');
        }
      } catch (error) {
       
        setError('Error fetching users: ' + error.message);
      }
    };

    fetchUsers(); 
  }, []);

  
  const getRoomForFriend = async (friendId) => {
    const token = localStorage.getItem("token"); 
    try {
      const response = await api.post('/getRoomId', {
        friend_id: friendId
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
          'ngrok-skip-browser-warning': 'true'
        }
      });
      console.log("Room data:", response.data.data);
      setRoomId(response.data.data.id); 
    } catch (error) {
      console.error('Error fetching room:', error);
      setError('Gagal mendapatkan room');
    }
  };

  
  const filteredUsers = Array.isArray(users) ? users.filter(user => {
    const usernameMatch = user.username && user.username.toLowerCase().includes(searchQuery.toLowerCase());
    return usernameMatch;
  }) : []; 
  return (
    <div className="w-1/4 bg-white border-r pl-2 sm:ml-64 border-gray-200 h-screen">
      <div className="p-4">
        <h2 className="text-xl font-semibold">Chat✈️</h2>
        <input
          type="text"
          placeholder="Cari..."
          className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="overflow-y-auto h-[calc(100%-108px)]">
        {error ? (
          <p className="text-red-500 p-4">{error}</p> 
        ) : (
          filteredUsers.map((user, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-4 pt-5 hover:bg-gray-200 cursor-pointer"
              onClick={() => getRoomForFriend(user.id)} 
            >
              <div className="flex items-center w-full">
                <div className="flex-shrink-0">
                  <img src='https://i.pravatar.cc/150?img=5' alt={user.username} className="w-10 h-10 rounded-full" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium">{user.username}</h3>
                  
                  <p className="text-xs text-gray-500">{user.lastChat || 'No recent chat'}</p>
                </div>
              </div>
              <div className="w-full border-b border-gray-300 mt-2"></div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserBar;
