import React from 'react';
import LogoTotalOrder from '../../assets/TotalPesanan.png'; 

const TotalPesanan = () => {
    return (
        <>
            <div className="max-w-sm mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-lg mt-6">
                <div className="flex items-center">
                    <div className="bg-[#e0f2eb] text-white w-24 h-24 flex items-center justify-center rounded-full">
                        <img src={LogoTotalOrder} alt="Total Pesanan" className="w-14 h-14" />
                    </div>
                    <div className="ml-4">
                        <h5 className="text-3xl font-semibold text-gray-800">75</h5>
                        <p className="text-sm text-gray-500">Total Pesanan Masuk</p>
                    </div>
                </div>
            </div>
            <div className="max-w-sm mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-lg mt-6">
                <div className="flex items-center">
                    <div className="bg-[#e0f2eb] text-white w-24 h-24 flex items-center justify-center rounded-full">
                        <img src={LogoTotalOrder} alt="Total Pesanan" className="w-14 h-14" />
                    </div>
                    <div className="ml-4">
                        <h5 className="text-3xl font-semibold text-gray-800">250</h5>
                        <p className="text-sm text-gray-500">Total Pesanan Dikirim</p>
                    </div>
                </div>
            </div>
            <div className="max-w-sm mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-lg mt-6">
                <div className="flex items-center">
                    <div className="bg-[#e0f2eb] text-white w-24 h-24 flex items-center justify-center rounded-full">
                        <img src={LogoTotalOrder} alt="Total Pesanan" className="w-14 h-14" />
                    </div>
                    <div className="ml-4">
                        <h5 className="text-3xl font-semibold text-gray-800">20</h5>
                        <p className="text-sm text-gray-500">Total Pesanan Dibatalkan</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TotalPesanan;

