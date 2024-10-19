import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/common/Header';
import StatCard from '../components/common/StatCard';
import { BarChart2, ShoppingBag, User, Zap } from 'lucide-react';
import SalesOverviewChart from '../components/Overview/SalesOverviewChart';
import CategoryDistributionChart from '../components/Overview/CategoryDistributionChart';
import SalesChannelChart from '../components/Overview/SalesChannelChart';
import ProductsTable from '../components/products/ProductsTable';
import SalesTrendChart from '../components/products/SalesTrendChart';

const ProductsPage = () => {
    return (
        <div className="flex-1 overflow-auto relative z-10">
            <Header title="Products" />

            <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
                {/* stats  */}
                <motion.div
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <StatCard
                        name="Total Sales"
                        icon={Zap}
                        value="$12,345"
                        color="#6366f1"
                    />
                    <StatCard
                        name="New Users"
                        icon={User}
                        value="$12,345"
                        color="#8b5cf6"
                    />
                    <StatCard
                        name="Total Products"
                        icon={ShoppingBag}
                        value="567"
                        color="#ec4899"
                    />
                    <StatCard
                        name="Conversion Rate"
                        icon={BarChart2}
                        value="12.5%"
                        color="#10b981"
                    />
                </motion.div>
                <ProductsTable />
                {/* charts  */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <SalesTrendChart />
                    <CategoryDistributionChart />
                </div>
            </main>
        </div>
    );
};

export default ProductsPage;
