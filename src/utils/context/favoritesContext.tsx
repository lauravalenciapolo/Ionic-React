import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Product from '../../types/productModel';

interface FavoritesContextProps {
  favorites: Product[];
  handleFavorite: (product: Product) => void;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Product[]>(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleFavorite = (product: Product) => {
    const productExists = favorites.find((fav) => fav.id === product.id);
    if (productExists) {
      setFavorites(favorites.filter((fav) => fav.id !== product.id));
    } else {
      setFavorites([...favorites, { ...product, dateAddFavorite: new Date().toISOString() }]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, handleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites debe ser usado dentro de un FavoritesProvider');
  }
  return context;
};
