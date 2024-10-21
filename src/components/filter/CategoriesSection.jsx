import React, { useEffect, useState } from "react";
import { FaBowlFood } from "react-icons/fa6";
import axios from "axios";

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = localStorage.getItem("token");
        
        const response = await axios.get("https://e1da-45-64-100-26.ngrok-free.app", {
          headers: {
            Authorization: `Bearer ${token}`, 
            'ngrok-skip-browser-warning': 'true',
           
            'Accept': 'application/json'
          },
        });
        console.log(response);  
        
      
        
        

        if (response.data && response.data.data) {
          setCategories(response.data.data);
        } else {
          setCategories([]);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex space-x-4 mb-8">
        <button className="bg-[#D8E6E9] p-2 rounded-full flex items-center space-x-2">
          <FaBowlFood className="h-5 w-5 text-gray-500" />
          <span>All</span>
        </button>
        {categories.length > 0 ? (
          categories.map((category) => (
            <button
              key={category.id}
              className="bg-teal-500 text-white p-2 rounded-full flex items-center space-x-2"
            >
              <FaBowlFood className="h-5 w-5 text-white" />
              <span>{category.name}</span>
            </button>
          ))
        ) : (
          <div>No categories available</div>
        )}
      </div>
    </>
  );
};

export default CategoriesSection;