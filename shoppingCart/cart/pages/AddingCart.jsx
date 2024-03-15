import React, { useState } from "react";

const AddingCart = ({
  name,
  setCount,
  basket,
  setBasket,
  total,
  setTotal,
  piece,
  updatedProducts,
  setUpdatedProducts,
}) => {
  const minusFunc = (e) => {
    const value = updatedProducts.map((product) => {
      if (product?.name == name) {
        setTotal(total - product.price);
        return {
          ...product,
          piece: product.piece - 1,
          updatedPrice: product.updatedPrice - product.price,
        };
      }
      return product;
    });
    setUpdatedProducts(value);
    const deger = basket.map((product) => {
      if (product?.name == name) {
        setTotal(total - product.price);
        return {
          ...product,
          piece: product.piece - 1,
          updatedPrice: product.updatedPrice - product.price,
        };
      } else {
        return product;
      }
    });
    setBasket(deger);
    setCount((count) => count - 1);
  };
  const plusFunc = (e) => {
    const value = updatedProducts.map((product) => {
      if (product?.name == e.target.value) {
        setTotal(total + product.price);
        return {
          ...product,
          piece: product.piece + 1,
          updatedPrice: product.price * (product.piece + 1),
        };
      }
      return product;
    });
    setUpdatedProducts(value);
    const deger = basket.map((product) => {
      if (product?.name == e.target.value) {
        setTotal(total + product.price);
        return {
          ...product,
          piece: product.piece + 1,
          updatedPrice: product.price * (product.piece + 1),
        };
      } else {
        return product;
      }
    });
    setBasket(deger);

    setCount((count) => count + 1);
  };

  return (
    <>
      <button
        onClick={minusFunc}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md mr-3"
        value={name}
      >
        -
      </button>
      <span className="text-gray-600 mb-2 text-xl">{piece}</span>
      <button
        onClick={plusFunc}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md ml-3"
        value={name}
      >
        +
      </button>
    </>
  );
};

export default AddingCart;
