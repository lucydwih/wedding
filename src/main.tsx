import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import './index.css';
import { SupabaseProvider } from './contexts/SupabaseContext';

const queryClient = new QueryClient();
const basename = import.meta.env.PROD ? '/wedding' : '/';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SupabaseProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename={basename}>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </SupabaseProvider>
  </React.StrictMode>
);
