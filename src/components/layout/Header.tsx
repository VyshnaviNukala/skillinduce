// import React from "react";
// import { LogIn } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { Logo } from "../navigation/Logo";
// import { NavItems } from "../navigation/NavItems";
// import { navItems, studentNav, account1Nav, account2Nav } from "../data/navigationData";

// interface HeaderProps {
//   userType: string;
//   setUserType: (type: string) => void;
// }

// export function Header({ userType, setUserType }: HeaderProps) {
//   const navigate = useNavigate();

//   const handleLoginClick = (type: string) => {
//     setUserType(type);
//     navigate('/login');
//   };

//   return (
//     <header className="fixed top-0 w-full bg-white shadow-sm z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex items-center">
//             <Logo />
//           </div>

//           <nav className="hidden md:flex space-x-8">
//             <NavItems items={navItems} />
//             {userType === "student" && <NavItems items={studentNav} />}
//             {userType === "account1" && <NavItems items={account1Nav} />}
//             {userType === "account2" && <NavItems items={account2Nav} />}
//           </nav>

//           <div className="flex items-center space-x-4">
//             {userType === "guest" ? (
//               <button
//                 onClick={() => handleLoginClick("student")}
//                 className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
//               >
//                 <LogIn className="h-4 w-4 mr-2" />
//                 Login
//               </button>
//             ) : (
//               <button
//                 onClick={() => setUserType("guest")}
//                 className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md"
//               >
//                 Logout
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, User, LogOut } from 'lucide-react';
// import logo from '../images/logo.jpeg'

// interface HeaderProps {
//   userType: string;
//   setUserType: (type: string) => void;
// }

// export function Header({ userType, setUserType }: HeaderProps) {
//   const handleLogout = () => {
//     setUserType('guest');
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex items-center">
//           <div className="flex items-center space-x-2">
//           <img src={logo} alt="Logo" className="h-8 w-8" />
//       <Link to="/" className="text-xl font-bold text-gray-900">
//         SkillInduce Pvt. Ltd
//       </Link>
      
//     </div>
//           </div>

//           <nav className="hidden md:flex space-x-8">
//             <Link to="/about" className="text-gray-700 hover:text-gray-900">
//               About
//             </Link>
//             <Link to="/services" className="text-gray-700 hover:text-gray-900">
//               Services
//             </Link>
//             <Link to="/training" className="text-gray-700 hover:text-gray-900">
//               Training
//             </Link>
//             <Link to="/careers" className="text-gray-700 hover:text-gray-900">
//               Careers
//             </Link>
//             <Link to="/contact" className="text-gray-700 hover:text-gray-900">
//               Contact
//             </Link>
//           </nav>

//           <div className="flex items-center space-x-4">
//             {userType === 'guest' ? (
//               <Link
//                 to="/login"
//                 className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
//               >
//                 <User className="h-5 w-5" />
//                 <span>Sign In</span>
//               </Link>
//             ) : (
//               <>
//                 <Link
//                   to="/profile"
//                   className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
//                 >
//                   <User className="h-5 w-5" />
//                   <span>{userType}</span>
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
//                 >
//                   <LogOut className="h-5 w-5" />
//                   <span>Logout</span>
//                 </button>
//               </>
//             )}
//             <button className="md:hidden">
//               <Menu className="h-6 w-6 text-gray-700" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import logo from '../images/logo.jpeg';

interface HeaderProps {
  userType: string;
  setUserType: (type: string) => void;
}

export function Header({ userType, setUserType }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    setUserType('guest');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-8 w-8" />
              <Link to="/" className="text-xl font-bold text-gray-900" onClick={closeMenu}>
                SkillInduce Pvt. Ltd
              </Link>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-gray-900">Services</Link>
            <Link to="/training" className="text-gray-700 hover:text-gray-900">Training</Link>
            <Link to="/careers" className="text-gray-700 hover:text-gray-900">Careers</Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              {userType === 'guest' ? (
                <Link
                  to="/login"
                  className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
                >
                  <User className="h-5 w-5" />
                  <span>Sign In</span>
                </Link>
              ) : (
                <>
                  <Link
                    to="/profile"
                    className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
                  >
                    <User className="h-5 w-5" />
                    <span>{userType}</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </button>
                </>
              )}
            </div>
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link 
              to="/training" 
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={closeMenu}
            >
              Training
            </Link>
            <Link 
              to="/careers" 
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={closeMenu}
            >
              Careers
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={closeMenu}
            >
              Contact
            </Link>
            
            {/* Mobile auth buttons */}
            {userType === 'guest' ? (
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={closeMenu}
              >
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Sign In</span>
                </div>
              </Link>
            ) : (
              <>
                <Link
                  to="/profile"
                  className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span>{userType}</span>
                  </div>
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-2">
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </div>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}