

import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import api from "../../../api/config";
import AlertComponent from "../../notif/AlertComponent";

const OrderModal = ({ closeModal, fetchCart, user_id }) => {
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    menu_id: null,
    quantity: 1,
    price: 0,
  });

  const fetchCartItems = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await api.get(`/getCart/admin/${user_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true",
        },
      });

      if (response.data.status && response.data.cart.cart_menu) {
        setCartItems(response.data.cart.cart_menu);
      } else {
        console.error("Error in response:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching cart data:", error.message);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, [user_id]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedCartItems = [...cartItems];
    updatedCartItems[index] = {
      ...updatedCartItems[index],
      [name]: value,
    };
    setCartItems(updatedCartItems);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    for (const item of cartItems) {
      await updateCartItem({
        customer_id: user_id,
        menu_id: item.menu.id,
        price: item.price,
        quantity: item.quantity,
      });
    }
    closeModal();
    fetchCart();
  };

  const updateCartItem = async (data) => {
    try {
      const token = localStorage.getItem("token");
      const response = await api.patch("/updatePriceCart", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true",
        },
      });

      if (response.data.status) {
        AlertComponent.SuccessEditOrder();
      } else {
        AlertComponent.FailedEditOrder();
      }
    } catch (error) {
      AlertComponent.FailedEditOrder();
      console.error("Error updating cart item:", error.response?.data || error.message);
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
        
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-700">Tidak ada request pesanan</p>
        ) : (
          <form onSubmit={handleSubmit}>
            {cartItems.map((item, index) => (
              <div key={item.menu.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nama Menu</label>
                  <input
                    type="text"
                    name="menuName"
                    value={item.menu.name}
                    readOnly
                    className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Harga (per item)</label>
                  <input
                    type="number"
                    name="price"
                    value={item.price}
                    onChange={(e) => handleChange(e, index)}
                    className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Quantity</label>
                  <input
                    type="number"
                    name="quantity"
                    value={item.quantity}
                    onChange={(e) => handleChange(e, index)}
                    className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  />
                </div>
              </div>
            ))}
            <button
              type="submit"
              className="w-full text-white bg-teal-300 hover:bg-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6"
            >
              Kirim Order
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default OrderModal;

