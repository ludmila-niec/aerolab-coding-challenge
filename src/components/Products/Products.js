import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import Pagination from "./Pagination";
import ProductList from "./ProductList";
import * as api from "../../service/productApi";
import { Navigation } from "./styled";

export const TYPES = {
  MOST_RECENT: "MOST_RECENT",
  LOWEST_PRICE: "LOWEST_PRICE",
  HIGHEST_PRICE: "HIGHEST_PRICE",
};

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [filterApplyed, setFilterApplyed] = useState(TYPES.MOST_RECENT);
  const [error, setError] = useState("");

  useEffect(() => {
    if (productList.length > 0) return;
    api
      .getProducts()
      .then((data) => {
        setProductList(data);
        setFilteredList(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Error loading products");
      });
  }, []);

  const showMostRecent = (selected) => {
    setFilterApplyed(selected);
    setFilteredList(productList);
  };

  const showLowestPrice = (selected) => {
    setFilterApplyed(selected);
    const products = [...productList];
    const lowestPriceList = products.sort((a, b) => a.cost - b.cost);
    setFilteredList(lowestPriceList);
  };
  const showHighestPrice = (selected) => {
    setFilterApplyed(selected);
    const products = [...productList];
    const highestPriceList = products.sort((a, b) => b.cost - a.cost);
    setFilteredList(highestPriceList);
  };

  return (
    <section>
      <Navigation>
        <Filter
          filterApplyed={filterApplyed}
          actions={{ showMostRecent, showLowestPrice, showHighestPrice }}
        />
        <Pagination />
      </Navigation>
      {filteredList.length > 0 && <ProductList products={filteredList} />}
    </section>
  );
};

export default Products;
