import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function TopBar() {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-block h-8 w-8 rounded-xl bg-blue-500 text-white grid place-items-center">
            B
          </span>
          <span>Bounan Dashboard</span>
        </Link>
        <nav className="flex items-center gap-3">
          <Link to="/dashboard" className="text-sm text-gray-700">
            Dashboard
          </Link>
          {user ? (
            <>
              <Link to="/profile" className="text-sm text-gray-700">
                {user.email}
              </Link>
              <button className="btn-primary text-sm" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="btn-primary text-sm">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
