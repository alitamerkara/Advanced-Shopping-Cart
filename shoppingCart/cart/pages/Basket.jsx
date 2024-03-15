import { useEffect } from "react";

const Basket = ({
  basket,
  setBasket,
  setCount,
  total,
  setTotal,
  updatedProducts,
  setUpdatedProducts,
}) => {
  useEffect(() => {
    if (!basket) {
      setBasket([]);
    }
  }, [basket, setBasket]);
  const decraseFunc = (e) => {
    const deger = basket?.map((product) => {
      if (e.target.value == product?.name) {
        return {
          ...product,
          piece: product.piece - 1,
          updatedPrice: product.updatedPrice - product.price,
        };
      }

      return product;
    });
    setBasket(deger);
    setCount((count) => count - 1);
    decraseTotal();
  };
  const decraseTotal = () => {
    basket?.map((product) => {
      setTotal(total - product.price);
    });
  };
  const incraseTotal = () => {
    basket?.map((product) => {
      setTotal(total + product.price);
    });
  };
  const increaseFunc = (e) => {
    const deger = basket?.map((product) => {
      if (e.target.value == product?.name) {
        return {
          ...product,
          piece: product.piece + 1,
          updatedPrice: product.price * (product.piece + 1),
        };
      }
      return product;
    });
    setBasket(deger);
    setCount((count) => count + 1);
    incraseTotal();
  };
  const clearBasket = () => {
    setTotal(0);
    setBasket();
    setCount(0);
    const value = updatedProducts.map((product) => {
      return { ...product, piece: 0 };
    });
    setUpdatedProducts(value);
  };

  const handleDelete = (e) => {
    const value = basket?.map((product) => {
      if (product?.name === e.currentTarget.value) {
        setTotal(total - product.piece * product.price);
        setCount(0);
        return;
      } else {
        return product;
      }
    });
    setBasket(value);
    const deger = updatedProducts.map((product) => {
      if (product?.name === e.currentTarget.value) {
        return { ...product, piece: 0 };
      } else {
        return product;
      }
    });
    setUpdatedProducts(deger);
  };
  return (
    <div>
      {basket?.map((product) => {
        if (
          product &&
          product.piece &&
          product.name &&
          product.price &&
          product.url &&
          product.piece !== undefined &&
          product.piece !== null &&
          product.piece !== 0
        ) {
          return (
            <div className="mt-4 relative max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <button
                className="absolute top-2 right-2 w-6 h-6 text-red-500 hover:text-red-600"
                onClick={handleDelete}
                value={product.name}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover md:w-48"
                    src={product.url}
                    alt="Ürün Resmi"
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {product.name}
                  </div>
                  <p className="mt-2 text-gray-500">
                    <button
                      onClick={decraseFunc}
                      value={product.name}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md mr-3"
                    >
                      -
                    </button>
                    {product.piece === 1
                      ? product.piece + " piece"
                      : product.piece + " pieces"}
                    <button
                      onClick={increaseFunc}
                      value={product.name}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md ml-3"
                    >
                      +
                    </button>
                  </p>
                  <div className="mt-4">
                    <span className="text-gray-600">Price: </span>
                    <span className="font-bold text-gray-800">
                      $
                      {product.piece === 1
                        ? product.price
                        : product.updatedPrice}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
      <div className="bg-gray-100 border border-gray-200 p-4 rounded-lg shadow-md text-center mt-4  ">
        <h2 className="text-lg font-semibold mb-2">Total</h2>
        <p className="text-3xl font-bold text-blue-500">${total}</p>
        <button
          onClick={clearBasket}
          className="mt-4 bg-red-500 text-white font-bold py-2 px-4 border border-red-700 rounded"
        >
          Clear the Basket
        </button>
      </div>
    </div>
  );
};

export default Basket;
