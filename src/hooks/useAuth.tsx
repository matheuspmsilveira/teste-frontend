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
  signIn(email: string, password: string): void;
  signOut(): void;
  errors: string | null;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [auth, setAuth] = useState<string | null>(null);
  const [errors, setErrors] = useState<string | null>(null);

  async function signIn(email: string, password: string) {
    api
      .post('/auth/sign-in', {
        email,
        password,
      })
      .then((response) => {
        setAuth(response.headers.authorization);
        localStorage.setItem('@IBAuth:token', response.headers.authorization);
        localStorage.setItem('@IBAuth:user', JSON.stringify(response.data));
      })
      .catch((error) => {
        if (error.response) {
          setErrors(error.response.data.errors.message);
        }
      });
  }

  async function signOut() {
    setAuth(null);
    localStorage.clear();
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
    <AuthContext.Provider value={{ auth, setAuth, signIn, signOut, errors }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
