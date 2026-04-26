import { DollarSign, ShoppingBag, Users, TrendingUp } from 'lucide-react';
import { MetricCard } from './components/MetricCard';
import { RevenueChart } from './components/RevenueChart';
import { RecentOrders } from './components/RecentOrders';
import { PopularDishes } from './components/PopularDishes';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl">Food Dashboard</h1>
          <p className="text-sm text-gray-600">Welcome back! Here's what's happening today</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Revenue"
            value="$45,231"
            change="+12.5% from last week"
            icon={DollarSign}
            isPositive={true}
          />
          <MetricCard
            title="Orders Today"
            value="142"
            change="+8.2% from yesterday"
            icon={ShoppingBag}
            isPositive={true}
          />
          <MetricCard
            title="Active Customers"
            value="2,845"
            change="+5.1% from last week"
            icon={Users}
            isPositive={true}
          />
          <MetricCard
            title="Growth Rate"
            value="23.5%"
            change="+2.3% this month"
            icon={TrendingUp}
            isPositive={true}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <div>
            <PopularDishes />
          </div>
        </div>

        <RecentOrders />
      </main>
    </div>
  );
}