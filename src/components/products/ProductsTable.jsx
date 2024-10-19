import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Edit, Search, Trash2 } from 'lucide-react';

const PRODUCT_DATA = [
    {
        id: 1,
        name: 'Wireless Headphones',
        category: 'Electronics',
        price: 100,
        stock: 100,
        sales: 1200
    },
    {
        id: 2,
        name: 'Leather Wallet',
        category: 'Accessories',
        price: 150,
        stock: 200,
        sales: 1100
    },
    {
        id: 3,
        name: 'Smart Watch',
        category: 'Electronics',
        price: 200,
        stock: 150,
        sales: 1300
    },
    {
        id: 4,
        name: 'Yoga Mat',
        category: 'Fitness',
        price: 250,
        stock: 120,
        sales: 1400
    },
    {
        id: 5,
        name: 'Coffee Maker',
        category: 'Home',
        price: 300,
        stock: 80,
        sales: 1500
    }
];
const ProductTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);
    const handleSearch = e => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = PRODUCT_DATA.filter(
            product =>
                product.name.toLowerCase().includes(term) ||
                product.category.toLowerCase().includes(term)
        );
        setFilteredProducts(filtered);
    };
    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border border-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div className="flex justify-between m-6">
                <h2 className="text-lg font-semibold text-gray-200 p-4">
                    Products List
                </h2>
                <div className="relative">
                    <input
                        value={searchTerm}
                        onChange={handleSearch}
                        type="text"
                        className="w-full bg-gray-700 text-gray-200 p-2 pl-8 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                        placeholder="Search products..."
                    />
                    <Search
                        size={16}
                        className="absolute top-2.5 left-2 text-gray-200"
                    />
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-blue-700 hover:bg-slate-600">
                        <tr>
                            <th className="text-left px-4 py-2 text-gray-200">
                                Name
                            </th>
                            <th className="text-left px-4 py-2 text-gray-200">
                                Category
                            </th>
                            <th className="text-left px-4 py-2 text-gray-200">
                                Price
                            </th>
                            <th className="text-left px-4 py-2 text-gray-200">
                                Stock
                            </th>
                            <th className="text-left px-4 py-2 text-gray-200">
                                Sales
                            </th>
                            <th className="text-left px-4 py-2 text-gray-200">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map(product => (
                            <motion.tr
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-gray-700 border outline-none border-gray-600 hover:bg-gray-600"
                            >
                                <td className="px-4 py-2 text-gray-200">
                                    {product.name}
                                </td>
                                <td className="px-4 py-2 text-gray-200">
                                    {product.category}
                                </td>
                                <td className="px-4 py-2 text-gray-200">
                                    {product.price}
                                </td>
                                <td className="px-4 py-2 text-gray-200">
                                    {product.stock}
                                </td>
                                <td className="px-4 py-2 text-gray-200">
                                    {product.sales}
                                </td>
                                <td className="px-4 py-2 text-gray-200">
                                    <div className="flex space-x-2">
                                        <button className="p-1 bg-gray-700 hover:bg-gray-600 rounded-full">
                                            <Search size={16} />
                                        </button>
                                        <button className="p-1 bg-gray-700 hover:bg-gray-600 rounded-full">
                                            <Edit size={16} />
                                        </button>
                                        <button className="p-1 bg-gray-700 hover:bg-gray-600 rounded-full">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};

export default ProductTable;
