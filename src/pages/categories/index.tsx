import { Button, TextField } from "@mui/material";
import { useState } from "react";
import Navbar from "../../components/navbar";
import { useCategories } from "../../Provider/CategoriesProvider";
import api from "../../services/api";
import { CategoriesContainer } from "./style";

const CategoriesPage = () => {
  const { categories, listCategories } = useCategories();
  const [categoryName, setCategoryName] = useState("");

  const handleChange = (event: any) => {
    setCategoryName(event.target.value);
  };

  const handleAddCategory = (categoryData: any) => {
    api.post(`categories`, categoryData).then((response) => {
      listCategories();
      setCategoryName("");
    });
  };

  return (
    <>
      <Navbar />
      <CategoriesContainer>
        <ul>
          {categories.map((category) => (
            <li key={category.name}>
              <h3>{`Ukey: ${category.ukey} - ${category.name}`}</h3>
            </li>
          ))}
        </ul>
        <h1>New category insert</h1>
        <TextField
          id="outlined-basic"
          label="Category name"
          variant="outlined"
          size="small"
          margin="normal"
          value={categoryName}
          onChange={handleChange}
        />
        <Button
          onClick={() => {
            handleAddCategory({ name: categoryName });
          }}
          size="large"
          variant="contained"
        >
          Add new category
        </Button>
      </CategoriesContainer>
    </>
  );
};

export default CategoriesPage;
