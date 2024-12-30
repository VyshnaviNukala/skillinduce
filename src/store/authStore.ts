import { create } from 'zustand';
import { AuthState, UserRole } from '../types/auth';

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (role: UserRole) => {
    const mockUser = {
      id: '1',
      name: role === 'investor' ? 'Mr. John Doe' : 'John Doe',
      role,
      email: `john.doe@${role}.com`,
    };
    set({ user: mockUser, isAuthenticated: true });
  },
  logout: () => set({ user: null, isAuthenticated: false }),
}));
// Example of authStore.js or authStore.ts
// import {create} from 'zustand';

// export const useAuthStore = create((set) => ({
//   user: null, // or get user from localStorage initially
//   login: (userData) => set({ user: userData }),
//   logout: () => {
//     set({ user: null });
//     localStorage.removeItem('user'); // Clear the user from localStorage if you store it there
//     // Add any other session cleanup here
//   },
// }));
