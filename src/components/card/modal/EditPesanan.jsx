


import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const EditPesanan = ({ closeModal }) => {
  const [status, setStatus] = useState("diterima"); 
  const [SelectedStatus, setSelectedStatus] = useState("");


  const toggleStatus = () => {
    setStatus((prevStatus) => (prevStatus === "diterima" ? "di cancel" : "diterima"));
  };

const handleCategoryChange = (e) => {
    setSelectedStatus(e.target.value);
};  


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-2/5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl">Edit Pesanan</h2>
          <button
            type="button"
            onClick={closeModal}
            className="flex items-center justify-center px-2 py-1 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <IoMdClose className="h-5 w-5" />
          </button>
        </div>
        <hr className="border-t border-gray-300 mb-4" />
        <form>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col space-y-4">
              <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <div className="flex space-x-2">
                        <button
                        type="button"
                        className={`px-3 rounded-full py-2 text-xs font-bold text-center mb-2 ${
                            SelectedStatus === 'diterima'
                            ? 'text-[#037847] bg-[#D2FBE3]'
                            : 'text-gray-500 bg-gray-200'
                        } focus:ring-4 focus:outline-none focus:ring-blue-300`}
                        onClick={() => setSelectedStatus('diterima')}
                        >
                        diterima
                        </button>
                        <button
                        type="button"
                        className={`px-3 rounded-full py-2 text-xs font-bold text-center mb-2 ${
                            SelectedStatus === 'di cancel'
                            ? 'text-[#D80027] bg-[#FBE2E2]'
                            : 'text-gray-500 bg-gray-200'
                        } focus:ring-4 focus:outline-none focus:ring-red-300`}
                        onClick={() => setSelectedStatus('di cancel')}
                        >
                        di cancel
                        </button>
                    </div>
                </div>
              {/* <div>
                     <label className="block text-sm font-medium text-gray-700">Status</label>
                    <button
                    type="button"
                    onClick={toggleStatus}
                    className={`px-20 py-2 rounded-full text-xs font-semibold ${status === "diterima" ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"}`}
                    >
                    {status}
                    </button>
              </div> */}
            </div>
          </div>


          {/* Save Changes Button */}
          <button
            type="submit"
            className="w-full text-white bg-teal-300 hover:bg-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6"
          >
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPesanan;

