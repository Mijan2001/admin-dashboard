import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const userData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        role: 'Customer',
        status: 'Active'
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'Admin',
        status: 'Inactive'
    },
    {
        id: 3,
        name: 'Alice Johnson',
        email: 'alice@example.com',
        role: 'Customer',
        status: 'Active'
    },
    {
        id: 4,
        name: 'Bob Brown',
        email: 'bob@example.com',
        role: 'Moderator',
        status: 'Pending'
    },
    {
        id: 5,
        name: 'Charlie Davis',
        email: 'charlie@example.com',
        role: 'Customer',
        status: 'Active'
    }
];
const UserTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(userData);

    const handleSearch = e => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = userData.filter(
            user =>
                user.name.toLowerCase().includes(term) ||
                user.email.toLowerCase().includes(term)
        );
        setFilteredUsers(filtered);
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
                        placeholder="Search users..."
                    />
                    <Search
                        size={16}
                        className="absolute top-2.5 left-2 text-gray-200"
                    />
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                        <tr>
                            <th className="px-5 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wide">
                                Name
                            </th>
                            <th className="px-5 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wide">
                                Email
                            </th>
                            <th className="px-5 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wide">
                                Role
                            </th>
                            <th className="px-5 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wide">
                                Status
                            </th>
                            <th className="px-5 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wide">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                        {filteredUsers.map(user => (
                            <motion.tr
                                key={user.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-gray-800 hover:bg-gray-700"
                            >
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {/* {user.name} */}

                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10">
                                            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-semibold">
                                                {user.name.charAt(0)}
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-100">
                                                {user.name}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-100">
                                        {user.email}
                                    </div>
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-600 text-gray-200">
                                        {user.role}
                                    </span>
                                </td>
                                <td>
                                    <span
                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                            user.status === 'Active'
                                        } ? 
                                        "bg-green-800 text-green-100":
                                        "bgred-800 text-red-100"
                                         `}
                                    >
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                                        Edit
                                    </button>
                                    <button className="text-red-400 hover:text-red-300">
                                        Delete
                                    </button>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};

export default UserTable;
