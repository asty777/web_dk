
// import React from "react";

// const AddMenu = () => {
//   return (
//     <div className="max-w-md mx-auto rounded-lg p-6">
//       <h2 className="text-2xl font-bold mb-6 text-center">Add New Menu</h2>
//       <form>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Category ID</label>
//           <input
//             type="number"
//             name="categoryID"
//             className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//             placeholder="Enter Category ID"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Name</label>
//           <input
//             type="text"
//             name="name"
//             className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//             placeholder="Enter Menu Name"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Description</label>
//           <textarea
//             name="description"
//             className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//             placeholder="Enter Description"
//             rows="4"
//           ></textarea>
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Price</label>
//           <input
//             type="number"
//             name="price"
//             className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//             placeholder="Enter Price"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Menu Photo</label>
//           <input
//             type="file"
//             name="menuPhoto"
//             className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
//         >
//           Add Menu
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddMenu;


// import React from "react";

// const AddMenuModal = () => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl"> {/* Changed from max-w-md to max-w-xl */}
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl">Add New Menu</h2>
         
//         </div>
//         <hr className="border-t border-gray-300 mb-4" />
//         <form>
//           {/* Form Content */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="flex flex-col">
//               <label className="block text-sm font-medium text-gray-700 mb-2">Menu Photo</label>
//               <input
//                 type="file"
//                 name="menuPhoto"
//                 accept="image/*"
//                 className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//               />
//               {/* Add your image preview code here */}
//             </div>
//             <div className="flex flex-col space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Category ID</label>
//                 <input
//                   type="number"
//                   name="categoryID"
//                   className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//                   placeholder="Enter Category ID"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//                   placeholder="Enter Menu Name"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Description</label>
//                 <textarea
//                   name="description"
//                   className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//                   placeholder="Enter Description"
//                   rows="4"
//                 ></textarea>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Price</label>
//                 <input
//                   type="number"
//                   name="price"
//                   className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//                   placeholder="Enter Price"
//                 />
//               </div>
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6"
//           >
//             Add Menu
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddMenuModal;


// import React, { useState } from "react";
// import { IoMdClose } from "react-icons/io";

// const AddMenuModal = ({ closeModal }) => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState("");


//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setSelectedImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleCategoryChange = (e) => {
//     setSelectedCategory(e.target.value);
//   };


//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-10/12">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl">Tambah Menu Baru</h2>
//           <button
//             type="button"
//             onClick={closeModal}
//             className="flex items-center justify-center px-2 py-1 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             <IoMdClose className="h-5 w-5" />
//           </button>
//         </div>
//         <hr className="border-t border-gray-300 mb-4" />
//         <form>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="flex flex-col">
//               {selectedImage && (
//                 <div className="mb-4">
//                   <img
//                     src={selectedImage}
//                     alt="Preview"
//                     className="object-cover w-full h-48 rounded-lg mb-4"
//                   />
//                 </div>
//               )}
//               <label className="block text-sm font-medium text-gray-700 mb-2">Menu Photo</label>
//               <input
//                 type="file"
//                 name="menuPhoto"
//                 accept="image/*"
//                 onChange={handleImageChange}
//                 className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//               />
//             </div>
//             <div className="flex flex-col space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Category</label>
//                   <input
//                     type="text"
//                     name="categoryId"
//                     className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//                     placeholder="Kategori menu"
//                   />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Nama</label>
//                 <input
//                   type="text"
//                   name="name"
//                   className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//                   placeholder="Masukan Menu Name"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
//                 <textarea
//                   name="description"
//                   className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//                   placeholder="Masukan Deskripsi"
//                   rows="4"
//                 ></textarea>
//               </div>
              
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="w-full text-white bg-teal-300 hover:bg-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6"
//           >
//             Add Menu
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddMenuModal;

import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import api from "../../../api/config";

const AddMenuModal = ({ closeModal }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // Fetch token from localStorage
  const token = localStorage.getItem("token");

  // Fetch categories from the API when the component loads
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get("/get_categories", {
          headers: {
            Authorization: `Bearer ${token}`,
            'ngrok-skip-browser-warning': 'true' // Include token in headers
          },
        });
        setCategories(response.data.data);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };

    fetchCategories();
  }, [token]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(
        "/create_menus",
        {
          categoryId: selectedCategory,
          name,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in headers
          },
        }
      );

      console.log("Menu successfully added:", response.data);
      closeModal(); // Close the modal after successful submission
    } catch (error) {
      console.error("Failed to add menu", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-10/12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl">Tambah Menu Baru</h2>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Kategori</label>
                <select
                  name="categoryId"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                >
                  <option value="" disabled>Pilih Kategori</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Nama</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Masukan Nama Menu"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
                <textarea
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Masukan Deskripsi"
                  rows="4"
                ></textarea>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-teal-300 hover:bg-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6"
          >
            Add Menu
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMenuModal;
