export type UserRole = 'student' | 'employee' | 'investor';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  email: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (role: UserRole) => void;
  logout: () => void;
}