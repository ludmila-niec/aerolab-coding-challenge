import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "../components/Products";
import { useProducts } from "../context/product/productContext";
import { STATUS } from "../service/status";

const Home = () => {
  const [status, setStatus] = useState(STATUS.IDLE);
  const {
    state: { products },
    actions: { loadProducts },
  } = useProducts();

  useEffect(() => {
    if (products.length === 0) {
      setStatus(STATUS.PENDING);
      loadProducts()
        .then(() => setStatus(STATUS.RESOLVED))
        .catch(() => {
          setStatus(STATUS.REJECTED);
        });
    }
  }, [loadProducts, products.length]);

  return (
    <>
      <Hero title="Electronics" />
      <Categories />
      <Products products={products} status={status} />
    </>
  );
};

export default Home;
