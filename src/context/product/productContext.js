import React, { createContext, useContext, useState } from "react";
import { getProducts } from "../../service/productApi";
export const ProductContext = createContext();
// guardo los productos en context ya que la misma lista es utilizada tanto en Home como en Categories. Evita llamar repetidas veces a las api

function ProductProvider({ children }) {
  const [productList, setProductList] = useState([]);

  async function handleLoadProducts() {
    try {
      const response = await getProducts();
      setProductList(response);
    } catch (err) {
      throw err;
    }
  }

  const state = { products: productList };
  const actions = { loadProducts: handleLoadProducts };
  const contextValue = { state, actions };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error(
      "ProductContext must be used within ProductProvider. Wrap a parent component in <ProductProvider> to fix this error"
    );
  }
  return context;
}

export default ProductProvider;
