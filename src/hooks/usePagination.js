import { useState, useEffect } from "react";

export default function usePagination(filteredList) {
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfProductsShowing, setNumberOfProductsShowing] = useState(0);
  useEffect(() => {
    if (filteredList.length >= 16) {
      setNumberOfProductsShowing(16);
    } else {
      setNumberOfProductsShowing(filteredList.length);
    }
  },[filteredList]);

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
    window.scrollTo(0, 500);
  }
  function handlePrevPage() {
    setCurrentPage((prevPage) => prevPage - 1);
    setNumberOfProductsShowing((prevNumber) => prevNumber - PRODUCTS_PER_PAGE);
    window.scrollTo(0, 500);
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
