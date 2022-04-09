import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

import api from "../../services/api";

interface productsProviderProps {
  children: ReactNode;
}
interface Product {
  ukey: number;
  name: string;
  code: string;
  quantity: number;
  is_active: boolean;
  category_ukey: number;
}

interface productsProviderData {
  products: Product[];
  listProducts: () => void;
}

const productsContext = createContext<productsProviderData>(
  {} as productsProviderData
);

export const ProductsProvider = ({ children }: productsProviderProps) => {
  const [products, setProducts] = useState([]);

  const listProducts = () => {
    api
      .get(`products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    listProducts();
  }, []);

  return (
    <productsContext.Provider value={{ products, listProducts }}>
      {children}
    </productsContext.Provider>
  );
};
export const useProducts = () => useContext(productsContext);
