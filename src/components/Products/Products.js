import React, { useState, useEffect } from "react";
import Layout from '../Layout'
import Filter from "./Filter";
import Pagination from "./Pagination";
import ProductList from "./ProductList";
import Spinner from "../Spinner";
import * as api from "../../service/productApi";
import { Navigation, WrapperBottom, WrapperFlex } from "./styled";
import useFilter from "../../hooks/useFilter";
import usePagination from "../../hooks/usePagination";

export const TYPES = {
  MOST_RECENT: "MOST_RECENT",
  LOWEST_PRICE: "LOWEST_PRICE",
  HIGHEST_PRICE: "HIGHEST_PRICE",
};

const STATUS = {
  PENDING: "PENDING",
  RESOLVED: "RESOLVED",
  REJECTED: "REJECTED",
};

const Products = () => {
  const [status, setStatus] = useState(STATUS.PENDING);
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

  useEffect(() => {
    if (productList.length > 0) return;
    api
      .getProducts()
      .then((data) => {
        setProductList(data);
        setFilteredList(data);
        setStatus(STATUS.RESOLVED);
      })
      .catch(() => {
        setStatus(STATUS.REJECTED);
      });
  }, []);

  useEffect(() => {
    setCurrentPage(1);
    setNumberOfProductsShowing(16);
  }, [filterApplyed]);

  if (status === STATUS.PENDING) {
    return (
      <WrapperFlex>
        <Spinner />
        <p>Loading Products</p>
      </WrapperFlex>
    );
  }

  if (status === STATUS.REJECTED) {
    return (
      <WrapperFlex>
        <p>Something went wrong</p>
        <p className="error">Failed to load products</p>
      </WrapperFlex>
    );
  }

  return (
    <section aria-label='Products section'>
      <Layout>
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
      <ProductList products={currentProducts} />
      <WrapperBottom>
        <Pagination
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          numberOfPages={numberOfPages}
          currentPage={currentPage}
          numberOfProductsShowing={numberOfProductsShowing}
        />
      </WrapperBottom>
      </Layout>
    </section>
  );
};

export default Products;
