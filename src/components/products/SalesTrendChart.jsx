import React from 'react';
import { motion } from 'framer-motion';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

const salesData = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 2000 },
    { name: 'Apr', sales: 2780 },
    { name: 'May', sales: 1890 },
    { name: 'Jun', sales: 2390 },
    { name: 'Jul', sales: 3490 },
    { name: 'Aug', sales: 4000 },
    { name: 'Sep', sales: 3000 },
    { name: 'Oct', sales: 2000 },
    { name: 'Nov', sales: 2780 },
    { name: 'Dec', sales: 1890 }
];
const SalesTrendChart = () => {
    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <h2 className="text-lg font-medium mb-4 text-gray-100">
                Sales Overview
            </h2>

            <div className="h-80">
                <ResponsiveContainer width={'100%'} height={'100%'}>
                    <LineChart data={salesData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
                        <XAxis dataKey={'name'} />
                        <YAxis stroke="#9ca3af" />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(31,41,55,0.8)',
                                borderColor: '#4b5563'
                            }}
                            itemStyle={{ color: '#cbd5e0' }}
                        />
                        <Line
                            type="monotone"
                            dataKey="sales"
                            stroke="#6366f1"
                            strokeWidth={3}
                            dot={{ fill: '#6366f1', strokeWidth: 2, r: 6 }}
                            activeDot={{ r: 8, strokeWidth: 2 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

export default SalesTrendChart;
