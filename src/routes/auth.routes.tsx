import { LoginPage } from '../pages/Login'; // Correct path
import { RegisterPage } from '../pages/RegisterPage'; // Correct path
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage'; // Correct path
import { ResetPasswordPage } from '../pages/ResetPasswordPage'; // Correct path

export const authRoutes = [
  {
    path: '/login',
    element: <LoginPage />,
    protected: false
  },
  {
    path: '/register',
    element: <RegisterPage />,
    protected: false
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage />,
    protected: false
  },
  {
    path: '/reset-password',
    element: <ResetPasswordPage />,
    protected: false
  }
];