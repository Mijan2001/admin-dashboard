import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/common/Header';
import { UserCheck, UserPlus, UsersIcon, UserX } from 'lucide-react';
import StatCard from '../components/common/StatCard';
import UserTable from '../components/users/UserTable';
import UserGrowthChart from '../components/users/UserGrowthChart';
import UserActivityHeatmap from '../components/users/UserActivityHeatmap';
import UserDemographicsChart from '../components/users/UserDemographicsChart';
const UsersPage = () => {
    return (
        <div className="flex-1 overflow-auto relative z-10">
            <Header title="Users" />

            <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
                {/* stats  */}
                <motion.div
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <StatCard
                        name="Total Users"
                        icon={UsersIcon}
                        value="152845"
                        color="#6366f1"
                    />
                    <StatCard
                        name="New Users Today"
                        icon={UserPlus}
                        value="243"
                        color="#10b981"
                    />
                    <StatCard
                        name="Active Users"
                        icon={UserCheck}
                        value="98520"
                        color="#8b5cf6"
                    />
                    <StatCard
                        name="Churn Rate"
                        icon={UserX}
                        value="2.4%"
                        color="#ef4444"
                    />
                </motion.div>
                <UserTable />

                {/* users charts .............  */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                    <UserGrowthChart />
                    <UserActivityHeatmap />
                    <UserDemographicsChart />
                </div>
            </main>
        </div>
    );
};

export default UsersPage;
