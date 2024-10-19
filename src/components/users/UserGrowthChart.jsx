import React from 'react';
import { motion } from 'framer-motion';

import { use } from 'framer-motion/client';
import {
    CartesianGrid,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    LineChart
} from 'recharts';

const UserGrowthDate = [
    {
        month: 'Jan',
        users: 1000
    },
    {
        month: 'Feb',
        users: 1200
    },
    {
        month: 'Mar',
        users: 1400
    },
    {
        month: 'Apr',
        users: 1300
    },
    {
        month: 'May',
        users: 1500
    },
    {
        month: 'Jun',
        users: 1600
    },
    {
        month: 'Jul',
        users: 1800
    },
    {
        month: 'Aug',
        users: 1700
    },
    {
        month: 'Sep',
        users: 1900
    },
    {
        month: 'Oct',
        users: 2000
    },
    {
        month: 'Nov',
        users: 2200
    },
    {
        month: 'Dec',
        users: 2100
    }
];
const UserGrowthChart = () => {
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
                        <LineChart
                            data={UserGrowthDate}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20
                            }}
                        >
                            <XAxis dataKey="month" stroke="#9ca3af" />
                            <YAxis stroke="#9ca3af" />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#1f2937' }}
                                cursor={{ stroke: '#1f2937' }}
                                labelStyle={{ color: '#9ca3af' }}
                                itemStyle={{ color: '#9ca3af' }}
                                wrapperStyle={{ color: '#9ca3af' }}
                            />
                            <Line
                                type="monotone"
                                dataKey="users"
                                stroke="#6366f1"
                                strokeWidth={2}
                                dot={{ fill: '#6366f1', strokeWidth: 2, r: 4 }}
                                activeDot={{ r: 8 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </motion.div>
    );
};

export default UserGrowthChart;
