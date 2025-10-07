import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import { useAuth } from './auth/AuthContext';
import TopBar from './components/TopBar';
import SideNav from './components/SideNav';

export default function App() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex">
      {user && <SideNav />}
      <div className="flex-1 flex flex-col">
        <TopBar />
        <div className="p-4 max-w-6xl w-full mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/dashboard" />}
            />
            <Route
              path="/dashboard"
              element={user ? <Dashboard /> : <Navigate to="/login" />}
            />
            <Route
              path="/profile"
              element={user ? <Profile /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
