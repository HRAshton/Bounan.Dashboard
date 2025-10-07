import { useAuth } from '../auth/AuthContext';

export default function Profile() {
  const { user, logout } = useAuth();
  if (!user) return null;
  return (
    <div className="card max-w-lg">
      <h2 className="text-xl font-semibold mb-2">Profile</h2>
      <div className="text-sm text-gray-700">Email: {user.email}</div>
      <button className="btn-primary mt-4" onClick={logout}>
        Sign out
      </button>
    </div>
  );
}
