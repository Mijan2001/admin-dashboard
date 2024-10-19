import React from 'react';
import {
    Bar,
    BarChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';

import { motion } from 'framer-motion';

const userActivityData = [
    { name: 'Mon', '0-5': 4000, '6-12': 3000, '13-18': 2000, '19-24': 2780 },
    { name: 'Tue', '0-5': 3000, '6-12': 2000, '13-18': 1000, '19-24': 1890 },
    { name: 'Wed', '0-5': 2000, '6-12': 1000, '13-18': 800, '19-24': 2390 },
    { name: 'Thu', '0-5': 2780, '6-12': 1890, '13-18': 2390, '19-24': 3490 },
    { name: 'Fri', '0-5': 3000, '6-12': 2000, '13-18': 1000, '19-24': 1890 },
    { name: 'Sat', '0-5': 2000, '6-12': 1000, '13-18': 800, '19-24': 2390 },
    { name: 'Sun', '0-5': 2780, '6-12': 1890, '13-18': 2390, '19-24': 3490 }
];

const UserActivityHeatmap = () => {
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
                        <BarChart data={userActivityData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="0-5" stackId="a" fill="#6366f1" />
                            <Bar dataKey="6-12" stackId="a" fill="#8b5cf6" />
                            <Bar dataKey="13-18" stackId="a" fill="#ec4899" />
                            <Bar dataKey="19-24" stackId="a" fill="#10b981" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </motion.div>
    );
};

export default UserActivityHeatmap;
