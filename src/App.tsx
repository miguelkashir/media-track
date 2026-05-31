import { Outlet } from 'react-router';
import { Nav } from './comps/Nav';
import { Analytics } from '@vercel/analytics/next';

export const App = () => {
  return (
    <div>
      <Analytics />
      <Nav />
      <Outlet />
    </div>
  );
};
