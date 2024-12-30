import React, { useEffect } from 'react';
import { useAuthStore } from '../../store/authStore';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';

const InvestorDashboard: React.FC = () => {
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    // Show welcome modal on component mount
    alert(`Welcome Mr. ${user?.name}`);
  }, [user?.name]);

  const projectData = [
    { name: 'Running', value: 8 },
    { name: 'On Bench', value: 3 },
  ];

  const profitData = [
    { name: 'Q1', profit: 65 },
    { name: 'Q2', profit: 78 },
    { name: 'Q3', profit: 82 },
    { name: 'Q4', profit: 95 },
  ];

  const COLORS = ['#0088FE', '#FF8042'];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Welcome, Mr. {user?.name}</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Project Status</h2>
          <PieChart width={400} height={300}>
            <Pie
              data={projectData}
              cx={200}
              cy={150}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {projectData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Quarterly Profit/Loss</h2>
          <BarChart width={400} height={300} data={profitData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="profit" fill="#0088FE" />
          </BarChart>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Total Investments</h3>
          <p className="text-3xl font-bold text-blue-600">$2.5M</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">My Share Amount</h3>
          <p className="text-3xl font-bold text-green-600">$750K</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">My Share Percentage</h3>
          <p className="text-3xl font-bold text-orange-600">30%</p>
        </div>
      </div>
    </div>
  );
};

export default InvestorDashboard;