import React from 'react';

const COLORS = [
    '#6366f1',
    '#8b5cf6',
    '#10b981',
    '#ef4444',
    '#f59e0b',
    '#3b82f6'
];
import { ResponsiveContainer, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { motion } from 'framer-motion';

const UserDemographicsData = [
    { name: '18-24', value: 20 },
    { name: '25-34', value: 40 },
    { name: '35-44', value: 30 },
    { name: '45-54', value: 10 },
    { name: '55-64', value: 5 },
    { name: '65+', value: 5 }
];
const UserDemographicsChart = () => {
    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border border-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-200 mb-4">
                    User Growth Chart
                </h2>
                <div className="h-[320px] bg-gray-700 rounded-xl">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={UserDemographicsData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                fill="#6366f1"
                                label={({ name, percent }) =>
                                    `${name} ${(percent * 100).toFixed(0)}%`
                                }
                            >
                                {UserDemographicsData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#1f2937',
                                    border: '#4b5563'
                                }}
                                cursor={{ fill: 'none' }}
                                labelStyle={{ color: '#9ca3af' }}
                                itemStyle={{ color: '#9ca3af' }}
                                wrapperStyle={{ color: '#9ca3af' }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </motion.div>
    );
};

export default UserDemographicsChart;
