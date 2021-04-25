import React from "react";
import Layout from "../Layout";
import Filter from "./Filter";
import Pagination from "./Pagination";
import ProductList from "./ProductList";
import Spinner from "../Spinner";
import { Navigation, WrapperBottom, WrapperFlex } from "./styled";
import useFilter from "../../hooks/useFilter";
import usePagination from "../../hooks/usePagination";
import { STATUS } from "../../service/status";

export const TYPES = {
  MOST_RECENT: "MOST_RECENT",
  LOWEST_PRICE: "LOWEST_PRICE",
  HIGHEST_PRICE: "HIGHEST_PRICE",
};

const Products = ({ products, status }) => {
  const { filteredList, filterApplyed, setFilterApplyed } = useFilter(products);
  const {
    currentPage,
    currentProducts,
    numberOfPages,
    numberOfProductsShowing,
    handleNextPage,
    handlePrevPage,
  } = usePagination(filteredList);

  const handleFilterSelected = (filter) => {
    setFilterApplyed(filter);
  };

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
            handleFilterSelected={handleFilterSelected}
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

export default React.memo(Products);
