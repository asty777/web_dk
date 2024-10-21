import React from 'react';
import { GoHome } from "react-icons/go";
import { FiLogOut } from "react-icons/fi"; 
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import { BiSolidFoodMenu } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

const Sidebar = ({ isSidebarOpen }) => {
  const itemAdminSidebar = [
    {
      name: "Dashboard",
      icon: GoHome,
      path: "/Dashboard",
    },
    {
      name: "Menu",
      icon: BiSolidFoodMenu,
      path: "/Menu",
    },
    {
      name: "Pesanan",
      icon: FaShoppingCart,
      path: "/Order",
    },
    {
      name: "Chat",
      icon: MdMessage,
      path: "/Chat",
    },
    {
      name: "Logout", 
      icon: FiLogOut,
      onClick: () => {},
    },
  ];

  return (
    <aside
      id="logo-sidebar"
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-8 transition-transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } bg-white border-r border-gray-200 sm:translate-x-0`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
        <div className="flex flex-col items-center">
          <Link to="/" className="flex items-center ">
            <img src={Logo} alt="Logo" className="h-12" />
            <span className="text-lg font-semibold whitespace-nowrap mb-2 ml-2">Dika Lestari Catering</span>
          </Link>
          <div className="w-full border-t border-gray-300 mb-2"></div>
        </div>
        <ul className="space-y-2 font-medium">
          {itemAdminSidebar.map((item, index) => (
            <li key={index}>
              {item.onClick ? (
                <button
                  onClick={item.onClick}
                  className="flex items-center p-2  text-[#A0AEC0] hover:text-gray-900 rounded-lg hover:bg-gray-100 group"
                >
                  <div className="flex items-center justify-center w-8 h-8 bg-white border border-gray-200 group-hover:bg-[#4FD1C5] rounded-full mr-1">
                    <item.icon
                      className="w-5 h-5 text-[#4FD1C5] group-hover:text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="ml-3">{item.name}</span>
                </button>
              ) : (
                <a
                  href={item.path}
                  className="flex items-center p-2 text-[#A0AEC0] hover:text-gray-900 rounded-lg hover:bg-gray-100 group"
                >
                  <div className="flex items-center justify-center w-8 h-8 bg-white border border-gray-200 group-hover:bg-[#4FD1C5] rounded-full mr-1">
                    <item.icon
                      className="w-5 h-5 text-[#4FD1C5] group-hover:text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="ml-3">{item.name}</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
