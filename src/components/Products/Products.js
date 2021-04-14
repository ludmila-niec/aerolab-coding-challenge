import React, { useEffect } from "react";
import Layout from "../Layout";
import Filter from "./Filter";
import Pagination from "./Pagination";
import ProductList from "./ProductList";
import Spinner from "../Spinner";
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

const Products = ({ products, status }) => {
  const {
    filteredList,
    setFilteredList,
    filterApplyed,
    showMostRecent,
    showLowestPrice,
    showHighestPrice,
  } = useFilter(TYPES.MOST_RECENT, products);
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
    setFilteredList(products);
  }, [products, setFilteredList]);

  useEffect(() => {
    if (products.length > 16) {
      setCurrentPage(1);
      setNumberOfProductsShowing(16);
    }
  }, [products.length, filterApplyed, setCurrentPage, setNumberOfProductsShowing]);

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
    <section aria-label="Products section">
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
            totalProducts={filteredList.length}
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
            totalProducts={filteredList.length}
          />
        </WrapperBottom>
      </Layout>
    </section>
  );
};

export default Products;
