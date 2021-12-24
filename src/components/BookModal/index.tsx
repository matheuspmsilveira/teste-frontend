import Modal from 'react-modal';

interface BookModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function BookModal({ isOpen, onRequestClose }: BookModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Novo Livro</h2>
    </Modal>
  );
}
