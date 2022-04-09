import { ReactNode } from "react";
import { CategoriesProvider } from "./CategoriesProvider";
import { ProductsProvider } from "./ProductsProvider";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <>
      <CategoriesProvider>
        <ProductsProvider>{children}</ProductsProvider>
      </CategoriesProvider>
    </>
  );
};
export default Providers;
