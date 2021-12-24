import Modal from 'react-modal';
import { useBook } from '../../hooks/useBook';

interface BookModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function BookModal({ isOpen, onRequestClose }: BookModalProps) {
  const { book } = useBook();

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Novo Livro</h2>
    </Modal>
  );
}
