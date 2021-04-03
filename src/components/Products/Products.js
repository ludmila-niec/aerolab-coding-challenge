import React from "react";
import Filter from "./Filter/Filter";
import Pagination from "./Pagination/Pagination";
import { Navigation } from "./styled";

const FILTERS = {
  MOST_RECENT: "Most recent",
  LOWEST_PRICE: "Lowest Price",
  HIGHEST_PRICE: "Highest Price",
};

const Products = () => {
  return (
    <div>
      <Navigation>
        <Filter />
        <Pagination />
      </Navigation>
      {/* product list */}
    </div>
  );
};

export default Products;
