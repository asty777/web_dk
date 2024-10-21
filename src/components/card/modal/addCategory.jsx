// import React, { useState } from "react";
// import { IoMdClose } from "react-icons/io";
// import api from "../../../api/config";

// const AddCategory = ({ closeModal }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await api.post(
//         '/create_categories', 
//         formData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             'Authorization':` Bearer ${token},`
            
//           },
//         }
//       );

//       if (response.status === 200) {
//         setFormData({ name: "", description: "" });
//         closeModal();
//       } else {
//         console.error("Failed to add category");
//       }
//     } catch (error) {
//       console.error("An error occurred:", error);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-2/5">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl">Add New Category</h2>
//           <button
//             type="button"
//             onClick={closeModal}
//             className="flex items-center justify-center px-2 py-1 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             <IoMdClose className="h-5 w-5" />
//           </button>
//         </div>
//         <hr className="border-t border-gray-300 mb-4" />
//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 gap-4">
//             <div className="flex flex-col space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//                   placeholder="Enter category name"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Description</label>
//                 <textarea
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//                   placeholder="Enter Description"
//                   rows="4"
//                   required
//                 ></textarea>
//               </div>
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="w-full text-white bg-teal-300 hover:bg-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6"
//           >
//             Add Category
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddCategory;

import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import api from "../../../api/config";

const AddCategory = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token'); // Retrieve the token from local storage

    if (!token) {
        console.error("Token tidak ditemukan, silakan login terlebih dahulu.");
        return; // Early return if no token
    }

    try {
        const response = await api.post(
            '/create_categories',
            formData,
            {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`,
                },
            }
        );
        

        if (response.status === 200|| response.status === 201) {
            setFormData({ name: "", description: "" });
            closeModal();
        } else {
            console.error("Failed to add category");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
};

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-2/5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl">Add New Category</h2>
          <button
            type="button"
            onClick={closeModal}
            className="flex items-center justify-center px-2 py-1 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <IoMdClose className="h-5 w-5" />
          </button>
        </div>
        <hr className="border-t border-gray-300 mb-4" />
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Enter category name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Enter Description"
                  rows="4"
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-teal-300 hover:bg-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6"
          >
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
