import { useState, useEffect, useCallback } from "react";

export default function usePagination(filteredList) {
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfProductsShowing, setNumberOfProductsShowing] = useState(16);

  useEffect(() => {
    if (filteredList.length > 0 && filteredList.length < 16) {
      setNumberOfProductsShowing(filteredList.length);
    }
  }, [filteredList.length]);

  const PRODUCTS_PER_PAGE = 16;
  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProducts = [...filteredList].slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const numberOfPages = Math.ceil(filteredList.length / PRODUCTS_PER_PAGE);

  const handleNextPage = useCallback(() => {
    setCurrentPage((prevPage) => prevPage + 1);
    setNumberOfProductsShowing((prevNumber) => prevNumber + PRODUCTS_PER_PAGE);
    window.scrollTo(0, 500);
  }, []);

  const handlePrevPage = useCallback(() => {
    setCurrentPage((prevPage) => prevPage - 1);
    setNumberOfProductsShowing((prevNumber) => prevNumber - PRODUCTS_PER_PAGE);
    window.scrollTo(0, 500);
  }, []);

  return {
    currentPage,
    currentProducts,
    numberOfPages,
    numberOfProductsShowing,
    handleNextPage,
    handlePrevPage,
  };
}
