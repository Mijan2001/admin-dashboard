import React from 'react';
import { motion } from 'framer-motion';
import {
    Bar,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    BarChart
} from 'recharts';

const COLORS = [
    '#6366f1',
    '#8b5cf6',
    '#ec4899',
    '#188981',
    '#f59e0b',
    '#3b82f6',
    '#6366f1'
];

const salesChannelData = [
    {
        name: 'Website',
        value: 45600
    },
    {
        name: 'Mobile App',
        value: 38200
    },
    {
        name: 'Marketplace',
        value: 29800
    },
    {
        name: 'Social Media',
        value: 18700
    }
];
const SalesChannelChart = () => {
    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border-gray-700 my-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
        >
            <h2 className="text-lg font-medium mb-4 text-gray-100">
                Sales by Channel
            </h2>
            <div className="h-80">
                <ResponsiveContainer width={'100%'} height={'100%'}>
                    <BarChart
                        data={salesChannelData}
                        margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
                    >
                        <XAxis dataKey="name" tick={{ fill: '#cbd5e0' }} />
                        <YAxis tick={{ fill: '#cbd5e0' }} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(31,41,55,0.8)',
                                borderColor: '#4b5563'
                            }}
                            itemStyle={{ color: '#cbd5e0' }}
                        />
                        <Bar dataKey="value" fill="#6366f1" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

export default SalesChannelChart;
