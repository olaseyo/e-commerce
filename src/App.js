import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import LoginPage from "./pages/LoginPage";



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/product/:id" component={ProductDetailPage} />
        <Route path="/cart" component={ShoppingCartPage} />
        <Route path="/login" component={LoginPage} />
      </Routes>
    </Router>
  );
}

export default App;
