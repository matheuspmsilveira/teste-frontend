import Modal from 'react-modal';
import { useBook } from '../../hooks/useBook';
import { Container } from './styles';

import quotesSvg from '../../assets/quotes.svg';
import closeSvg from '../../assets/closeSvg.svg';

interface BookModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function BookModal({ isOpen, onRequestClose }: BookModalProps) {
  const { book } = useBook();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeSvg} alt="Fechar Modal" />
      </button>
      {book && (
        <Container>
          <img src={book.imageUrl} alt="Imagem do Livro" />
          <div className="allBookInfo">
            <div className="header">
              <h1>{book.title}</h1>
              {book.authors.map((author) => (
                <span>{author}, </span>
              ))}
            </div>
            <div className="bookInfos">
              <h2>INFORMAÇÕES</h2>
              <div>
                <span className="infoTitle">Páginas</span>
                <span className="infoContent">{book.pageCount} páginas</span>
              </div>
              <div>
                <span className="infoTitle">Editora</span>
                <span className="infoContent">Editora {book.publisher}</span>
              </div>
              <div>
                <span className="infoTitle">Publicação</span>
                <span className="infoContent">{book.published}</span>
              </div>
              <div>
                <span className="infoTitle">Idioma</span>
                <span className="infoContent">{book.language}</span>
              </div>
              <div>
                <span className="infoTitle">Título Original</span>
                <span className="infoContent">{book.title}</span>
              </div>
              <div>
                <span className="infoTitle">ISBN-10</span>
                <span className="infoContent">{book.isbn10}</span>
              </div>
              <div>
                <span className="infoTitle">ISBN-13</span>
                <span className="infoContent">{book.isbn13}</span>
              </div>
            </div>
            <div className="publisherDescription">
              <h2>RESENHA DA EDITORA</h2>
              <p>
                <img src={quotesSvg} alt="Aspas" /> {book.description}
              </p>
            </div>
          </div>
        </Container>
      )}
    </Modal>
  );
}
