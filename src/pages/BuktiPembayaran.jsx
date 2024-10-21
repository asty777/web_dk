import React from 'react';
import { Link } from 'react-router-dom';
import Layout from "../components/LayoutComponent";
import { FaCheckCircle, FaTimesCircle, FaArrowLeft, FaHome } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md';
import proofImage from "../assets/pembayaran.png"; 

const PembayaranPage = () => {
    return (
        <Layout>
            <div className="p-6 sm:ml-64 bg-gray-100 min-h-screen">
              <div className="w-full bg-gradient-to-r from-teal-300 to-teal-100 border-b border-teal-200 rounded-md p-4 mb-8 shadow-lg flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-gray-700">
                        <FaHome className="h-5 w-5" />
                        <span>Home</span>
                        <span className="text-gray-400">/</span>
                        <span className="text-teal-600 font-semibold">Payment Proof</span>
                    </div>
                    <button className="bg-teal-500 text-white p-2 rounded-full shadow-md hover:bg-teal-600 transition duration-300 ease-in-out">
                        <MdAdd className="h-5 w-5" />
                    </button>
                </div>

                <div className="bg-white shadow-lg rounded-xl max-w-4xl mx-auto p-8 mt-8 border border-gray-200">
                    {/* <div className="flex items-center mb-6">
                        <Link to="/order-details" className="text-blue-600 flex items-center hover:underline">
                            <FaArrowLeft className="mr-2 text-lg" /> Back to Order Details
                        </Link>
                    </div> */}

                    <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Payment Proof</h1>

                    <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-300">
                        <div className="mb-6">
                            <p className="text-gray-700 font-semibold text-lg">Order ID: <span className="font-normal">#12345</span></p>
                            <p className="text-gray-600">Customer: <span className="font-normal">John Doe</span></p>
                            <p className="text-gray-600">Amount: <span className="font-normal">$123.45</span></p>
                            <p className="text-gray-600">Payment Date: <span className="font-normal">August 26, 2024</span></p>
                            <p className="text-gray-600">Transaction ID: <span className="font-normal">TXN987654321</span></p>
                            <p className="text-gray-600 mt-2">Additional Notes: <span className="font-normal">Payment completed successfully without issues.</span></p>
                        </div>
                        <div className="flex justify-center mb-6">
                            <img
                                src={proofImage}
                                alt="Payment Proof"
                                className="w-46 max-w-md h-auto rounded-lg shadow-lg border border-gray-300"
                            />
                        </div>
                        {/* <div className="text-center">
                            <p className="text-2xl font-semibold text-gray-700 mb-4">
                                Payment proof has been verified.
                            </p>
                            <div className="flex justify-center gap-4">
                                <button className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 ease-in-out">
                                    Approve
                                </button>
                                <button className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-red-600 transition duration-300 ease-in-out">
                                    Reject
                                </button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default PembayaranPage;
