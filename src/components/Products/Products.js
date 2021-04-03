import React from "react";
import Filter from "./Filter";
import Pagination from "./Pagination";
import { Navigation } from "./styled";

const FILTERS = {
  MOST_RECENT: "Most recent",
  LOWEST_PRICE: "Lowest Price",
  HIGHEST_PRICE: "Highest Price",
};

const Products = () => {
  return (
    <section>
      <Navigation>
        <Filter />
        <Pagination />
      </Navigation>
      {/* product list */}
    </section>
  );
};

export default Products;
