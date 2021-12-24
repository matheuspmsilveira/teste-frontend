import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Modal from 'react-modal';
import { GlobalStyle } from './styles/global';
import Login from './pages/Login';

import { useAuth } from './hooks/useAuth';
import Home from './pages/Home';
import { useState } from 'react';
import BookModal from './components/BookModal';

Modal.setAppElement('#root');

function App() {
  const { auth } = useAuth();
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  function handleOpenBookModal() {
    setIsBookModalOpen(true);
  }

  function handleCloseBookModal() {
    setIsBookModalOpen(false);
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              auth ? <Home onOpenBookModal={handleOpenBookModal} /> : <Login />
            }
          />
        </Routes>
      </Router>
      <BookModal isOpen={isBookModalOpen} onRequestClose={handleCloseBookModal}/>
      <GlobalStyle />
    </div>
  );
}

export default App;
