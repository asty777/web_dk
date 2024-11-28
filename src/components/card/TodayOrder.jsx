import React from 'react';
import Profile from "../../assets/profile.png";
import Menu from "../../assets/menu.png";

const TodayOrder = () => {
  return (
    <div className="flex items-center justify-between p-6 mt-7 bg-white rounded-lg shadow-md w-[600px] max-w-full">
       <div className="flex items-center">
            <img
                src="https://www.thaimediafund.or.th/wp-content/uploads/2024/07/default-avatar-profile-icon-.jpg"
                alt="Profile"
                className="w-14 h-14  mb-10 rounded-full object-cover"
            />
           <div className="ml-4 flex mt-7 flex-col">
                <h2 className="text-lg font-semibold text-gray-800">Asty</h2>
                <p className="text-gray-600">Menu : Tomyam</p>
                <p className="text-gray-600">Jumlah : 2</p>
                <button className="mt-2 px-1 py-2 text-xs text-white bg-[#468585] rounded-full">
                    Detail Pesanan
                </button>
            </div>

        </div>


      
      <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
        <img
          src={Menu}
          alt="Food"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default TodayOrder ;

