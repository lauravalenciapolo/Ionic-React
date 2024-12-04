import { IonAvatar, IonList, IonItem, IonLabel, IonIcon } from "@ionic/react";
import { heart } from "ionicons/icons";
import "./ListProducts.css";
import Product from "../../types/productModel";

interface FavoritesProps {
    favorites: Product[];
    handleFavorite: (product: Product) => void;
}

const ListProducts: React.FC<FavoritesProps> = ({ favorites, handleFavorite }) => {
  return (
    <div className="container_listProducts">
        <IonList className="list_favorites">
            {favorites.map((product) => (
                <IonItem key={product.id}>
                <IonAvatar slot="start">
                    <img src={product.images[0]} alt={product.title} />
                </IonAvatar>
                <IonLabel class="ion-text-wrap">{product.title}</IonLabel>
                <IonLabel slot="end">${product.price}</IonLabel>
                <IonIcon icon={heart} color="danger" slot="end" 
                onClick={() => {handleFavorite(product)}}/>
                </IonItem>
            ))}
        </IonList>
    </div>
  );
};

export default ListProducts;
