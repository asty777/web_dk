import React, { useEffect, useState } from "react";
import { FaBowlFood } from "react-icons/fa6";
import axios from "axios";
import api from "../../api/config";

const CategoriesSection = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await api.get("/get_categories", {
          headers: {
            Authorization: `Bearer ${token}`,
            "ngrok-skip-browser-warning": "true",
            Accept: "application/json",
          },
        });

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

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    onCategorySelect(categoryName);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex space-x-4 mb-8">
      <button
        className={`p-2 rounded-full flex items-center space-x-2 ${
          selectedCategory === "All" ? "bg-teal-500 text-white" : "bg-[#D8E6E9] text-gray-500"
        }`}
        onClick={() => handleCategoryClick("All")}
      >
        <FaBowlFood className="h-5 w-5" />
        <span>All</span>
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          className={`p-2 rounded-full flex items-center space-x-2 ${
            selectedCategory === category.name ? "bg-teal-500 text-white" : "bg-[#D8E6E9] text-gray-500"
          }`}
          onClick={() => handleCategoryClick(category.name)}
        >
          <FaBowlFood className="h-5 w-5" />
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoriesSection;
