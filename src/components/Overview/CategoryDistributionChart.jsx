import React from 'react';
import { motion } from 'framer-motion';
import {
    PieChart,
    ResponsiveContainer,
    Pie,
    Cell,
    Tooltip,
    Legend
} from 'recharts';

const categoryData = [
    { name: 'Electronics', value: 4500 },
    { name: 'Clothing', value: 3200 },
    { name: 'Books', value: 2800 },
    { name: 'Accessories', value: 2100 },
    { name: 'Others', value: 1900 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];
const CategoryDistributionChart = () => {
    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border-gray-700 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
        >
            <h2 className="text-lg font-medium mb-4 text-gray-100">
                Category Distribution
            </h2>
            <div className="h-80">
                <ResponsiveContainer width={'100%'} height={'100%'}>
                    <PieChart>
                        <Pie
                            data={categoryData}
                            dataKey="value"
                            nameKey="name"
                            cx={'50%'}
                            cy={'50%'}
                            outerRadius={80}
                            fill="#8884d8"
                            labelLine={false}
                            label={({ name, percent }) =>
                                `${name} ${(percent * 100).toFixed(0)}% `
                            }
                        >
                            {categoryData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(31,41,55,0.8)',
                                borderColor: '#4b5563'
                            }}
                            itemStyle={{ color: '#cbd5e0' }}
                        />
                        <Legend
                            verticalAlign="bottom"
                            align="center"
                            iconType="circle"
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

export default CategoryDistributionChart;
