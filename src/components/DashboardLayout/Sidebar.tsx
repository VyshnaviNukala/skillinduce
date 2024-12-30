import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { LogOut, User, Calendar, Award, BookOpen, MessageSquare, Clock, FileText, PieChart } from 'lucide-react';

const Sidebar: React.FC = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate(); // useNavigate hook for redirection after logout

  const handleLogout = () => {
    logout(); // Call the logout function from the store to clear user data
    navigate('/login'); // Redirect to the login page after logout
  };

  const getNavItems = () => {
    switch (user?.role) {
      case 'student':
        return [
          { to: 'profile', icon: <User size={20} />, label: 'My Profile' },
          { to: 'attendance', icon: <Calendar size={20} />, label: 'My Attendance' },
          { to: 'certificates', icon: <Award size={20} />, label: 'My Certificates' },
          { to: 'new-course', icon: <BookOpen size={20} />, label: 'Opt New Course' },
          { to: 'feedback', icon: <MessageSquare size={20} />, label: 'Feedback' },
        ];
      case 'employee':
        return [
          { to: 'profile', icon: <User size={20} />, label: 'My Profile' },
          { to: 'attendance', icon: <Calendar size={20} />, label: 'My Attendance' },
          { to: 'leave', icon: <Clock size={20} />, label: 'Apply for Leave' },
          { to: 'leave-status', icon: <Calendar size={20} />, label: 'Leave Status' },
          { to: 'payslip', icon: <FileText size={20} />, label: 'Payslip' },
        ];
      case 'investor':
        return [
          { to: 'overview', icon: <PieChart size={20} />, label: 'Overview' },
          { to: 'projects', icon: <BookOpen size={20} />, label: 'Projects' },
          { to: 'investments', icon: <FileText size={20} />, label: 'Investments' },
        ];
      default:
        return [];
    }
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 px-4 py-6">
      <div className="flex items-center justify-center mb-8">
        <h2 className="text-xl font-bold text-gray-800">{user?.role.charAt(0).toUpperCase() + user?.role.slice(1)} Dashboard</h2>
      </div>
      <nav className="space-y-2">
        {getNavItems().map((item) => (
          <NavLink
            key={item.to}
            to={`/investor/${item.to}`} // Ensure correct path prefix
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                isActive ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-orange-100'
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
        <button
          onClick={handleLogout} // Call the handleLogout function on click
          className="w-full flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-red-100 rounded-lg transition-colors"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
