import { Package, AlertTriangle, DollarSign, BarChart2, ListCheck, Clock } from "lucide-react";

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-white rounded-lg shadow p-6 border">
        <div className="flex items-center">
          <Package className="w-8 h-8 text-blue-600" />
          <div className="ml-4">
            <p className="text-sm text-gray-500">Total Items</p>
            <p className="text-2xl font-bold">247</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6 border">
        <div className="flex items-center">
          <AlertTriangle className="w-8 h-8 text-amber-500" />
          <div className="ml-4">
            <p className="text-sm text-gray-500">Low Stock Items</p>
            <p className="text-2xl font-bold">12</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 border">
        <div className="flex items-center">
          <DollarSign className="w-8 h-8 text-green-500" />
          <div className="ml-4">
            <p className="text-sm text-gray-500">Value in Stock</p>
            <p className="text-2xl font-bold">$24,500</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 border">
        <div className="flex items-center">
          <BarChart2 className="w-8 h-8 text-purple-500" />
          <div className="ml-4">
            <p className="text-sm text-gray-500">Monthly Turnover</p>
            <p className="text-2xl font-bold">85%</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 border">
        <div className="flex items-center">
          <ListCheck className="w-8 h-8 text-indigo-500" />
          <div className="ml-4">
            <p className="text-sm text-gray-500">Categories</p>
            <p className="text-2xl font-bold">8</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 border">
        <div className="flex items-center">
          <Clock className="w-8 h-8 text-orange-500" />
          <div className="ml-4">
            <p className="text-sm text-gray-500">Last Updated</p>
            <p className="text-2xl font-bold">2 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
