import React from 'react';

const analyticsData = [
  { label: 'Active Listing', value: '8', icon: '📦', growth: '3% Up from yesterday', color: 'text-yellow-500' },
  { label: 'Pending Order', value: '3', icon: '⏳', growth: '1.5% Up from past week', color: 'text-red-500' },
  { label: 'Total Earned', value: '2.5K', icon: '📈', growth: '3% Up from yesterday', color: 'text-green-500' },
  { label: 'Total Engaged', value: '3.6K', icon: '👥', growth: '3% Up from yesterday', color: 'text-purple-500' },
];

const AccountAnalytics: React.FC = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Account Analytics</h3>
        <p className="text-sm text-gray-500">Last 28 days</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {analyticsData.map((data, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-sm flex items-center space-x-3">
            <div className={`${data.color} text-3xl`}>{data.icon}</div>
            <div>
              <h4 className="text-base font-semibold">{data.label}</h4>
              <p className="text-2xl font-bold">{data.value}</p>
              <p className="text-xs text-green-500">{data.growth}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountAnalytics;