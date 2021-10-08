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
import Navbar from "./components/Navbar";

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
            <Route path="/home">
              <Navbar />
              <Home />
            </Route>
            <Route path="/about">
              <Navbar />
              <About />
            </Route>
            <Route path="/catalog">
              <Navbar />
              <Catalog />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
