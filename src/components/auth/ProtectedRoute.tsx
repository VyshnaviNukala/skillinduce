
// import React from 'react';
// import { Navigate } from 'react-router-dom';

// interface ProtectedRouteProps {
//   userType: string;
//   allowedTypes: string[];
//   children: React.ReactNode;
// }

// export function ProtectedRoute({ userType, allowedTypes, children }: ProtectedRouteProps) {
//   if (!allowedTypes.includes(userType)) {
//     return <Navigate to="/login" replace />;
//   }

//   return <>{children}</>;
// }
// components/auth/ProtectedRoute.tsx
import React from 'react';
import { useAuth } from './AuthContext'; // Make sure the useAuth hook works properly

const ProtectedRoute: React.FC<{ allowedTypes: string[]; children: React.ReactNode }> = ({ allowedTypes, children }) => {
  const { user } = useAuth(); // Assuming you are using the user context for auth logic

  if (!user || (allowedTypes.length && !allowedTypes.includes(user))) {
    return <div>You are not authorized to view this page.</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
