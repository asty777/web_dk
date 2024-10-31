import React, { useState, useEffect } from "react";
import MenuPhoto from "../../assets/MenuCard.png";
import CategoriesSection from "../filter/CategoriesSection";
import api from "../../api/config";
import NoMenu from "../../assets/NoMenu.png";

const MenuCard = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchMenuItems = async () => {
      const token = localStorage.getItem("token");
      try {
        const menuResponse = await api.get("/get_menus", {
          headers: {
            Authorization: `Bearer ${token}`,
            "ngrok-skip-browser-warning": "true",
          },
        });
        setMenuItems(menuResponse.data.data);
        setFilteredItems(menuResponse.data.data);

        const categoryResponse = await api.get("/get_categories", {
          headers: {
            Authorization: `Bearer ${token}`,
            "ngrok-skip-browser-warning": "true",
          },
        });
        setCategories(categoryResponse.data.data);
      } catch (error) {
        console.error("Failed to fetch menu items or categories", error);
      }
    };

    fetchMenuItems();
  }, []);

  const handleCategorySelect = (categoryName) => {
    if (categoryName === "All") {
      setFilteredItems(menuItems);
    } else {
      const filtered = menuItems.filter(
        (item) => getCategoryName(item.categoryId) === categoryName
      );
      setFilteredItems(filtered);
    }
    setCurrentPage(1);
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "Unknown Category";
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [...Array(totalPages).keys()].map((i) => i + 1);

  return (
    <>
      <div>
        <CategoriesSection onCategorySelect={handleCategorySelect} />
      </div>
      
      <div>
        {currentItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentItems.map((item) => (
                    <div key={item.id} className="bg-[#D8E6E9] rounded-lg mb-7 shadow-md overflow-hidden">
                        <img src={MenuPhoto} alt={item.name} className="w-full h-40 object-cover" />
                        <div className="p-4 flex-grow">
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            <p className="text-gray-500">{item.description}</p>
                            <p className="text-gray-500">Category: {getCategoryName(item.categoryId)}</p>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <div className="flex flex-col items-center justify-center w-full max-w-xl h-96">
                <img src={NoMenu} alt="No menu available" className="ml-40 w-72 h-auto" />
                <p className="text-center text-gray-500 mt-4 ml-32">No menu items available.</p>
            </div>
        )}
    </div>



      <nav className="flex items-center flex-col flex-wrap md:flex-row justify-between pt-4 pb-12" aria-label="Table navigation">
        <span className="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">
          Showing <span className="font-semibold text-gray-900">{indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredItems.length)}</span> of <span className="font-semibold text-gray-900">{filteredItems.length}</span>
        </span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          {pageNumbers.map((number) => (
            <li key={number}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(number);
                }}
                className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 rounded-full bg-white border border-gray-300 hover:bg-teal-500 hover:text-white ${currentPage === number ? "text-blue-600 bg-blue-50 hover:bg-blue-100" : ""}`}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MenuCard;

