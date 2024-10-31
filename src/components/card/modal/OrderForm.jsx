import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import api from "../../../api/config";
import axios from "axios";

const OrderModal = ({ closeModal, fetchCart, user_id }) => {
  const [formData, setFormData] = useState({
    menuName: "",
    quantity: 1,
    price: 0,
  });
  const [cartId, setCartId] = useState(null); // Default to null

  const fetchCartItem = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await api.get(`/getCart/admin/${user_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true",
        },
      });

      console.log("Fetched cart item response:", response.data);

      if (response.data.status && response.data.cart.cart_menu) {
        const cartItem = response.data.cart.cart_menu[0];

        if (cartItem && cartItem.menu) {
          setFormData({
            menuName: cartItem.menu.name || "",
            quantity: cartItem.quantity || 1,
            price: cartItem.price || 0,
          });
          setCartId(cartItem.cart_id); // Assuming cart_id is a single value
        } else {
          console.warn("Cart item or menu is undefined:", cartItem);
        }
      } else {
        console.error("Error in response:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching cart data:", error.message);
    }
  };

  useEffect(() => {
    fetchCartItem();
  }, [user_id]); // Trigger when user_id changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const totalHarga = formData.quantity * formData.price;

  const updateCartItem = async (cartId, data) => {
    try {
      const token = localStorage.getItem("token");
      console.log("Updating cart item with ID:", cartId, "Data:", data); // Log the cartId and data

      const response = await axios.patch(
        `https://8650-45-64-100-26.ngrok-free.app/api/updatePriceCart`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      if (response.data.status) {
        console.log("Cart item updated successfully");
      } else {
        console.error("Failed to update cart item:", response.data.message);
      }
    } catch (error) {
      console.error("Error updating cart item:", error.response?.data || error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting with cartId:", cartId); // Log cartId
    if (cartId) { // Check if cartId is valid
      await updateCartItem(cartId, {
        price: formData.price,
        quantity: formData.quantity,
      });
      closeModal();
      fetchCartItem(); // Fetch updated cart item
    } else {
      console.error("cartId is not valid:", cartId);
    }
  };
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-2/5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl">Edit Order</h2>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nama Menu
              </label>
              <input
                type="text"
                name="menuName"
                value={formData.menuName}
                onChange={handleChange}
                className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Harga (per item)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Enter price"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Total Harga
            </label>
            <input
              type="number"
              value={totalHarga}
              readOnly
              className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-teal-300 hover:bg-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6"
          >
            Kirim Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;