import { Route, Switch } from "react-router-dom";
import CategoriesPage from "../pages/categories";
import ProductsPage from "../pages/products";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <CategoriesPage />
        </Route>
        <Route path="/categories">
          <CategoriesPage />
        </Route>
        <Route path="/products">
          <ProductsPage />
        </Route>
      </Switch>
    </>
  );
};
export default Router;
