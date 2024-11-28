

import React, { useEffect, useState } from 'react';
import Layout from "../components/LayoutComponent";
import { FaHome } from 'react-icons/fa'; 
import ProfileCust from "../assets/turningred.jpg";
import Menu from "../assets/menu.png";
import { MdAdd } from 'react-icons/md';
import PdfGenerator from '../components/invoice/invoice';
import api from '../api/config';
import { useParams } from 'react-router-dom'; 

const DetailOrderPage = () => {
    const { id } = useParams();  
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        const fetchOrders = async () => {
            try {

                const token = localStorage.getItem("token");
                const response = await api.get(`/getOrderId/${id}`, { 
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

        if (id) { 
            fetchOrders();
        }

    }, [id]);  

    return (
        <Layout>
            <div className="sm:ml-64">
                <div className="h-full p-4 rounded-lg mt-7">
                    <div className="w-full bg-teal-100 border rounded-md p-4 flex justify-between items-center mb-7">
                        <div className="flex items-center space-x-2">
                            <FaHome className="h-5 w-5 text-gray-500" />
                            <span>Home</span>
                            <span className="text-gray-400">/</span>
                            <span className="text-teal-500">Detail Pesanan</span>
                        </div>
                        <button className="bg-white text-teal-600 p-2 rounded-full">
                            <MdAdd className="h-5 w-5" />
                        </button>
                    </div>

                    {orders.length > 0 ? (
                        orders.map((order, index) => (
                            <div key={order.id} className="bg-white p-6 rounded-md shadow-md overflow-hidden mb-6">
                                <h2 className="text-xl font-bold mb-4">Order ID {order.id}</h2>
                                <p className="text-gray-600 mb-6">Detail Pesanan</p>

                                <div className="flex mb-6">
                                    <div className="w-1/3 bg-slate-50 p-4 rounded-md relative overflow-hidden">
                                        <img src="https://www.thaimediafund.or.th/wp-content/uploads/2024/07/default-avatar-profile-icon-.jp" alt="Customer Profile" className="rounded-full w-40 h-36 mx-auto mb-4" />
                                        <h3 className="text-center text-lg font-semibold">Asty</h3>
                                        <div className="flex justify-center mt-2">
                                            <button 
                                                type="button" 
                                                className="px-3 rounded-full py-2 text-xs font-bold text-center text-[#037847] bg-[#D2FBE3] focus:ring-4 focus:outline-none focus:ring-blue-300"
                                            >
                                                {order.status_id}
                                            </button>
                                        </div>

                                        <div className="bg-[#D8E6E9] rounded-t-lg p-7 rounded-md mt-4 -mx-4 -mb-4 relative">
                                            <h4 className="font-semibold text-gray-600">Alamat</h4>
                                            <p className="text-sm text-gray-500">{order.address}</p>
                                        </div>
                                    </div>

                                    <div className="w-2/3 pl-6">
                                        <div className="bg-[#D8E6E9] p-4 rounded-md">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead>
                                                    <tr>
                                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">No</th>
                                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Item</th>
                                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">QTY</th>
                                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Harga</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {order.items.map((item, itemIndex) => (
                                                        <tr key={itemIndex} className={itemIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                                            <td className="px-4 py-2 text-sm font-medium text-gray-900">{itemIndex + 1}</td>
                                                            <td className="px-4 py-2 flex items-center">
                                                                <img src={Menu} alt={item.name} className="rounded-full w-20 h-20 mr-4" />
                                                                <div>
                                                                    <p className="text-xs font-medium text-green-600">{item.category}</p>
                                                                    <p className="text-sm font-medium text-gray-900">{item.name}</p>
                                                                </div>
                                                            </td>
                                                            <td className="px-4 py-2 text-sm text-gray-600">{item.quantity}x</td>
                                                            <td className="px-4 py-2 text-sm font-medium text-gray-900">{item.price}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            
                                            <div className="flex items-center justify-between mt-4">
                                                <button className="text-gray-600 font-medium">Lihat Bukti Pembayaran</button>
                                                <p className="text-right text-base font-semibold">TOTAL HARGA : {order.total_price}</p>
                                            </div>

                                            <div className="flex justify-end mt-4">
                                                <PdfGenerator /> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading order details...</p>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default DetailOrderPage;

