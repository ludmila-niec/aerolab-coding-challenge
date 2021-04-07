import { useState } from "react";

export default function useFilter(filterDefault, productList) {
  const [filteredList, setFilteredList] = useState([]);
  const [filterApplyed, setFilterApplyed] = useState(filterDefault);

  const showMostRecent = (selected) => {
    setFilterApplyed(selected);
    setFilteredList(productList);
  };

  const showLowestPrice = (selected) => {
    setFilterApplyed(selected);
    const lowestPriceList = [...productList].sort((a, b) => a.cost - b.cost);
    setFilteredList(lowestPriceList);
  };

  const showHighestPrice = (selected) => {
    setFilterApplyed(selected);
    const highestPriceList = [...productList].sort((a, b) => b.cost - a.cost);
    setFilteredList(highestPriceList);
  };
  return {
    filteredList,
    setFilteredList,
    filterApplyed,
    showMostRecent,
    showLowestPrice,
    showHighestPrice,
  };
}
