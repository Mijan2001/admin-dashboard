import React from 'react';
import { motion } from 'framer-motion';
const SettingSection = ({ icon: Icon, title, children }) => {
    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl border border-gray-700 mb-8 p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
        >
            <div className="flex items-center mb-4">
                <Icon className="mr-4 text-indigo-500" size="24" />
                <h2 className="text-xl font-semibold text-gray-200 p-4">
                    {title}
                </h2>
            </div>
            {children}
        </motion.div>
    );
};

export default SettingSection;
