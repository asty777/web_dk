import React, { useState } from 'react';

const UserBar = () => {
  const users = [
    { name: 'Marvin McKinney', lastChat: 'bisa order', avatar: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Jacob Jones', lastChat: 'saya mau pesan 1000', avatar: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Leslie Alexander', lastChat: 'harganya berapa ya?', avatar: 'https://i.pravatar.cc/150?img=3' },
    { name: 'Eleanor Pena', lastChat: 'kirim ke jalan upin-ipin', avatar: 'https://i.pravatar.cc/150?img=4' },
    { name: 'Kathryn Murphy', lastChat: 'saya sudah pesan ya', avatar: 'https://i.pravatar.cc/150?img=5' },
    { name: 'Wade Warren', lastChat: 'sudah saya tf ya', avatar: 'https://i.pravatar.cc/150?img=6' },
    { name: 'Marvin McKinney', lastChat: 'bisa order', avatar: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Jacob Jones', lastChat: 'saya mau pesan 1000', avatar: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Leslie Alexander', lastChat: 'harganya berapa ya?', avatar: 'https://i.pravatar.cc/150?img=3' },
    { name: 'Eleanor Pena', lastChat: 'kirim ke jalan upin-ipin', avatar: 'https://i.pravatar.cc/150?img=4' },
  ];

  const [searchQuery, setSearchQuery] = useState('');

 
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.lastChat.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-1/4 bg-white border-r pl-2 sm:ml-64 border-gray-200 h-screen">
      <div className="p-4">
        <h2 className="text-xl font-semibold">Chat✈️</h2>
        <input
          type="text"
          placeholder="Search..."
          className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="overflow-y-auto h-[calc(100%-108px)]">
        {filteredUsers.map((user, index) => (
          <div key={index} className="flex flex-col items-start p-4 pt-5 hover:bg-gray-200 cursor-pointer">
            <div className="flex items-center w-full">
              <div className="flex-shrink-0">
                <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium">{user.name}</h3>
                <p className="text-xs text-gray-500 ">{user.lastChat}</p>
              </div>
            </div>
            <div className="w-full border-b border-gray-300 mt-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserBar;
