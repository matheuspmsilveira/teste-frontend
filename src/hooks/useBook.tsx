import {
  createContext,
  useState,
  ReactNode,
  useContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';
import { bookInfo as mockBookInfo } from '../data/bookInfo';
import { api } from '../services/api';
import { useAuth } from './useAuth';

interface BookProviderProps {
  children: ReactNode;
}

interface BookContextData {
  bookId: string | null;
  setBookId: Dispatch<SetStateAction<string | null>>;
  book: object | null;
}

const BookContext = createContext<BookContextData>({} as BookContextData);

export function BookProvider({ children }: BookProviderProps) {
  const { auth } = useAuth();
  const [bookId, setBookId] = useState<string | null>(null);
  const [book, setBook] = useState<object | null>(null);

  useEffect(() => {
    if (bookId && auth) {
      api
        .get(`/books/${bookId}`, { headers: { Authorization: auth } })
        .then((response) => setBook(response.data))
        .catch((error) => {
          console.log(error);
          setBook(mockBookInfo);
        });
    }
  }, [bookId]);

  return (
    <BookContext.Provider value={{ bookId, setBookId, book }}>
      {children}
    </BookContext.Provider>
  );
}

export function useBook() {
  const context = useContext(BookContext);

  return context;
}
