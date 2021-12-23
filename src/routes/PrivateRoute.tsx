import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface IPrivateRoute {
  children: ReactNode;
}

export function PrivateRoute({ children }: IPrivateRoute) {
  const { auth } = useAuth();
  return auth ? children : <Navigate to="/login" />;
}
