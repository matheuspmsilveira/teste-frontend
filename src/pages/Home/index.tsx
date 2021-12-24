import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';
import { booksData as mockBooks } from '../../data/books';
import { Container } from './styles';

import iaosaysLogo from '../../assets/ioasys-name.svg';
import booksLogo from '../../assets/books-logo.svg';
import logOut from '../../assets/logOut.svg';

interface IUser {
  birthdate: string;
  email: string;
  gender: string;
  id: string;
  name: string;
}

export default function Home() {
  const { signOut, auth } = useAuth();
  const [books, setBooks] = useState<object | null>(null);
  const [user, setUser] = useState<IUser>({} as IUser);

  useEffect(() => {
    const storagedUser = localStorage.getItem('@IBAuth:user');
    if (storagedUser) setUser(JSON.parse(storagedUser));

    async function loadBooks() {
      if (auth)
        api
          .get('/books', { headers: { Authorization: auth } })
          .then((response) => setBooks(response));
    }
    loadBooks();

    if (!books) setBooks(mockBooks);
  }, []);

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
    </Container>
  );
}
