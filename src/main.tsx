import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { FavoritesProvider } from './utils/context/favoritesContext';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </React.StrictMode>
);