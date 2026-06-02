import { NavLink } from 'react-router';

export const Nav = () => {
  const isActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-2xl font-bold' : 'text-2xl';

  return (
    <nav>
      <div className="flex gap-4">
        <NavLink className={isActive} to="/">
          home
        </NavLink>
        <NavLink className={isActive} to="/movies">
          movies
        </NavLink>
      </div>
    </nav>
  );
};
