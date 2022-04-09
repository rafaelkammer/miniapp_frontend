import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

import api from "../../services/api";

interface CategoriesProviderProps {
  children: ReactNode;
}
interface Category {
  ukey?: number;
  name: string;
}

interface CategoriesProviderData {
  categories: Category[];
  listCategories: () => void;
}

const CategoriesContext = createContext<CategoriesProviderData>(
  {} as CategoriesProviderData
);

export const CategoriesProvider = ({ children }: CategoriesProviderProps) => {
  const [categories, setCategories] = useState([]);

  const listCategories = () => {
    api
      .get(`categories`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    listCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories, listCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
export const useCategories = () => useContext(CategoriesContext);
