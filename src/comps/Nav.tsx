import { NavLink } from 'react-router';

export const Nav = () => {
  return (
    <nav>
      <h1>media-track</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </nav>
  );
};
