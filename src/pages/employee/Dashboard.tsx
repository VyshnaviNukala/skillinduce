import React from 'react';
import { useAuthStore } from '../../store/authStore';

const EmployeeDashboard: React.FC = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Welcome, {user?.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Add dashboard widgets */}
      </div>
    </div>
  );
};

export default EmployeeDashboard;