import Bar from "../sections/navbar/Bar";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Basket from "../pages/Basket";
import Store from "../pages/Store";
import "./App.css";
import apple from "../assets/apple.jpg";
import pear from "../assets/pear.jpg";
import orange from "../assets/orange.jpg";
import banana from "../assets/banana.jpg";
import grapes from "../assets/grape.jpg";
import strawberry from "../assets//strawberry.webp";
import tomato from "../assets/tomato.webp";
import cucumber from "../assets/cucumber.jpg";
import potato from "../assets/potato.png";
import onion from "../assets/onion.jpg";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [updatedProducts, setUpdatedProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const products = [
    { name: "Apple", price: 8, url: apple, piece: 0 },
    { name: "Pear", price: 10, url: pear, piece: 0 },
    { name: "Orange", price: 9, url: orange, piece: 0 },
    { name: "Banana", price: 6, url: banana, piece: 0 },
    { name: "Grapes", price: 12, url: grapes, piece: 0 },
    { name: "Strawberry", price: 15, url: strawberry, piece: 0 },
    { name: "Tomato", price: 8, url: tomato, piece: 0 },
    { name: "Cucumber", price: 7, url: cucumber, piece: 0 },
    { name: "Potato", price: 5, url: potato, piece: 0 },
    { name: "Onion", price: 4, url: onion, piece: 0 },
  ];

  return (
    <>
      <Bar count={count} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/store"
          element={
            <Store
              updatedProducts={updatedProducts}
              setUpdatedProducts={setUpdatedProducts}
              count={count}
              setCount={setCount}
              products={products}
              basket={basket}
              setBasket={setBasket}
              total={total}
              setTotal={setTotal}
            />
          }
        />
        <Route
          path="/basket"
          element={
            <Basket
              updatedProducts={updatedProducts}
              setUpdatedProducts={setUpdatedProducts}
              basket={basket}
              setBasket={setBasket}
              setCount={setCount}
              total={total}
              setTotal={setTotal}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
