import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import Login from './pages/Login';

import { useAuth } from './hooks/useAuth';
import Home from './pages/Home';

function App() {
  const { auth } = useAuth();

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={auth ? <Home /> : <Login />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;
