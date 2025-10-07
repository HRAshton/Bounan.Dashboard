import { NavLink } from 'react-router-dom';

export default function SideNav() {
  const linkCls = ({ isActive }: { isActive: boolean }) =>
    'block rounded-xl px-3 py-2 text-sm ' +
    (isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50');

  return (
    <aside className="hidden md:block w-64 border-r border-gray-200 bg-white">
      <div className="p-4">
        <div className="text-xs uppercase text-gray-500 mb-2">Navigation</div>
        <nav className="space-y-1">
          <NavLink to="/dashboard" className={linkCls}>
            Overview
          </NavLink>
          <NavLink to="/profile" className={linkCls}>
            Profile
          </NavLink>
        </nav>
      </div>
    </aside>
  );
}
