import { IonBackButton, IonContent, IonHeader, IonItem, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import './Favorites.css';
import ListProducts from '../components/ListProducts/ListProducts';
import { useFavorites } from '../utils/hooks/useFavorites';
import { useState, useEffect } from 'react';
import Product from '../types/productModel';

const Favorites: React.FC = () => {
  const { favorites, handleFavorite } = useFavorites();
  const [filterType, setFilterType] = useState<string>('');
  const [filteredFavorites, setFilteredFavorites] = useState<Product[]>(favorites);

  useEffect(() => {
    let updatedFavorites = [...favorites];
    if (filterType === 'nombre') {
      updatedFavorites.sort((a, b) => a.title.localeCompare(b.title));
    }
    if (filterType === 'precio') {
      updatedFavorites.sort((a, b) => a.price - b.price);
    }
    if (filterType === 'fechaAgregada') {
      updatedFavorites.sort((a, b) => {
        const dateA = a.dateAddFavorite ? new Date(a.dateAddFavorite).getTime() : 0;
        const dateB = b.dateAddFavorite ? new Date(b.dateAddFavorite).getTime() : 0;
        return dateB - dateA;
      });
    }
    setFilteredFavorites(updatedFavorites);
  }, [filterType, favorites]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonTitle>Tus favoritos</IonTitle>
          <IonBackButton defaultHref="/" />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem className='content_filter'>
          <p>Ordenar por:</p>
          <IonSelect value={filterType} placeholder="Seleccionar..." onIonChange={(e) => setFilterType(e.detail.value)}>
            <IonSelectOption value="nombre">Nombre</IonSelectOption>
            <IonSelectOption value="precio">Precio</IonSelectOption>
            <IonSelectOption value="fechaAgregada">Fecha de agregado</IonSelectOption>
          </IonSelect>
        </IonItem>
        <ListProducts favorites={filteredFavorites} handleFavorite={handleFavorite} />
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
