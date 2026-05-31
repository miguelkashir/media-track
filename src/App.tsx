import { Outlet } from 'react-router';
import { Nav } from './comps/Nav';

export const App = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};
