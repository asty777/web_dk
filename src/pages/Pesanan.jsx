

import React, { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import Layout from "../components/LayoutComponent";
import { FaHome } from 'react-icons/fa'; 
import { MdAdd } from 'react-icons/md'; 
import EditPesanan from "../components/card/modal/EditPesanan";

const OrderPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
        setDropdownOpen(false); 
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div className="h-screen">
                <Layout>
                    <div className="h-full  p-4 sm:ml-64">
                        <div className="h-full p-4 rounded-lg mt-14">
                            <div className="w-full bg-teal-100 border rounded-md p-4 flex justify-between items-center mb-7">
                                <div className="flex items-center space-x-2">
                                    <FaHome className="h-5 w-5 text-gray-500" />
                                    <span>Home</span>
                                    <span className="text-gray-400">/</span>
                                    <span className="text-teal-500">Task 1</span>
                                </div>
                                <button className="bg-white text-teal-600 p-2 rounded-full">
                                    <MdAdd className="h-5 w-5" />
                                </button>
                            </div>
                            <div className="flex justify-between items-center mb-8">
                                <div>
                                    <h1 className="text-xl font-semibold">Daftar Orderan</h1>
                                    <p className="text-gray-400">Orderan yang masuk</p>
                                </div>
                            </div>

                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-[#EAF0F0]">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                No
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                OrderID
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Tanggal
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Nama
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Lokasi
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Total Harga
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Status Order
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white border-b hover:bg-gray-50">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                1
                                            </th>
                                            <td className="px-6 py-4 text-gray-600">
                                                #128080
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">
                                                15/08/2024
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">
                                                Buzz Lightyear
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">
                                                jl.ddkdkddm
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">
                                                RP. 100.000
                                            </td>
                                            <td className="px-6 py-4">
                                                <button type="button" className="px-3 rounded-full py-2 text-xs font-bold text-center mb-2 text-[#037847] bg-[#D2FBE3] focus:ring-4 focus:outline-none focus:ring-blue-300">
                                                    diterima
                                                </button>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button 
                                                onClick={handleOpenModal}
                                                className="p-2 rounded-full bg-white text-[#4FD1C5] hover:text-white hover:bg-[#4FD1C5] focus:outline-none">
                                                  
                                                    <FaEdit className="h-5 w-5" />
                                                </button>
                                            </td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {isModalOpen && (
                            <EditPesanan closeModal={handleCloseModal} />
                        )}

                        </div>
                    </div>
                </Layout>
            </div>
        </>
    );
};

export default OrderPage;
