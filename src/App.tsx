import { Outlet } from 'react-router';
import { Nav } from './comps/Nav';
import './index.css';

export const App = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <p className="text-4xl">media-track</p>
      <Nav />
      <Outlet />
    </div>
  );
};
