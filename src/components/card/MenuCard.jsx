import React, { useState, useEffect } from "react";
import MenuPhoto from "../../assets/MenuCard.png"; 
import CategoriesSection from "../filter/CategoriesSection";
import api from "../../api/config";

const MenuCard = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    
    useEffect(() => {
        const fetchMenuItems = async () => {
            const token = localStorage.getItem("token"); 
            try {
                
                const menuResponse = await api.get("/get_menus", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setMenuItems(menuResponse.data.data); 

                
                const categoryResponse = await api.get("/get_categories", {
                    headers: {
                        Authorization: `Bearer ${token}`, 
                    },
                });
                setCategories(categoryResponse.data.data); 
            } catch (error) {
                console.error("Failed to fetch menu items or categories", error);
            }
        };

        fetchMenuItems();
    }, []);

   
    const getCategoryName = (categoryId) => {
        const category = categories.find(cat => cat.id === categoryId);
        return category ? category.name : "Unknown Category";
    };

   
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = menuItems.slice(indexOfFirstItem, indexOfLastItem);

    
    const totalPages = Math.ceil(menuItems.length / itemsPerPage);

   
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

   
    const pageNumbers = [...Array(totalPages).keys()].map(i => i + 1);

    return (
        <>
            <div>
                <CategoriesSection />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentItems.length > 0 ? (
                    currentItems.map(item => (
                        <div key={item.id} className="bg-[#D8E6E9] rounded-lg mb-7 shadow-md overflow-hidden">
                            <img 
                                src={MenuPhoto} 
                                alt={item.name}
                                className="w-full h-40 object-cover"
                            />
                                <div className="p-4 flex-grow">
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="text-gray-500">{item.description}</p>
                                    <p className="text-gray-500">Category: {getCategoryName(item.categoryId)}</p>
                                </div>
                               

                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No menu items available.</p>
                )}
            </div>

          
            <nav className="flex items-center flex-col flex-wrap md:flex-row justify-between pt-4 pb-12" aria-label="Table navigation">
                <span className="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                    Showing <span className="font-semibold text-gray-900">{indexOfFirstItem + 1}-{Math.min(indexOfLastItem, menuItems.length)}</span> of <span className="font-semibold text-gray-900">{menuItems.length}</span>
                </span>
                <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                    {pageNumbers.map(number => (
                        <li key={number}>
                            <a
                                href="#"
                                onClick={(e) => { e.preventDefault(); handlePageChange(number); }}
                                className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${currentPage === number ? 'text-blue-600 bg-blue-50 hover:bg-blue-100' : ''}`}
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
