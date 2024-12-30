import { Route } from '../types/route';
import { publicRoutes } from './public.routes';
import { protectedRoutes } from './protected.routes';
import { authRoutes } from './auth.routes';

export const routes: Route[] = [
  ...authRoutes,
  ...publicRoutes,
  ...protectedRoutes
];