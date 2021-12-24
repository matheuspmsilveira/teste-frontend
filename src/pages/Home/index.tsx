import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';
import { booksData as mockBooks } from '../../data/books';
import { Container } from './styles';
import { BookCard } from '../../components/BookCard';

import iaosaysLogo from '../../assets/ioasys-name.svg';
import booksLogo from '../../assets/books-logo.svg';
import logOut from '../../assets/logOut.svg';
import nextSvg from '../../assets/next.svg';

interface IUser {
  birthdate: string;
  email: string;
  gender: string;
  id: string;
  name: string;
}

interface IBook {
  id: string;
  title: string;
  description: string;
  authors: string[];
  pageCount: number;
  category: string;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  publisher: string;
  published: number;
}

interface IBooks {
  data: Array<IBook>;
  page: number;
  totalPages: number;
  totalItems: number;
}

interface HomeProps {
  onOpenBookModal: () => void;
}

export default function Home({ onOpenBookModal }: HomeProps) {
  const { signOut, auth } = useAuth();
  const [books, setBooks] = useState<IBooks | null>(null);
  const [user, setUser] = useState<IUser>({} as IUser);

  useEffect(() => {
    const storagedUser = localStorage.getItem('@IBAuth:user');
    if (storagedUser) setUser(JSON.parse(storagedUser));

    async function loadBooks() {
      if (auth)
        api
          .get('/books', { headers: { Authorization: auth } })
          .then((response) => setBooks(response.data));
    }
    loadBooks();

    if (!books) setBooks(mockBooks);
  }, []);

  function nextPage() {
    if (books && books.page < books.totalPages)
      setBooks({
        ...books,
        page: books.page + 1,
      });
  }

  function backPage() {
    if (books && books.page > 1)
      setBooks({
        ...books,
        page: books.page - 1,
      });
  }

  return (
    <Container>
      <header>
        <div className="headerTitle">
          <img src={iaosaysLogo} alt="Ioasys" />
          <img src={booksLogo} alt="Books" />
        </div>
        <div className="welcome">
          {user && (
            <p>
              Bem-vindo, <strong>{user.name}</strong> !
            </p>
          )}
          <button type="button" onClick={signOut}>
            <img src={logOut} alt="Sair" />
          </button>
        </div>
      </header>
      <main>
        {books &&
          books.data.map((book: IBook) => (
            <BookCard book={book} handleOpenBookModal={onOpenBookModal} />
          ))}
      </main>
      {books && (
        <section>
          <p>{`Página ${books.page} de ${books.totalPages} `}</p>
          <div>
            <button
              type="button"
              onClick={backPage}
              disabled={books.page === 1}
            >
              <img className="backButton" src={nextSvg} alt="Página anterior" />
            </button>
            <button
              type="button"
              onClick={nextPage}
              disabled={books.page === books.totalPages}
            >
              <img src={nextSvg} alt="Próxima página" />
            </button>
          </div>
        </section>
      )}
    </Container>
  );
}
