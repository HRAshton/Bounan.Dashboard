import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function Home() {
  const { user } = useAuth();
  return (
    <div className="grid place-items-center min-h-[70vh] p-4">
      <div className="card max-w-md text-center">
        <h1 className="text-2xl font-bold mb-2">Welcome to Bounan</h1>
        <p className="text-gray-600 mb-4">
          A minimal React + TS dashboard starter. Mobile-first, with mock auth.
        </p>
        <div className="flex gap-2 justify-center">
          <Link to="/dashboard" className="btn-primary">
            Open Dashboard
          </Link>
          {user ? (
            <Link to="/profile" className="btn">
              Profile
            </Link>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
