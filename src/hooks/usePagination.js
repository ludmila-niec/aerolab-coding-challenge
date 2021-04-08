import { useState } from "react";

export default function usePagination(filteredList) {
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfProductsShowing, setNumberOfProductsShowing] = useState(16);

  const PRODUCTS_PER_PAGE = 16;
  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProducts = [...filteredList].slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const numberOfPages = Math.ceil(filteredList.length / PRODUCTS_PER_PAGE);

  function handleNextPage() {
    setCurrentPage((prevPage) => prevPage + 1);
    setNumberOfProductsShowing((prevNumber) => prevNumber + PRODUCTS_PER_PAGE);
    window.scrollTo(0, 300);
  }
  function handlePrevPage() {
    setCurrentPage((prevPage) => prevPage - 1);
    setNumberOfProductsShowing((prevNumber) => prevNumber - PRODUCTS_PER_PAGE);
    window.scrollTo(0, 300);
  }

  return {
    currentPage,
    setCurrentPage,
    currentProducts,
    numberOfPages,
    numberOfProductsShowing,
    setNumberOfProductsShowing,
    handleNextPage,
    handlePrevPage,
  };
}
