import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Recipes from "./components/recipes";
import ShoppingList from "./components/shoppingList/ShoppingList";

const Loader = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Recipes />}></Route>
        <Route path="/shopping-list" element={<ShoppingList />}></Route>
        <Route path="/loggedOut" element={<Login />}></Route>
      </Routes>
    </>
  );
};

export default Loader;
