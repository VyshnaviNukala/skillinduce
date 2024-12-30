import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  userType: string;
  setUserType: (type: string) => void;
  isAuthenticated: boolean;
  login: (type: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userType, setUserType] = useState('guest');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (type: string) => {
    setUserType(type);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUserType('guest');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ userType, setUserType, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}