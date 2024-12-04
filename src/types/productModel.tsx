interface category {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updateAt: string;
  }
  interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: category;
    images: string[];
    creationAt: string;
    updateAt: string;
    favorite?: boolean;
    dateAddFavorite?: string;
  }

  export default Product