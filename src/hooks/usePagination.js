import { useState, useEffect, useCallback, useRef } from "react";

export default function usePagination(filteredList) {
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfProductsShowing, setNumberOfProductsShowing] = useState(16);
  const initialProductsRef = useRef(16)
  // Guardo el valor inicial (ref) del set de productos para la primera pagina, cuando se cambia del filtro, muestro ese valor inicial.

  // En la pagina de la categorías al mostrar una cantidad menor a 16 (default)productos, es necesario hacer un update de la cantidad de productos disponibles y cuantos se estan mostrando
  useEffect(() => {
    if (filteredList.length > 0 && filteredList.length < 16) {
      setNumberOfProductsShowing(filteredList.length);
      initialProductsRef.current = filteredList.length
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
    setCurrentPage,
    currentProducts,
    numberOfPages,
    numberOfProductsShowing,
    setNumberOfProductsShowing,
    handleNextPage,
    handlePrevPage,
    initialProductsRef
  };
}
