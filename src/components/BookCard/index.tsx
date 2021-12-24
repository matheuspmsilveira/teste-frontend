import { useBook } from '../../hooks/useBook';
import { Container } from './styles';

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

interface BookCardProps {
  book: IBook;
  handleOpenBookModal(): void;
}

export function BookCard({ book, handleOpenBookModal }: BookCardProps) {
  const { setBookId } = useBook();

  function saveBookId() {
    setBookId(book.id);
  }

  return (
    <Container
      onClick={() => {
        handleOpenBookModal();
        saveBookId();
      }}
    >
      <img src={book.imageUrl} alt="BookImage" />
      <div className="bookInformation">
        <div>
          <h2>{book.title}</h2>
          {book.authors.map((author) => (
            <h3>{author}</h3>
          ))}
        </div>
        <div>
          <p>{`${book.pageCount} páginas`}</p>
          <p>{`Editora ${book.publisher}`}</p>
          <p>{`Publicado em ${book.published}`}</p>
        </div>
      </div>
    </Container>
  );
}
