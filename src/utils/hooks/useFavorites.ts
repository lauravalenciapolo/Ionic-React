import { useState, useEffect } from 'react';
import Product from '../../types/productModel';

export const useFavorites = () => {
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

  return {
    favorites,
    handleFavorite,
  };
};
