import Home from "./pages";
import "./styles/index.css";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { grey } from "@mui/material/colors";
import { lime } from "@mui/material/colors";
import Catalog from "./pages/catalog";
import About from "./pages/about";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Product from "./components/Product";
import ShoppingList from "./components/ShoppingList";

const theme = createTheme({
  palette: {
    success: {
      main: lime[500],
    },
    info: {
      main: grey[50],
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Layout>
              <Route path="/index">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/catalog">
                <Catalog />
              </Route>
              <Route path="/product">
                <Product />
              </Route>
              <Route path="/shoppinglist">
                <ShoppingList />
              </Route>
            </Layout>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
