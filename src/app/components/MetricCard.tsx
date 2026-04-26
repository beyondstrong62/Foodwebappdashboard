import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  change: string;
  icon: LucideIcon;
  isPositive: boolean;
}

export function MetricCard({ title, value, change, icon: Icon, isPositive }: MetricCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-600">{title}</span>
        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
          <Icon className="w-5 h-5 text-orange-600" />
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-3xl">{value}</p>
        <p className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </p>
      </div>
    </div>
  );
}
