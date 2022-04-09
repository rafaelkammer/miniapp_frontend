import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import Navbar from "../../components/navbar";
import { useCategories } from "../../Provider/CategoriesProvider";
import { useProducts } from "../../Provider/ProductsProvider";
import api from "../../services/api";
import { ProductsContainer } from "./style";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

const ProductsPage = () => {
  const { categories } = useCategories();
  const { products, listProducts } = useProducts();
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [is_active, setIs_active] = useState("true");
  const [category_ukey, setCategory_ukey] = useState("");

  const handleName = (event: any) => {
    setName(event.target.value);
  };
  const handleCode = (event: any) => {
    setCode(event.target.value);
  };
  const handleQuantity = (event: any) => {
    setQuantity(event.target.value);
  };
  const handleActive = (event: any) => {
    setIs_active(event.target.value);
  };
  const handleCategory_ukey = (event: any) => {
    setCategory_ukey(event.target.value);
  };

  const joinedData = {
    name: name,
    code: code,
    quantity: Number(quantity),
    is_active: Boolean(is_active),
    category_ukey: Number(category_ukey),
  };

  const handleAddProduct = (ProductData: any) => {
    api.post(`products`, ProductData).then((response) => {
      listProducts();
      setName("");
      setCode("");
      setQuantity(0);
      setIs_active("true");
      setCategory_ukey("");
    });
  };

  const handleDeleteProduct = (ukey: any) => {
    api.delete(`products/${Number(ukey)}`).then((response) => listProducts());
  };

  return (
    <>
      <Navbar />
      <ProductsContainer>
        <ul>
          {products.map((product) => (
            <li key={product.name}>
              <div>
                <h3>{`Ukey: ${product.ukey}`}</h3>
                <h3>{`Product: ${product.name}`}</h3>
                <h3>{`Code: ${product.code}`}</h3>
                <h3>{`Quantity: ${product.quantity}`}</h3>
                <h3>{`Active: ${product.is_active ? "Yes" : "No"}`}</h3>
                <h3>{`Category: ${
                  categories.filter((category) => {
                    return category.ukey === product.category_ukey;
                  })[0]?.name
                }`}</h3>
              </div>
              <div>
                <button>
                  <EditIcon />
                </button>
                <button
                  onClick={() => {
                    handleDeleteProduct(product.ukey);
                  }}
                >
                  <DeleteForeverIcon />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <h1>New product insert</h1>
        <TextField
          id="name"
          label="Product name"
          variant="outlined"
          size="small"
          margin="dense"
          value={name}
          onChange={handleName}
        />
        <TextField
          id="code"
          label="Product code"
          variant="outlined"
          size="small"
          margin="dense"
          value={code}
          onChange={handleCode}
        />
        <TextField
          id="quantity"
          label="Product quantity"
          variant="outlined"
          size="small"
          margin="dense"
          value={quantity}
          onChange={handleQuantity}
        />
        <InputLabel id="category">Active</InputLabel>
        <Select
          labelId="category"
          id="is_active"
          value={is_active}
          label="Category"
          onChange={handleActive}
        >
          <MenuItem value={"true"}>Yes</MenuItem>
          <MenuItem value={"false"}>No</MenuItem>
        </Select>
        <InputLabel id="category">Category</InputLabel>
        <Select
          labelId="category"
          id="category_ukey"
          value={category_ukey}
          label="Category"
          onChange={handleCategory_ukey}
        >
          {categories.map((category) => (
            <MenuItem value={category?.ukey}>{category?.name}</MenuItem>
          ))}
        </Select>
        <Button
          onClick={() => {
            handleAddProduct(joinedData);
          }}
          size="large"
          variant="contained"
        >
          Add new Product
        </Button>
      </ProductsContainer>
    </>
  );
};

export default ProductsPage;
