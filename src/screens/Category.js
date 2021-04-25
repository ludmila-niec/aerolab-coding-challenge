import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "../components/Products";
import PageNotFound from "../components/PageNotFound";
import { useProducts } from "../context/product/productContext";
import { useParams } from "react-router-dom";
import { STATUS } from "../service/status"

const Category = () => {
  const [status, setStatus] = useState(STATUS.IDLE);
  const {
    state: { products },
    actions: { loadProducts },
  } = useProducts();
  const { category_name: categoryName } = useParams();

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

  const productsByCategory =
    products.length > 0 &&
    products.filter((product) => product.category === categoryName);

  if (productsByCategory.length === 0) return <PageNotFound />;

  return (
    <>
      {productsByCategory.length > 0 && (
        <>
          <Hero title={categoryName} />
          <Categories />
          <Products products={productsByCategory} status={status} />
        </>
      )}
    </>
  );
};

export default Category;
