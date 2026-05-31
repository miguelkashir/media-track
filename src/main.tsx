import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { Analytics } from '@vercel/analytics/next';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Analytics />
    <RouterProvider router={router} />
  </StrictMode>
);
