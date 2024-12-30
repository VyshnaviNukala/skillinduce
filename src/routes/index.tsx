import { authRoutes } from './auth.routes';
import { publicRoutes } from './public.routes';
import { protectedRoutes } from './protected.routes';

export const routes = [
  ...authRoutes,
  ...publicRoutes,
  ...protectedRoutes
];