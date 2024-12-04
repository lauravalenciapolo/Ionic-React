import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonIcon, IonImg, IonItem, IonRow } from '@ionic/react';
import { cartOutline, heart, heartOutline } from 'ionicons/icons';
import { useState, useEffect } from 'react';
import './CardsProducts.css';
import  Product from '../../types/productModel';
import { useFavorites } from '../../utils/hooks/useFavorites';

interface CardsProductsProps {
  products: Product[];
}
const urlImagenProductNoFound = "https://media.istockphoto.com/id/1409329028/es/vector/no-hay-imagen-disponible-marcador-de-posici%C3%B3n-miniatura-icono-dise%C3%B1o-de-ilustraci%C3%B3n.jpg?s=1024x1024&w=is&k=20&c=C9V4HEDIvgzPCGoS01yUwYDxQ0P_rzLEsKGsHb7Zbok="
const CardsProducts: React.FC<CardsProductsProps> = ({ products }) => {
  const { favorites, handleFavorite } = useFavorites();

  return (
    <IonGrid className="container">
      <IonRow>
        {products.map((product) => { 
          return <IonCol size="12" sizeMd="6" sizeLg="4" key={product.id}>
            <IonCard className="container_card">
              <IonCardHeader>
                <IonCardSubtitle className="ion-text-capitalize">{product.category.name}</IonCardSubtitle>
                <IonCardTitle>{product.title}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonImg   
                  src={product.images[0]?.replace(/.*(https.*?)(["\]\s]*)$/, '$1') || urlImagenProductNoFound} 
                  alt={product.title} 
                  onIonError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (target) {
                      target.src = urlImagenProductNoFound;
                    }
                  }}
                   />
                <IonItem>
                  <IonItem className="" slot="start">
                    ${product.price}
                  </IonItem>
                  <IonItem slot="end" className="ion-gap">
                    <IonIcon icon={cartOutline} />
                    <IonIcon
                      icon={favorites.find((fav) => fav.id === product.id) ? heart : heartOutline}
                      onClick={() => handleFavorite(product)}
                      className="icon-heart"
                    />
                  </IonItem>
                </IonItem>
              </IonCardContent>
            </IonCard>
          </IonCol>}
        )}
      </IonRow>
    </IonGrid>
  );
};

export default CardsProducts;
