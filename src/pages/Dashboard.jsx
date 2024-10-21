import React from "react";
import Layout from "../components/LayoutComponent";
import TotalPesanan from "../components/card/TotalPesanan";
import TodayOrder from "../components/card/TodayOrder";
const DashboardPage = () => {
    return (
    <div>
        <Layout>
            <div className="p-4 sm:ml-64">
                <div className="p-4 rounded-lg  mt-14">
                        <div className="flex justify-between items-center">
                            <div>
                                <h1 className="text-xl font-semibold">Dashboard</h1>
                                <p className="text-gray-400">hi admin, welcome to Dika Lestari Catering Management</p>
                            </div>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mb-5 mt-4">
                            <TotalPesanan/>
                        </div>
                        <h1 className="text-xl pt-5 font-semibold">Pesanan Hari ini</h1>
                        <p className="text-gray-400">Pesanan yang masuk hari ini</p>
                        <TodayOrder/>
                        

                </div>
            </div>
        </Layout>
    </div>    
    );
};

export default DashboardPage;
