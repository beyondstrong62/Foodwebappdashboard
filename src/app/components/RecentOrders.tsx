interface Order {
  id: string;
  customer: string;
  items: string;
  amount: string;
  status: 'pending' | 'preparing' | 'delivered' | 'cancelled';
  time: string;
}

const orders: Order[] = [
  { id: '#3842', customer: 'Sarah Johnson', items: 'Margherita Pizza, Caesar Salad', amount: '$32.50', status: 'preparing', time: '10 mins ago' },
  { id: '#3841', customer: 'Michael Chen', items: 'Burger Combo, Fries', amount: '$18.99', status: 'delivered', time: '25 mins ago' },
  { id: '#3840', customer: 'Emma Wilson', items: 'Pasta Carbonara', amount: '$24.00', status: 'preparing', time: '35 mins ago' },
  { id: '#3839', customer: 'James Brown', items: 'Sushi Platter, Miso Soup', amount: '$45.50', status: 'delivered', time: '1 hour ago' },
  { id: '#3838', customer: 'Lisa Anderson', items: 'Vegan Bowl, Smoothie', amount: '$28.75', status: 'pending', time: '1 hour ago' },
];

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  preparing: 'bg-blue-100 text-blue-800',
  delivered: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800',
};

export function RecentOrders() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h3>Recent Orders</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs text-gray-500">Order ID</th>
              <th className="px-6 py-3 text-left text-xs text-gray-500">Customer</th>
              <th className="px-6 py-3 text-left text-xs text-gray-500">Items</th>
              <th className="px-6 py-3 text-left text-xs text-gray-500">Amount</th>
              <th className="px-6 py-3 text-left text-xs text-gray-500">Status</th>
              <th className="px-6 py-3 text-left text-xs text-gray-500">Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">{order.id}</td>
                <td className="px-6 py-4 text-sm">{order.customer}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{order.items}</td>
                <td className="px-6 py-4 text-sm">{order.amount}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs rounded-full ${statusColors[order.status]}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{order.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
