// App.tsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { AuthProvider } from './components/auth/AuthContext';
import { ToastProvider } from './components/providers/ToastProvider';
import { routes } from './routes';

function App() {
  const [userType, setUserType] = useState<string>('guest');

  return (
    <AuthProvider>
      <ToastProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Header userType={userType} setUserType={setUserType} />
            <main className="flex-grow pt-16">
              <Routes>
                {routes.map((route, index) => {
                  const { path, element, children } = route;
                  return (
                    <Route
                      key={index}
                      path={path}
                      element={element}
                    >
                      {children && children.map((childRoute, childIndex) => (
                        <Route key={childIndex} path={childRoute.path} element={childRoute.element} />
                      ))}
                    </Route>
                  );
                })}
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
