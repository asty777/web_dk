import React, { useState, useEffect } from 'react';
import { FaEdit } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import Layout from "../components/LayoutComponent";
import { FaHome } from 'react-icons/fa'; 
import { MdAdd } from 'react-icons/md'; 
import EditPesanan from "../components/card/modal/EditPesanan";
import { useNavigate } from 'react-router-dom';
import api from '../api/config';

const OrderPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [ordersPerPage] = useState(10);  // Adjust the number of orders per page
    const navigate = useNavigate();

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await api.get("/getAllOrder", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "ngrok-skip-browser-warning": "true",
                        Accept: "application/json",
                    },
                });
                setOrders(response.data.data); 
                console.log(response.data.data);
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        };
        fetchOrders();
    }, []);

    // Pagination logic
    const indexOfLastItem = currentPage * ordersPerPage;
    const indexOfFirstItem = indexOfLastItem - ordersPerPage;
    const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);

    // Page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(orders.length / ordersPerPage); i++) {
        pageNumbers.push(i);
    }

    // Change page handler
    const handlePageChange = (number) => {
        setCurrentPage(number);
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleDetailOrder = (id) => {
        navigate(`/DetailOrder/${id}`);
    };
    
    return (
        <div className="h-screen">
            <Layout>
                <div className="h-full p-4 sm:ml-64">
                    <div className="h-full p-4 rounded-lg mt-14">
                        <div className="w-full bg-teal-100 border rounded-md p-4 flex justify-between items-center mb-7">
                            <div className="flex items-center space-x-2">
                                <FaHome className="h-5 w-5 text-gray-500" />
                                <span>Home</span>
                                <span className="text-gray-400">/</span>
                                <span className="text-teal-500">Daftar Pesanan</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h1 className="text-xl font-semibold">Daftar Orderan</h1>
                                <p className="text-gray-400">Pesanan yang masuk</p>
                            </div>
                        </div>

                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-[#EAF0F0]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">No</th>
                                        <th scope="col" className="px-6 py-3">Nama</th>
                                        <th scope="col" className="px-6 py-3">Tanggal</th>
                                        <th scope="col" className="px-6 py-3">Alamat</th>
                                        <th scope="col" className="px-6 py-3">Total Harga</th>
                                        <th scope="col" className="px-6 py-3">Status Order</th>
                                        <th scope="col" className="px-6 py-3"><span className="sr-only">Actions</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentOrders.map((order, index) => (
                                        <tr key={order.id} className="bg-white border-b hover:bg-gray-50">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                {index + 1}
                                            </th>
                                            <td className="px-6 py-4 text-gray-600">
                                                {order.cart_id.user_id?.username || 'Asty'}
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">
                                                {new Date(order.created_at).toLocaleDateString('id-ID')}
                                            </td>

                                            <td className="px-6 py-4 text-gray-600 max-w-xs">
                                                <p className="break-words">{order.address || 'N/A'}</p>
                                            </td>

                                            <td className="px-6 py-4 text-gray-600">
                                                Rp. {order.total_price ? new Intl.NumberFormat('id-ID').format(order.total_price) : 'N/A'}
                                            </td>

                                            <td className="px-6 py-4">
                                                <button 
                                                    type="button" 
                                                    className={`px-3 rounded-full py-2 text-xs font-bold text-center mb-2 ${
                                                        order.status_id === 2 ? 'text-yellow-600 bg-yellow-100' : 
                                                        order.status_id === 1 ? 'text-blue-600 bg-blue-100' : 
                                                        order.status_id === 3 ? 'text-[#037847] bg-[#D2FBE3]' : 
                                                        'text-red-600 bg-red-100'
                                                    }`}
                                                >
                                                    {order.status_id === 1 ? 'Di Proses' : 
                                                    order.status_id === 2 ? 'Belum Bayar' : 
                                                    order.status_id === 3 ? 'Diterima' : 
                                                    'Cancel'}
                                                </button>
                                            </td>

                                            <td className="px-6 py-4 flex space-x-2 justify-end">
                                                <button 
                                                    onClick={handleOpenModal}
                                                    className="p-2 rounded-full bg-white text-[#4FD1C5] hover:text-white hover:bg-[#4FD1C5] focus:outline-none">
                                                    <FaEdit className="h-5 w-5" />
                                                </button>
                                                <button 
                                                    onClick={() => handleDetailOrder(order.id)}
                                                    className="p-2 rounded-full bg-white text-[#4FD1C5] hover:text-white hover:bg-[#4FD1C5] focus:outline-none">
                                                    <CiCircleMore className="h-5 w-5" />
                                                   
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination Component */}
                        <nav className="flex items-center flex-col flex-wrap md:flex-row justify-between pt-4 pb-12" aria-label="Table navigation">
                            <span className="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                                Showing <span className="font-semibold text-gray-900">{indexOfFirstItem + 1}-{Math.min(indexOfLastItem, orders.length)}</span> of <span className="font-semibold text-gray-900">{orders.length}</span>
                            </span>
                            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                                {pageNumbers.map((number) => (
                                    <li key={number}>
                                        <a
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handlePageChange(number);
                                            }}
                                            className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 rounded-full bg-white border border-gray-300 hover:bg-teal-500 hover:text-white ${currentPage === number ? "text-blue-600 bg-blue-50 hover:bg-blue-100" : ""}`}
                                        >
                                            {number}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {isModalOpen && (
                            <EditPesanan closeModal={handleCloseModal} />
                        )}
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default OrderPage;
