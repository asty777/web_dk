

import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import api from "../../../api/config";

const AddMenuModal = ({ closeModal }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); 
  const [successMessage, setSuccessMessage] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get("/get_categories", {
          headers: {
            Authorization: `Bearer ${token}`,
            'ngrok-skip-browser-warning': 'true',
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file)); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("categoryId", selectedCategory);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);

    try {
      const response = await api.post("/create_menus", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setSuccessMessage("Menu successfully added!");
      setTimeout(() => {
        setSuccessMessage("");
        closeModal();
      }, 2000);
    } catch (error) {
      console.error("Failed to add menu", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-10/12 md:w-8/12 lg:w-6/12">
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
        {successMessage && (
          <div className="bg-green-100 text-green-700 p-2 rounded mb-4">
            {successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Gambar</label>
              <input
                type="file"
                name="image"
                onChange={handleImageChange}
                className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                accept="image/*"
              />
              {imagePreview && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600">Preview Foto Menu :</p>
                  <img src={imagePreview} alt="Preview" className="w-full h-auto mt-2 rounded-lg" />
                </div>
              )}
            </div>
        
            <div className="space-y-4">
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
