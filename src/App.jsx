import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/MainComponents/Navbar";
import Sidebar from "./components/MainComponents/Sidebar";
import Restaurant from "./pages/Restaurant";
import Category from "./pages/Category";
import Foods from "./pages/Foods";
import Card from "./pages/Card";
import Favourite from "./pages/Favourite";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route path="/foods" element={<Foods />} />
          <Route path="/restaurants" element={<Restaurant />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/card" element={<Card />} />
          <Route path="/favourite" element={<Favourite />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
