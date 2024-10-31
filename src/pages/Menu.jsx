import React, { useState } from 'react';
import Layout from "../components/LayoutComponent";
import { FaHome } from 'react-icons/fa'; 
import { MdAdd } from 'react-icons/md'; 
import MenuCard from "../components/card/MenuCard";
import AddMenuModal from '../components/card/modal/AddMenu'; 
import AddCategory from '../components/card/modal/addCategory';
import { IoMdClose } from "react-icons/io";

const MenuPage = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false); 

    const handleOpenModal = () => {
        setIsModalOpen(true);
        setDropdownOpen(false); 
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleOpenCategoryModal = () => {
        setIsCategoryModalOpen(true);
        setDropdownOpen(false); // Menutup dropdown saat modal terbuka
    };

    const handleCloseCategoryModal = () => {
        setIsCategoryModalOpen(false);
    };

    return (
        <div className="h-screen">
            <Layout>
                <div className="h-full p-4 sm:ml-64">
                    <div className="h-full p-4 rounded-lg mt-14">
                        {/* Komponen Breadcrumb */}
                        <div className="w-full bg-teal-100 border rounded-md p-4 flex justify-between items-center mb-7 relative">
                            <div className="flex items-center space-x-2">
                                <FaHome className="h-5 w-5 text-gray-500" />
                                <span>Home</span>
                                <span className="text-gray-400">/</span>
                                <span className="text-teal-500">Daftar Menu</span>
                            </div>
                            <div className="relative">
                                <button className="bg-white text-teal-600 p-2 rounded-full" onClick={() => setDropdownOpen(!dropdownOpen)}>
                                    <MdAdd className="h-5 w-5" />
                                </button>
                                {dropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg">
                                        <ul className="py-1">
                                            <li
                                                className="px-4 py-2 text-gray-700 hover:bg-teal-100 cursor-pointer"
                                                onClick={handleOpenModal}
                                            >
                                                Tambah Menu
                                            </li>
                                            <li
                                                className="px-4 py-2 text-gray-700 hover:bg-teal-100 cursor-pointer"
                                                onClick={handleOpenCategoryModal}
                                            >
                                                Tambah Kategori
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                     
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h1 className="text-xl font-semibold">Daftar Menu</h1>
                                <p className="text-gray-400">Daftar Menu yang tersedia</p>
                            </div>
                        </div>
                        <MenuCard />

                    
                        {isModalOpen && (
                            <AddMenuModal closeModal={handleCloseModal} />
                        )}

                      
                        {isCategoryModalOpen && (
                            <AddCategory closeModal={handleCloseCategoryModal} />
                        )}
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default MenuPage;
