import { createBrowserRouter } from 'react-router';
import { App } from './App';
import { Home } from './pages/Home';
import { Movies } from './pages/movies/Movies';

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/movies', element: <Movies /> },
    ],
  },
]);
