import { useState } from 'react';
import { Container } from './styles';
import headerLogo from '../../assets/header-login.svg';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { singIn } = useAuth();

  async function handleSubmit() {
    singIn(email, password);
  }

  return (
    <Container>
      <div>
        <img src={headerLogo} alt="Logo Cabeçalho" />
        <form>
          <label htmlFor="login-email">
            <div>
              <p>Email</p>
              <input
                type="email"
                name="email"
                id="login-email"
                value={email}
                onChange={({ target: { value } }) => setEmail(value)}
              />
            </div>
          </label>
          <label htmlFor="login-password">
            <div>
              <p>Senha</p>
              <input
                type="password"
                name="password"
                id="login-password"
                value={password}
                onChange={({ target: { value } }) => setPassword(value)}
              />
            </div>
            <button type="button" onClick={handleSubmit}>
              Entrar
            </button>
          </label>
        </form>
      </div>
    </Container>
  );
}
