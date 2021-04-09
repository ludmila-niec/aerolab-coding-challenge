import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import Pagination from "./Pagination";
import ProductList from "./ProductList";
import Spinner from "../Spinner";
import * as api from "../../service/productApi";
import { Navigation, WrapperBottom, LoadingContainer } from "./styled";
import useFilter from "../../hooks/useFilter";
import usePagination from "../../hooks/usePagination";

export const TYPES = {
  MOST_RECENT: "MOST_RECENT",
  LOWEST_PRICE: "LOWEST_PRICE",
  HIGHEST_PRICE: "HIGHEST_PRICE",
};

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const {
    filteredList,
    setFilteredList,
    filterApplyed,
    showMostRecent,
    showLowestPrice,
    showHighestPrice,
  } = useFilter(TYPES.MOST_RECENT, productList);
  const {
    currentPage,
    setCurrentPage,
    currentProducts,
    numberOfPages,
    numberOfProductsShowing,
    setNumberOfProductsShowing,
    handleNextPage,
    handlePrevPage,
  } = usePagination(filteredList);

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

  useEffect(() => {
    setCurrentPage(1);
    setNumberOfProductsShowing(16);
  }, [filterApplyed]);

  const loadingState = (
    <LoadingContainer>
      <Spinner />
      <p>Loading products</p>
    </LoadingContainer>
  );
  const isProductListLoaded = currentProducts.length > 0;
  return (
    <section>
      <Navigation>
        <Filter
          filterApplyed={filterApplyed}
          actions={{ showMostRecent, showLowestPrice, showHighestPrice }}
        />
        <Pagination
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          numberOfPages={numberOfPages}
          currentPage={currentPage}
          numberOfProductsShowing={numberOfProductsShowing}
        />
      </Navigation>
      {isLoading ? (
        loadingState
      ) : isProductListLoaded ? (
        <ProductList products={currentProducts} />
      ) : (
        <h2>{error}</h2>
      )}
      <WrapperBottom>
        <Pagination
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          numberOfPages={numberOfPages}
          currentPage={currentPage}
          numberOfProductsShowing={numberOfProductsShowing}
        />
      </WrapperBottom>
    </section>
  );
};

export default Products;
