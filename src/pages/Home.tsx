import { IonAlert, IonContent, IonHeader, IonPage, IonSearchbar, IonSpinner, IonTitle, IonToolbar, useIonViewDidEnter, useIonViewWillEnter } from '@ionic/react';
import ExploreContainer from '../components/CardsProducts/CardsProducts';
import './Home.css';
import { SetStateAction, useEffect, useState } from 'react';
import getProducts from '../services/servicesGet';
import CardsProducts from '../components/CardsProducts/CardsProducts';
import Product from '../types/productModel';


const Home: React.FC = () => {

  const [searchItem, setSearchItem] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [productsFiltered, setProductsFiltered] = useState<Product[]>([]);
  const [errorFetch, setErrorFetch] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    const response = await getProducts();
    setLoading(false);
    if(response.error){
      setErrorFetch(true);
    }
    setProductsFiltered(response);
    setProducts(response);
  };

  useIonViewDidEnter(() => {
    fetchProducts();
  });

  useEffect(() => {
    if(searchItem === '') setProductsFiltered(products);
    else{ 
      const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchItem.toLowerCase()));
      setProductsFiltered(filteredProducts);
    }

  },[searchItem]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonTitle >Productos</IonTitle>
        </IonToolbar>
        <IonSearchbar value={searchItem} 
        onIonInput={(e) =>setSearchItem(e.detail.value!)}
        debounce={500}
        ></IonSearchbar>
        </IonHeader>
        {productsFiltered.length > 0 &&<CardsProducts products={productsFiltered} />}
        {loading && 
          <div className='spinner_home'>
            <IonSpinner name="crescent" color="primary" />
          </div>}
        {errorFetch && <IonAlert
          isOpen={errorFetch}
          subHeader="Algo salió mal"
          message="Intentalo nuevamente"
          buttons={['OK']}></IonAlert>}
    </IonPage>
  );
};

export default Home;
