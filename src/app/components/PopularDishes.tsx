import { TrendingUp } from 'lucide-react';

interface Dish {
  name: string;
  orders: number;
  revenue: string;
  trend: number;
}

const dishes: Dish[] = [
  { name: 'Margherita Pizza', orders: 142, revenue: '$2,130', trend: 12 },
  { name: 'Burger Combo', orders: 118, revenue: '$1,776', trend: 8 },
  { name: 'Sushi Platter', orders: 95, revenue: '$4,275', trend: 15 },
  { name: 'Pasta Carbonara', orders: 87, revenue: '$1,740', trend: 5 },
];

export function PopularDishes() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h3 className="mb-6">Popular Dishes</h3>
      <div className="space-y-4">
        {dishes.map((dish, index) => (
          <div key={dish.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-sm">{index + 1}</span>
              </div>
              <div>
                <p className="text-sm">{dish.name}</p>
                <p className="text-xs text-gray-600">{dish.orders} orders</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm">{dish.revenue}</p>
              <div className="flex items-center gap-1 text-xs text-green-600">
                <TrendingUp className="w-3 h-3" />
                <span>{dish.trend}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
