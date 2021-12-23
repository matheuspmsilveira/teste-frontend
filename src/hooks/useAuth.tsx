import {
  createContext,
  useState,
  ReactNode,
  useContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';
import { api } from '../services/api';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextData {
  auth: string | null;
  setAuth: Dispatch<SetStateAction<string | null>>;
  singIn(email: string, password: string): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [auth, setAuth] = useState<string | null>(null);

  async function singIn(email: string, password: string) {
    const response = await api.post('/auth/sign-in', {
      email,
      password,
    });

    setAuth(response.headers.authorization);
    localStorage.setItem('@IBAuth:token', response.headers.authorization);
    localStorage.setItem('@IBAuth:user', JSON.stringify(response.data));
  }

  useEffect(() => {
    async function loadStorageData() {
      const storagedToken = await localStorage.getItem('@IBAuth:token');

      if (storagedToken) {
        setAuth(storagedToken);
      }
    }

    loadStorageData();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, singIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
