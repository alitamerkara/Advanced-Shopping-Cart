import React, { useState } from "react";
import AddingCart from "./AddingCart";

const Store = ({
  products,
  setCount,
  updatedProducts,
  setUpdatedProducts,
  basket,
  setBasket,
  total,
  setTotal,
}) => {
  const addCart = (e) => {
    const urunler = updatedProducts.length != 0 ? updatedProducts : products;
    const value = urunler?.map((product) => {
      if (product.name == e.target.value) {
        const newProduct = { ...product };
        newProduct.piece++;
        setBasket([...basket, newProduct]);
        setTotal(total + newProduct.price);

        return newProduct;
      }
      return product;
    });
    setUpdatedProducts(value);
    setCount((count) => count + 1);
  };

  const actualProducts =
    updatedProducts && updatedProducts.length > 0 ? updatedProducts : products;

  return (
    <div className="container mx-auto grid grid-cols-5 gap-4">
      {actualProducts?.map((product, index) => {
        return (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md">
            <img
              src={product.url}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2 text-xl">${product.price}</p>
              <span>
                {product.piece == 0 ? (
                  <button
                    onClick={addCart}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
                    value={product.name}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <AddingCart
                    name={product.name}
                    value={product.name}
                    setCount={setCount}
                    setBasket={setBasket}
                    basket={basket}
                    total={total}
                    setTotal={setTotal}
                    updatedProducts={updatedProducts}
                    setUpdatedProducts={setUpdatedProducts}
                    piece={product.piece}
                  />
                )}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Store;
