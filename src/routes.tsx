// routes.tsx
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Training from './pages/Training';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import  {ApplicationForm}  from './components/careers/ApplicationForm';
import Login from './pages/Login';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { ResetPasswordPage } from './pages/ResetPasswordPage';
import { RegisterPage } from './pages/RegisterPage';
import StudentDashboard from './pages/student/Dashboard';
import EmployeeDashboard from './pages/employee/Dashboard';
import InvestorDashboard from './pages/investor/Dashboard';
import DashboardLayout from './components/DashboardLayout/DashboardLayout'; // Ensure correct import

export const routes = [
  // Public routes
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  { path: '/projects', element: <Projects /> },
  { path: '/training', element: <Training /> },
  { path: '/careers', element: <Careers /> },
  { path: '/ApplicationForm', element: <ApplicationForm /> },
  { path: '/contact', element: <Contact /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/forgot-password', element: <ForgotPasswordPage /> },
  { path: '/reset-password', element: <ResetPasswordPage /> },

  // Protected dashboard routes wrapped in DashboardLayout
  {
    path: '/student/*',
    element: <DashboardLayout />, // Use the layout here
    children: [
      { path: '', element: <StudentDashboard /> }, // Render the student dashboard as a child route
    ],
  },
  {
    path: '/employee/*',
    element: <DashboardLayout />,
    children: [
      { path: '', element: <EmployeeDashboard /> }, // Render the employee dashboard as a child route
    ],
  },
  {
    path: '/investor/*',
    element: <DashboardLayout />,
    children: [
      { path: '', element: <InvestorDashboard /> }, // Render the investor dashboard as a child route
    ],
  },
];
