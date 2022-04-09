import { AppBar, Toolbar, Button, Stack } from "@mui/material";
import { useHistory } from "react-router";

const Navbar = () => {
  const history = useHistory();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Stack spacing={2} direction="row">
            <Button
              onClick={() => history.push("/categories")}
              variant="outlined"
              color="inherit"
            >
              Categories
            </Button>
            <Button
              onClick={() => history.push("/products")}
              variant="outlined"
              color="inherit"
            >
              Products
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
