import { useAuth } from '../../hooks/useAuth';

export default function Home() {
  const { signOut } = useAuth();

  return (
    <div>
      Home
      <button type="button" onClick={signOut}>
        SignOut
      </button>
    </div>
  );
}
