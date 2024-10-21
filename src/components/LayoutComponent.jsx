import React, { useState } from "react";
import Sidebar from "./Layout/Sidebar";

const Layout = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="grid grid-cols-[auto,1fr] h-screen bg-white">
            <Sidebar isSidebarOpen={isSidebarOpen} />
        
            <div className="flex flex-col w-full h-full overflow-hidden">
               
                <main className="p-0 pl-2 flex-grow h-screen overflow-auto w-screen border border-gray-200 bg-slate-100">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;

